function reverse(str){
  //���@�ӷs�}�C�ǳƸˤ��઺�r��
  var newStr=[];  
  //�Q�ΰj��A�q��r��̧��ݪ����޶}�l�˦^�ӡA�̧ǩ�J�s�}�C(��push)
  for (i = str.length-1 ; i >= 0 ; i--){
    newStr.push(str[i])
  }
  //�L�X�s�}�C�A�����L�|�r�Ŧꤤ���|��","�� join() �걵�r�Ŧ�A�L�X�ĪG
  console.log(newStr.join(""));
}
reverse("hello");