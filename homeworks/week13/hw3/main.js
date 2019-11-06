// JS 版本的 htmlspecialchars()，防堵 XSS
function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function addComment(content, parentId) {
  $.ajax({
    method: 'POST',
    url: './add_comment.php',
    data: { content, parent_id: parentId },
  }).done((resp) => {
    console.log(resp);
    const res = JSON.parse(resp);
    if (res.result === 'success') {
      $('.comments').prepend(`
            <div class='comment col-12 row'>
                <div class='comment__author col-2'><h4>${escapeHtml(res.user)}</h4></div>
                <div class='comme nt__content col-7'><p>${escapeHtml(content)}<p></div>
                <div class='comment__time col-2'>${res.time}</div>
                <div class='operate-comment position col-1'>
                <div class='edit-comment'>
                        <form method='GET' action='./edit_comment.php'>
                            <input type='hidden' value=${res.id} name='message_id'/>
                            <button type='submit' class='edit-button btn'><i class='far fa-edit'></i></button>
                        </form>
                    </div>
                    <i class='btn far fa-trash-alt delete-comment' data-id=${res.id}></i>
                </div>
                <div class='sub-comments col-12 row'></div>
                <div class='add-sub-comment col-12'>
                    <form class='form' role='form' method='POST' action='./add_comment.php'>
                        <div class='form-group'>
                            <div><h5>回覆留言：</h5></div>
                            <input type='hidden' value='${res.id}' name='parent_id'/>
                            <textarea class='form-control' name='content' rows='3'></textarea>
                        </div>
                        <button class='btn btn-primary submit-sub-comment' type='submit'>送出</button>
                        <button class='btn btn-primary' type='reset'>清除</button>
                    </form>
                </div>
            </div>
        `);
    }
  }).fail((resp) => {
    const res = JSON.parse(resp);
    console.log(res.result);
    console.log(res);
  });
}

function addSubComment(subContent, subParentId) {
  $.ajax({
    method: 'POST',
    url: './add_comment.php',
    data: {
      content: subContent,
      parent_id: subParentId,
    },
  }).done((resp) => {
    console.log(resp);
    const res = JSON.parse(resp);
    if (res.result === 'success') {
      console.log(res.result);
      $(`input[value='${res.id}']:last`).parent().parent().parent()
        .prev()
        .prepend(`
            <div class='sub-comment by-author col-12 row'>
              <div class='sub-comment__author col-2'><h5>${escapeHtml(res.user)}</h5></div>
              <div class='sub-comment__content col-7'><p>${escapeHtml(subContent)}<p></div>
              <div class='sub-comment__time col-2'></div>
              <div class='edit-comment'>
                  <form method='GET' action='./edit_comment.php'>
                      <input type='hidden' value=${res.id} name='message_id'/>
                      <button type='submit' class='edit-button btn'><i class='far fa-edit'></i></button>
                  </form>
                  <i class='btn far fa-trash-alt delete-comment' data-id='$message_id'></i>
              </div>
            </div>
        `);
    }
  });
}


function deleteComment(id, target) {
  if (!(window.confirm('是否確定刪除'))) return;
  $.ajax({
    method: 'POST',
    url: './delete_comment.php',
    data: {
      message_id: id,
    },
  }).done(() => {
    // 每次出現太礙眼，先把 alert 註解起來
    // alert('刪除成功');
    $(target).parent().parent().hide(300);
  }).fail(() => {
    alert('刪除失敗');
  });
}

// 主要程式區
$(document).ready(() => {
  // 刪除留言
  $('.comments').on('click', '.delete-comment', (e) => {
    const id = $(e.target).attr('data-id');
    const target = $(e.target);
    deleteComment(id, target);
  });

  // 新增主留言
  $('.container').on('click', '.submit-comment', (e) => {
    e.preventDefault();
    const content = $(e.target).parent().find('textarea[name=content]').val();
    const parentId = $(e.target).parent().find('input[name=parent_id]').val();
    if (content) {
      addComment(content, parentId);
      $(e.target).parent().find('textarea[name=content]').val('');
    } else {
      alert('請輸入內容');
    }
  });

  // 新增子留言
  $('.container').on('click', '.submit-sub-comment', (e) => {
    e.preventDefault();
    const subContent = $(e.target).parent().find('textarea[name=content]').val();
    const subParentId = $(e.target).parent().find('input[name=parent_id]').val();
    if (subContent) {
      addSubComment(subContent, subParentId);
      $(e.target).parent().find('textarea[name=content]').val('');
    } else {
      alert('請輸入內容');
    }
  });
});
