function capitalize(str) {
  //做一個新陣列去裝要輸出的字串
  var newStr=[];
  
  //先將 str 的首字用 toUpperCase() 轉大寫後，用 push 放入 newStr
  newStr.push(str[0].toUpperCase());
  
  //用 for 迴圈把 str 裡的剩下字母接續裝進 newStr
  for (i = 1;i <= str.length - 1; i++){
  newStr.push(str[i]);
  }
  
  //印出新陣列，直接印會字符串中間會有","，用 join() 做串接印出正確效果
  return(newStr.join(''));
}


console.log(capitalize('hello'));
