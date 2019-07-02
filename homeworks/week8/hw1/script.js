const request = new XMLHttpRequest();
const html = document.querySelector('html');
const prizeNmae = document.querySelector('.prize_info_name');
const prizeInfo = document.querySelector('.prize_info');

function firstPrize() {
  prizeNmae.innerText = '恭喜你中頭獎了！日本東京來回雙人遊！';
  document.querySelector('html').style.background = 'skyblue';
  const div = document.createElement('div');
  div.innerHTML = '<img src="img/plane.jpg">';
  // Photo by Ethan McArthur on Unsplash
  prizeInfo.appendChild(div);
}

function secondPrize() {
  prizeNmae.innerText = '二獎！90 吋電視一台！';
  const div = document.createElement('div');
  div.innerHTML = '<img src="img/TV.jpg" alt="TV">';
  // 由 Samsung Belgium - Flickr: UE65F9005STXXE_001_Front_Black, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=30160204
  prizeInfo.appendChild(div);
}

function thirdPrize() {
  prizeNmae.innerText = '恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！';
  const div = document.createElement('div');
  div.innerHTML = '<i class="fab fa-youtube" id="youtube_icon"></i>';
  prizeInfo.appendChild(div);
}

function noPrize() {
  prizeNmae.innerText = '銘謝惠顧';
  prizeNmae.style.color = 'white';
  html.style.background = 'black';
}

request.onload = () => {
  if (request.status >= 200 && request.status < 400) {
    const json = JSON.parse(request.response);
    switch (json.prize) {
      case 'FIRST':
        firstPrize();
        break;
      case 'SECOND':
        secondPrize();
        break;
      case 'THIRD':
        thirdPrize();
        break;
      case 'NONE':
        noPrize();
        break;
      default:
        alert('系統不穩定,請再試一次');
        break;
    }
  } else {
    alert('系統不穩定,請再試一次');
  }
};
request.onerror = () => {
  alert('系統不穩定,請再試一次');
};

request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery', true);
request.send();
