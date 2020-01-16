// 代辦事項陣列，裡面塞進一個一個的 task
let list = [];
// 產生新的代辦事項
function createNewTask(content, id) {
  const task = {};
  task.id = id;
  task.content = content;
  return task;
}

// 每列代辦事項的 html
function getHtml(value, id) {
  return `
    <li class="list-group-item list-group-item-success d-flex justify-content-between align-items-center ">
        ${value}
        <div>
            <div class='btn btn-primary task-status'>未完成</div>
            <div class='btn btn-danger todo__delete' id=${id}>刪除</div>
        </div>
    </li>`;
}
// 清空列表再重新 render 出所有的代辦事項 list
function render() {
  $('.todo-list').empty();
  for (let i = 0; i < list.length; i += 1) {
    $('.todo-list').append(getHtml(list[i].content, list[i].id));
  }
}

// 在 list 中加入 task
function addTodo(value) {
  const newTaskContent = value;
  const task = createNewTask(newTaskContent, list.length);
  list.push(task);
  $('.add-todo').val('');
}

function removeTodo(id) {
  list = list.filter(item => item.id !== parseInt(id, 10)); // 注意型態
  render();
}


$(document).ready(() => {
  // 新增任務
  $('body').on('keydown', (e) => {
    if (e.key === 'Enter') {
      const insertContent = $('.add-todo').val();
      if (insertContent) {
        addTodo(insertContent);
        render();
      }
    }
  });

  // 移除任務
  $('body').on('click', '.btn-danger', function () {
    removeTodo($(this).attr('id'));
  });

  // 利用 toggle 完成任務狀態轉換
  $('body').on('click', '.task-status', function () {
    $(this).toggleClass('btn-success');
    $(this).toggleClass('btn-primary');
    $(this).toggleClass('done');
    if ($(this).hasClass('done')) {
      $(this).text('完成');
    } else {
      $(this).text('未完成');
    }
  });
});
