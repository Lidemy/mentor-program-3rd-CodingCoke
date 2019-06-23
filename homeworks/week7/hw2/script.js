const questionnaireForm = document.querySelector('.questionnaire');
const submit = document.querySelector('.submit');
const email = document.querySelector('#email');
const nickname = document.querySelector('#nickname');
const applyType1 = document.querySelector('#type1');
const applyType2 = document.querySelector('#type2');
const carrer = document.querySelector('#carrer');
const sourceOfInformation = document.querySelector('#source_of_information');
const codingBackground = document.querySelector('#coding_background');
const other = document.querySelector('#other');
const formEmail = document.querySelector('#form_input_email');
const formNickname = document.querySelector('#form_input_nickname');
const formApplyType = document.querySelector('#form_input_apply_type');
const formBackground = document.querySelector('#form_input_coding_background');
const formCarrer = document.querySelector('#form_input_carrer');
const formSource = document.querySelector('#form_input_source_of_information');
const applyChecked = [];

// 網路上找來的正規表達式
function isEmail(strEmail) {
  if (strEmail.search(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/) !== -1) {
    return true;
  }
  alert('信箱格式有誤');
  return false;
}

function warningAlert() {
  alert('好像有地方漏填了，請再仔細看看');
}

submit.addEventListener('click', () => {
  if (applyType1.checked === true) {
    applyChecked.push(applyType1.value);
  } else {
    applyChecked.push(applyType2.value);
  }

  if (email.value !== '') {
    isEmail(email.value);
  }

  if (email.value === '') {
    formEmail.style.background = '#FFD6D6';
    document.querySelector('#form_input_email .warning').style.visibility = 'visible';
    warningAlert();
  } else if (nickname.value === '') {
    formNickname.style.background = '#FFD6D6';
    document.querySelector('#form_input_nickname .warning').style.visibility = 'visible';
    warningAlert();
  } else if (applyType1.checked === false && applyType2.checked === false) {
    formApplyType.style.background = '#FFD6D6';
    document.querySelector('#form_input_apply_type .warning').style.visibility = 'visible';
    warningAlert();
  } else if (carrer.value === '') {
    formCarrer.style.background = '#FFD6D6';
    document.querySelector('#form_input_carrer .warning').style.visibility = 'visible';
    warningAlert();
  } else if (sourceOfInformation.value === '') {
    formSource.style.background = '#FFD6D6';
    document.querySelector('#form_input_source_of_information .warning').style.visibility = 'visible';
    warningAlert();
  } else if (codingBackground.value === '') {
    formBackground.style.background = '#FFD6D6';
    document.querySelector('#form_input_coding_background .warning').style.visibility = 'visible';
    warningAlert();
  } else {
    questionnaireForm.submit();
    console.log(`電子郵件地址：${email.value}`);
    console.log(`暱稱：${nickname.value}`);
    console.log(`報名類型：${applyChecked}`);
    console.log(`現在的職業：${carrer.value}`);
    console.log(`怎麼知道這個計畫的：${sourceOfInformation.value}`);
    console.log(`是否有程式背景：${codingBackground.value}`);
    console.log(`其他：${other.value}`);
    alert('送出成功');
  }
});
