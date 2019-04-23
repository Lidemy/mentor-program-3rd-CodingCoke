function reverse(str){
  //做一個新陣列準備裝反轉的字串
  var newStr=[];  
  //利用迴圈，從原字串最尾端的索引開始倒回來，依序放入新陣列(用push)，就得到裝反轉字串的新陣列
  for (i = str.length-1 ; i >= 0 ; i--){
    newStr.push(str[i])
  }
  //印出新陣列，直接印會字符串中間會有","不好看，查了個 join的函數拿來做串接字符串，印出正確效果
  console.log(newStr.join(""));
}
reverse("hello");