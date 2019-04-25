function reverse(str) {
  //  做一個新陣列準備裝反轉的字串
  const newStr = Array(0);
  //  利用迴圈，從原字串最尾端的索引開始倒回來，依序放入新陣列(用push)
  for (let i = str.length - 1; i >= 0; i -= 1) {
    newStr.push(str[i]);
  }
  //  印出新陣列，直接印會字符串中間會有","用 join() 串接字符串，印出效果
  console.log(newStr.join(''));
}
reverse('hello');
