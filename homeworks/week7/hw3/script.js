let numResult = [];
let operatorPress = [];
let firstNumber = 0;
let secondNumber = 0;
const elementResult = document.querySelector('.result');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const equal = document.querySelector('#equal');
const allClear = document.querySelector('#allClear');
const html = document.querySelector('html');

function reset() {
  numResult = [];
  operatorPress = [];
  firstNumber = 0;
  secondNumber = 0;
  elementResult.innerText = 0;
}

html.addEventListener('click', (e) => {
  if (e.target.id[3] < 10 && numResult[0] !== 0) {
    if (operatorPress[0] === '=') {
      reset();
      operatorPress = [];
    }
    numResult.push(e.target.id[3]);
    elementResult.innerText = (numResult.join(''));
  }
});

plus.addEventListener('click', () => {
  operatorPress.push('+');
  for (let i = 0; i < numResult.length; i += 1) {
    firstNumber += numResult[i] * (10 ** ((numResult.length - 1) - i));
  }
  numResult = ['+ '];
});

minus.addEventListener('click', () => {
  operatorPress.push('－');
  for (let i = 0; i < numResult.length; i += 1) {
    firstNumber += numResult[i] * (10 ** ((numResult.length - 1) - i));
  }
  numResult = ['－ '];
});

equal.addEventListener('click', () => {
  for (let i = 1; i < numResult.length; i += 1) {
    secondNumber += numResult[i] * (10 ** ((numResult.length - 1) - i));
  }
  numResult = [];
  if (operatorPress[0] === '+') {
    numResult.push(firstNumber + secondNumber);
    elementResult.innerText = numResult;
  } else if (operatorPress[0] === '－') {
    numResult.push(firstNumber - secondNumber);
    elementResult.innerText = numResult;
  }
  firstNumber = 0;
  secondNumber = 0;
  operatorPress = [];
  operatorPress.push('=');
});

allClear.addEventListener('click', reset);
