function capitalize(str) {
  //���@�ӷs�}�C�h�˭n��X���r��
  var newStr=[];
  
  //���N str �����r�� toUpperCase() ��j�g��A�� push ��J newStr
  newStr.push(str[0].toUpperCase());
  
  //�� for �j��� str �̪��ѤU�r������˶i newStr
  for (i = 1;i <= str.length - 1; i++){
  newStr.push(str[i]);
  }
  
  //�L�X�s�}�C�A�����L�|�r�Ŧꤤ���|��","�A�� join() ���걵�L�X���T�ĪG
  return(newStr.join(''));
}


console.log(capitalize('hello'));
