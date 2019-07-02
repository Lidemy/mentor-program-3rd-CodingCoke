const request = new XMLHttpRequest();
const messageInput = document.querySelector('.message_input');
const messageSend = document.querySelector('.message_send');

request.open('GET', 'https://lidemy-book-store.herokuapp.com/posts?_sort=id&_order=desc&_limit=20', true);
request.send();
request.onload = () => {
  const json = JSON.parse(request.response);
  for (let i = 0; i < json.length; i += 1) {
    const div = document.createElement('div');
    div.innerHTML = `<li class='message'>留言${json[i].id}：${json[i].content}</li>`;
    document.querySelector('.content').appendChild(div);
  }
};

messageSend.addEventListener('click', () => {
  if (messageInput.value !== '') {
    request.open('POST', 'https://lidemy-book-store.herokuapp.com/posts', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    request.send(`content=${messageInput.value}`);
    messageInput.value = '';
  }
});

request.onerror = () => {
  console.log('err');
};
