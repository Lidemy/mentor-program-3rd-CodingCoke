const request = new XMLHttpRequest();
const gameBoard = document.querySelector('.game_board');

// 截圖: streams.preview.medium
// logo: streams.channel.logo
// name: streams.channel.name
// 說明: streams.channel.status
// 連結: streams.channel.url

request.onload = () => {
  const json = JSON.parse(request.responseText);
  for (let i = 0; i < 20; i += 1) {
    const item = document.createElement('div');
    item.innerHTML = `<div class="game_live">
                        <a href="${json.streams[i].channel.url}">
                          <img src="${json.streams[i].preview.medium}">
                          <div class="game_info">
                            <img class="game_info_logo" src="${json.streams[i].channel.logo}">
                            <div class="game_info_description">
                              <h5>${json.streams[i].channel.name}</h5>
                              <p>${json.streams[i].channel.status}</p>
                            </div>
                          </div>
                        </a>
                      </div>`;
    gameBoard.appendChild(item);
  }
  console.log(json.streams[0].channel.url);
};

request.open('GET', 'https://api.twitch.tv/kraken/streams/?game=League of Legends&limit=20', true);
request.setRequestHeader('Client-ID', 'gy8an6p6jv5obfbiuzn7c80hcscpb7');
request.send();
