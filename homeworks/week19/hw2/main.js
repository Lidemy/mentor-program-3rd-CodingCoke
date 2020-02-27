// 預防 XSS 攻擊用的跳脫字元函式
function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
// POST 方法抓全部 todo
function showList() {
  $.ajax({
    method: 'POST',
    url: './getAllTask.php',
    data: {},
  }).done((resp) => {
    const res = JSON.parse(resp);
    for (let i = 0; i < res.length; i += 1) {
      if (res[i].task_isDone === '0') {
        $('ul').append(`
        <li class='list-group-item d-flex justify-content-between align-items-center'>
          <div class='todo__content'>${escapeHtml(res[i].task_content)}</div>
          <div>
            <button class='btn btn-primary task-status' task_status=${res[i].task_isDone} task_id=${res[i].task_id} >未完成</button>
            <button class='btn btn-light todo__edit' task_id=${res[i].task_id}>修改</button>
            <button class='btn btn-light todo__delete' task_id=${res[i].task_id}>刪除</button>
          </div>
        </li>`);
      } else {
        $('ul').append(`
        <li class='list-group-item list-group-item-dark d-flex justify-content-between align-items-center'>
        <div class='todo__content'>${escapeHtml(res[i].task_content)}</div>
          <div>
            <button class='btn btn-success task-status' task_status=${res[i].task_isDone} task_id=${res[i].task_id} >完成</button>
            <button class='btn btn-light todo__edit' disabled task_id=${res[i].task_id}>修改</button>
            <button class='btn btn-light todo__delete' task_id=${res[i].task_id}>刪除</button>
          </div>
        </li>`);
      }
    }
  });
}
// POST 方法新增 todo
function addTodo(content, target) {
  if (content) {
    $.ajax({
      method: 'POST',
      url: './addTask.php',
      data: { content },
    }).done((resp) => {
      const res = JSON.parse(resp);
      if (res.result === 'success') {
        $('#task_list').prepend(`
        <li class='list-group-item d-flex justify-content-between align-items-center'>
          <div class='todo__content'>${escapeHtml(content)}</div>
          <div>
            <button class='btn btn-primary task-status' task_status=0 task_id=${res.task_id}>未完成</button>
            <button class='btn btn-light todo__edit' task_id=${res.task_id}>修改</button>
            <button class='btn btn-light todo__delete' task_id=${res.task_id}>刪除</button>
          </div>
        </li>`);
      }
    });
    $(target).parent().parent().find('input[name=content]')
      .val('');
  } else {
    alert('請輸入內容');
  }
}
// POST 方法刪除 todo
function deleteTodo(id, target) {
  if (!(window.confirm('是否確定刪除'))) return;
  $.ajax({
    method: 'POST',
    url: './deleteTask.php',
    data: {
      id,
    },
  }).done(() => {
    // d-flex 會讓元件不能 hide，所以先移除掉
    $(target).parent().parent().removeClass('d-flex');
    $(target).parent().parent().hide();
  }).fail(() => {
    alert('刪除失敗');
  });
}
// POST 方法修改 todo 狀態
function changeStatus(id, status, target) {
  $.ajax({
    method: 'POST',
    url: './changeStatus.php',
    data: {
      id,
      status,
    },
  }).done((resp) => {
    const res = JSON.parse(resp);
    if (res.result === 'success') {
      if (res.status === 0) {
        $(target).addClass('btn-primary');
        $(target).removeClass('btn-success');
        $(target).attr('task_status', 0);
        $(target).parent().parent().toggleClass('list-group-item-dark');
        $(target).text('未完成');
        $(target).next().removeAttr('disabled');
      } else {
        $(target).removeClass('btn-primary');
        $(target).addClass('btn-success');
        $(target).attr('task_status', 1);
        $(target).parent().parent().toggleClass('list-group-item-dark');
        $(target).text('完成');
        $(target).next().attr('disabled', '');
      }
    } else {
      alert('資料庫異常');
    }
  });
}
// render 出編輯畫面
function renderEditForm(id, content, target) {
  $(target).parent().parent().html(`
  <div class='input-group'>
    <input type='text' class='form-control' value='${escapeHtml(content)}'/>
    <div class='edit__form'>
      <button class="btn btn-primary task-status" task_status="0" disabled>未完成</button>
      <button class="btn btn-dark todo__edit__submit" task_id=${id}>確認</button>
      <button class="btn btn-dark todo__edit__undo " task_id=${id}>放棄</button>
    </div>
  </div>
  `);
}
// 放棄編輯時， get 方法抓單一 todo 回到未編輯前的樣子
// 嘗試用別種 AJAX 請求寫法做一樣的事
function showOneTodo(id, target) {
  $.get('./getOneTask.php', { id }, (data) => {
    const res = JSON.parse(data);
    $(target).parent().parent().parent()
      .html(`
      <div class='todo__content'>${escapeHtml(res.task_content)}</div>
      <div>
        <button class='btn btn-primary task-status' task_status=0 task_id=${id} >未完成</button>
        <button class='btn btn-light todo__edit' task_id=${id}>修改</button>
        <button class='btn btn-light todo__delete' task_id=${id}>刪除</button>
      </div>
    `);
  });
}

// POST 方法修改 todo 內容
function editTodo(id, content, target) {
  if (content) {
    $.ajax({
      method: 'POST',
      url: './editTask.php',
      data: { id, content },
    }).done((resp) => {
      const res = JSON.parse(resp);
      if (res.status === 'success') {
        $(target).parent().parent().parent()
          .html(`
        <div class='todo__content'>${escapeHtml(content)}</div>
        <div>
          <button class='btn btn-primary task-status' task_status=0 task_id=${id} >未完成</button>
          <button class='btn btn-light todo__edit' task_id=${id}>修改</button>
          <button class='btn btn-light todo__delete' task_id=${id}>刪除</button>
        </div>
      `);
      } else {
        alert('有什麼東西出錯了');
      }
    });
  }
}

// 主程式區
$(document).ready(() => {
  showList();
  $('.container').on('click', '.todo__submit', (e) => {
    const content = $(e.target).parent().parent().find('input[name=content]')
      .val();
    addTodo(content, e.target);
  });

  $('.container').on('click', '.task-status', (e) => {
    const id = $(e.target).attr('task_id');
    const status = $(e.target).attr('task_status');
    changeStatus(id, status, e.target);
  });

  $('.container').on('click', '.todo__edit', (e) => {
    const id = $(e.target).attr('task_id');
    const content = $(e.target).parent().prev().text();
    renderEditForm(id, content, e.target);
  });


  $('.container').on('click', '.todo__edit__submit', (e) => {
    const id = $(e.target).attr('task_id');
    const content = $(e.target).parent().prev().val();
    editTodo(id, content, e.target);
  });

  $('.container').on('click', '.todo__edit__undo', (e) => {
    const id = $(e.target).attr('task_id');
    showOneTodo(id, e.target);
  });

  $('.container').on('click', '.todo__delete', (e) => {
    const taskId = $(e.target).attr('task_id');
    deleteTodo(taskId, e.target);
  });
});
