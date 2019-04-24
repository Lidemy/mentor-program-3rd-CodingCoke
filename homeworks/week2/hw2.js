function capitalize(str) {
  //¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿
  var newStr=[];
  
  //¿ str¿¿¿¿ toUpperCase() ¿¿¿¿¿ push ¿¿ newStr
  newStr.push(str[0].toUpperCase());
  
  //¿ for ¿¿¿¿¿¿¿¿¿¿¿¿ newStr
  for (i = 1;i <= str.length - 1; i++){
  newStr.push(str[i]);
  }
  
  //¿ join() ¿¿¿¿¿¿¿¿
  return(newStr.join(''));
}
console.log(capitalize('hello'));
