function reverse(str) {
  //  ���@�ӷs�}�C�ǳƸˤ��઺�r��
  const newStr = Array(0);
  //  �Q�ΰj��A�q��r��̧��ݪ����޶}�l�˦^�ӡA�̧ǩ�J�s�}�C(��push)
  for (let i = str.length - 1; i >= 0; i -= 1) {
    newStr.push(str[i]);
  }
  //  �L�X�s�}�C�A�����L�|�r�Ŧꤤ���|��","�� join() �걵�r�Ŧ�A�L�X�ĪG
  console.log(newStr.join(''));
}
reverse('hello');
