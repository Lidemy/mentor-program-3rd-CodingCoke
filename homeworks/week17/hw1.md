## Week17-hw1 Event Loop
#### 在 JavaScript 裡面，一個很重要的概念就是 Event Loop，是 JavaScript 底層在執行程式碼時的運作方式。請你說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。
```javascript=
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
```
#### 解答
```
1
3
5
2
4
```
#### 解析
先備知識：JS 是單執行緒語言，特色就是一次只做一件事的意思，底層表現上會把程式碼依序放入 stack 中，採後進先出的方式去完成一個一個被呼叫的函式。
現在一行一行來看，第 1 行很簡單
```javascript=
console.log(1) // => 進入 stack, 頁面上印出 1，移出 stack
```
第 2 ~ 4 行比較特別，`setTimeout()` 是一種 callback function，是用於「達到某一條件後去呼叫函數」的函式。
而 `setTimeout()` 不是 JS 原生規範中存在的，而是瀏覽器或環境所提供，屬於 webapis。所以不會直接進入 stack, 而是會先到 webapis 去執行。
```javascript=2
setTimeout(() => {
  console.log(2)
}, 0) 
// => 這一段函式會先移到 webapis 區
```
接下來第 5 行，同第 1 行的情形
```javascript=5
console.log(3) // => 進入 stack, 頁面上印出 3，移出 stack
```
第 6 ~ 8 行，遇到第二個回呼函式，同上一個一樣，移到 webapis 區
```javascript=6
setTimeout(() => {
  console.log(4)
}, 0) 
// => 這一段函式也會移到 webapis 區
```
最後第 9 行，同第之前的情形，直接進入 stack，印出值
```javascript=9
console.log(5) // => 進入 stack, 頁面上印出 5，移出 stack
```
到這裡為止，stack 裡的函式清空了，得到前三個印出的答案
```
1
3
5
```
而 webapi 區還剩 2 個函式還沒處理
```javascript
// webapis
setTimeout(() => {
  console.log(2)
}, 0) 

setTimeout(() => {
  console.log(4)
}, 0) 
```
當兩個函式在 webapis 區達成條件 (以 `setTimeout` 為例，就是指最少等候幾秒以後，例子中是最少等候 0 秒)，並不會直接將裡面的 `console.log` 函式丟回 stack 執行，因為這樣會打亂 stack 執行順序，所以會將 `console.log` 移動到一個叫做 task queue(或稱 callback queue) 的區域
所以 0 秒後，webapis 清空，準備被呼叫的函式移動到 task queue
```javascript
// task queue
  console.log(2)
  console.log(4)
```
這裡要知道 Event Loop 的機制另一個機制
> task queue 會一直檢查 stack 是不是空的，如果空了，才把 task queue 裡等待執行的函式放進去

由於前面依序印出 1 3 5 後，stack 沒有要執行的工作了，所以 task queue 依序放入 task queue 裡等待的函式。
```javascript
// task queue
  console.log(2) // 進入 stack, 頁面上印出 2，移出 stack
  console.log(4) // 進入 stack, 頁面上印出 4，移出 stack
```
至此我們得到了輸出結果
```
1
3
5
2
4
```
