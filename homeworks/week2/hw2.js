function capitalize(str) {
  //做一個陣列準備裝要輸出的字串
  
  var newStr=[];
  
  //將首字用 toUpperCase 轉大寫後，用 push 放進 newStr
  newStr.push(str[0].toUpperCase());
  
  //用 for 迴圈把剩下的字放進 newStr
  for (i = 1;i <= str.length - 1; i++){
  newStr.push(str[i]);
  }
  
  //用 join 函數串接所有字元正確輸出
  return(newStr.join(''));
}
console.log(capitalize('hello'));
