function capitalize(str) {
  //���@�Ӱ}�C�ǳƸ˭n��X���r��
  
  var newStr=[];
  
  //�N���r�� toUpperCase ��j�g��A�� push ��i newStr
  newStr.push(str[0].toUpperCase());
  
  //�� for �j���ѤU���r��i newStr
  for (i = 1;i <= str.length - 1; i++){
  newStr.push(str[i]);
  }
  
  //�� join ��Ʀ걵�Ҧ��r�����T��X
  return(newStr.join(''));
}
console.log(capitalize('hello'));
