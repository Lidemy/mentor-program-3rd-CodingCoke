function capitalize(str) {
  // 把首字用 toUpperCase() 轉大寫後放入 newStr 陣列
  const newStr = Array(str[0].toUpperCase());
  //  用 for 迴圈把剩下的字放進 newStr
  for (let i = 1; i <= str.length - 1; i += 1) {
    newStr.push(str[i]);
  }
  //  用 join 函數串接所有字元正確輸出
  return (newStr.join(''));
}
console.log(capitalize('hello'));
