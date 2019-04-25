//做出 join()
function join(arr, concatStr) {
  
  //先用迴圈 + splice()，在陣列奇數索引格上插入 concatStr
  for(n = 1; n < arr.length; n += 2){
    arr.splice(n,0,concatStr)
  }
  
  //頭痛的來了，直接用 toString() 轉成字串回傳，字串裡會多','
  //若使用 replace(/,/gi,'') 代換掉','，那 concatStr 如果是','也會一起被取代掉
  //只好嘗試做出 console.log(arr[0]+arr[1]+arr[2]...) 的效果去忽略','
  
  //做出個 newString 字串，用迴圈讓它去裝 arr[0]+arr[1]+arr[2]....
  var newString = ''; 
  for(m = 0; m < arr.length; m++){
    newString = newString + arr[m];
  }
  //幸好輸出結果是正確的
  return newString;
}

//做出 repeat()
function repeat(str, times) {
  
  //做個新陣列~~
  var newRepeatArr =[];
  
  //用迴圈裝 str ，裝 times 次
  for( i = 1; i <= times; i++){
    newRepeatArr.push(str);
  }
  //join() 連接後再回傳
  return newRepeatArr.join('');
}
console.log(join(["a", 1, "b", 2, "c", 3], ','));
console.log(repeat('a', 5));
