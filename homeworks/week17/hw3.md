# HW3. Hoisting
請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。
```javascript=1
var a = 1
function fn(){
  console.log(a)
  var a = 5
  console.log(a)
  a++
  var a
  fn2()
  console.log(a)
  function fn2(){
    console.log(a)
    a = 20
    b = 100
  }
}
fn()
console.log(a)
a = 10
console.log(a)
console.log(b)
```
## 解答
1. undefined
1. 5
1. 6
1. 20
1. 1
1. 10
1. 100

## 解析
先模擬 JS 底層運作，建立 global EC 內的 VO
```
global VO
{
    a: undefined
    fn(): func.
}
```
接著執行第一行程式碼
```javascript=1
var a = 1
```
這行程式碼使得 global VO 改變
```
global VO
{
    a: 1
    fn(): func.
}
```
2 - 15 行是宣告和定義函式，這個函式在第 16 行被呼叫，因此生成 fn() 的執行環境，裡面有屬於 fn 的 VO
```
fn VO {
    a: undefined
    fn2: func.
}

global VO
{
    a: 1
    fn(): func.
}
```
執行第 3 行，印出 a 值，從 fn 的 VO 中找到 a 為 undefined，印出 undefined
```javascript=1
var a = 1
function fn(){
  console.log(a) // undefined
```
第 4 行重新賦值 a 為 5，fn VO 內的 a 值變為 5
```
fn VO {
    a: 5
    fn2: func.
}
```
第 5 行緊接著印出 fn VO 內的 a，就是 5
```javascript=1
var a = 1
function fn(){
  console.log(a) // undefined
  var a = 5
  console.log(a) // 5
```
第 6 行執行 a++，fn VO 內的 a 值 + 1 變為 6
```
fn VO {
    a: 6
    fn2: func.
}
```
第 7 行重複宣告 a，不影響 a 值可忽略
第 8 行呼叫 fn2 函式，生成 fn2 執行環境和 fn2 VO
```javascript=1
var a = 1
function fn(){
  console.log(a) //undefined
  var a = 5
  console.log(a) // 5
  a++ 
  var a // 
  fn2()
```
因為 fn2 內沒有任何宣告變數，故 fn2 VO 內沒有東西。
```
fn2 VO {
    
}

fn VO {
    a: 6
    fn2: func.
}

global VO
{
    a: 1
    fn(): func.
}
```
執行第 12 行，印出 a，因為 fn2 VO 內沒有 a，所以往上一層，找到 fn VO 內有 a，值為 6，故印出 6 
第 13 行重新賦值 a 為 20，因為 fn2 VO 內沒有變數 a，往上一層找到 fn VO 的 a 值，改為 20
第 14 行賦值變數 b，因為在哪一層的找不到有宣告 b，所以 JS 自動宣告一個全域變數 b，賦值 100
```javascript=1
var a = 1
function fn(){
  console.log(a) //undefined
  var a = 5
  console.log(a) // 5
  a++ 
  var a // 
  fn2()
  console.log(a)
  function fn2(){
    console.log(a) //6
    a = 20
    b = 100
  }
}
```
```
fn VO {
    a: 20
    fn2: func.
}

global VO
{
    a: 1
    fn(): func.
    b: 100
}
```
fn2 函式執行結束，執行第 9 行，印出 fn VO 中值為 20 的a
```javascript=1
var a = 1
function fn(){
  console.log(a) //undefined
  var a = 5
  console.log(a) // 5
  a++ 
  var a // 
  fn2()
  console.log(a) // 20
  function fn2(){
    console.log(a) //6
    a = 20
    b = 100
  }
}
```
fn 函式執行結束，跳出 fn
接下來回到 global EC 內剩下的程式碼，先檢視 VO
```
global VO
{
    a: 1
    fn(): func.
    b: 100
}
```
此時對照現在的 global VO，可以知道 17 行印出的 a 值為 1
第 18 行重新賦值 global VO 內的 a 值為 10
第 19 行印出 global VO 內剛剛被改過的 a，是 10
第 20 行印出 global VO 內的 b，是 100
```javascript=17
console.log(a) // 1
a = 10
console.log(a) // 10
console.log(b) // 100
```