const elementHtml = document.querySelector('html');
const elementTryAgain = document.querySelector('.tryAgain');
const elementRank1st = document.querySelector('.rank_1st');
const elementRank2nd = document.querySelector('.rank_2nd');
const elementRank3rd = document.querySelector('.rank_3rd');
let isFinish = false;
let isColorChange = false;
let randomTime = 0;
let startTime = 0;
let colorR = 0;
let colorG = 0;
let colorB = 0;
let score = 0;
const scoreArray = [];

function generateColorCode() {
  colorR = Math.floor(Math.random() * 255);
  colorG = Math.floor(Math.random() * 255);
  colorB = Math.floor(Math.random() * 255);
}

function generateRandomTime() {
  randomTime = ((Math.random() * 2) + 1) * 1000;
}

function changeColor() {
  startTime = new Date();
  isColorChange = true;
  if (isFinish !== true) {
    elementHtml.style.background = `rgba(${colorR}, ${colorG}, ${colorB}, 0.6)`;
  }
}

function showRankList() {
  scoreArray.sort((a, b) => a - b);
  if (scoreArray[0] !== undefined) {
    elementRank1st.innerText = `第 1 名：${scoreArray[0]} 秒`;
  }
  if (scoreArray[1] !== undefined) {
    elementRank2nd.innerText = `第 2 名：${scoreArray[1]} 秒`;
  }
  if (scoreArray[2] !== undefined) {
    elementRank3rd.innerText = `第 3 名：${scoreArray[2]} 秒`;
  }
}

function gameJudge() {
  if (isFinish !== true && isColorChange !== true) {
    alert('還沒變色喔,挑戰失敗');
    elementTryAgain.style.display = 'inline';
    isFinish = true;
  } else if (isFinish !== true && isColorChange !== false) {
    score = (new Date() - startTime) / 1000;
    alert(`你的成績 ${score} 秒`);
    elementTryAgain.style.display = 'inline';
    isFinish = true;
    scoreArray.push(score);
  }
  showRankList();
}

function gameReset() {
  elementHtml.style.background = 'white';
  elementTryAgain.style.display = 'none';
  isColorChange = false;
  isFinish = false;
  generateRandomTime();
  setTimeout(changeColor, randomTime);
  generateColorCode();
}

generateColorCode();
generateRandomTime();
setTimeout(changeColor, randomTime);

elementHtml.addEventListener('click', gameJudge);

elementTryAgain.addEventListener('click', (e) => {
  gameReset();
  e.stopImmediatePropagation();
});

elementHtml.addEventListener('keydown', (e) => {
  if (e.keyCode === 32) {
    gameJudge();
  }
});

elementHtml.addEventListener('keydown', (e) => {
  if (e.keyCode === 82) {
    gameReset();
  }
});
