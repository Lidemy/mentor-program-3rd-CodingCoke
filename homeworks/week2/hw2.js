function capitalize(str) {
  //真真真真真真真�
  var newStr=[];
  
  //� str真真 toUpperCase() 真真� push 真 newStr
  newStr.push(str[0].toUpperCase());
  
  //� for 真真真真真真 newStr
  for (i = 1;i <= str.length - 1; i++){
  newStr.push(str[i]);
  }
  
  //� join() 真真真真
  return(newStr.join(''));
}
console.log(capitalize('hello'));
