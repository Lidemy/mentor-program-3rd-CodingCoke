function capitalize(str) {
  //  �ǳƸ˭n��X���r��
  const newStr = Array(str[0].toUpperCase());
  //  �N���r�� toUpperCase ��j�g��A�� push ��i newStr
  //  newStr.push(str[0].toUpperCase());
  //  �� for �j���ѤU���r��i newStr
  for (let i = 1; i <= str.length - 1; i += 1) {
    newStr.push(str[i]);
  }
  //  �� join ��Ʀ걵�Ҧ��r�����T��X
  return (newStr.join(''));
}
console.log(capitalize('hello'));
