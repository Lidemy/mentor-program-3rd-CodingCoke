const request = require('request');

const options = {
  url: 'https://api.twitch.tv/helix/games/top',
  headers: {
    'Client-ID': 'gy8an6p6jv5obfbiuzn7c80hcscpb7',
  },
};

function callback(error, response, body) {
  const topGamesData = JSON.parse(body).data;
  const numberOfGames = (Object.keys(topGamesData).length);
  for (let i = 0; i < numberOfGames; i += 1) {
    console.log(`${topGamesData[i].id}${' '}${topGamesData[i].name}`);
  }
}

request(options, callback);
