#### 請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。
```javascript=
for(var i=0; i<5; i++) {
  console.log('i: ' + i)
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
```
#### 解答
```
i:0
i:1
i:2
i:3
i:4
5 
5
5
5
5
```
#### 解析
每一次迴圈跑兩個函式
```javascript
console.log('i: ' + i)
```
與
```javascript
setTimeout(() => {
    console.log(i)
    }, i * 1000)
}
```
跑第 1 圈，`i = 0` 時：
```javascript
console.log('i: ' + 0)
```
第一個函式進入 stack，在頁面印出 `i：0 `
```javascript
setTimeout(() => {
    console.log(i)
    }, 0 * 1000)
}
```
第二個回調函式進入 webapis 區，等待回調。
注意此時值為 0 的 `i` ，是給 `setTimeout` 的參數，在等待結束時，才會去找 `console.log(i)` 中的 `i` 值再印出。

`i+ 1` 後跑第 2 圈，`i = 1` 時：
```javascript
console.log('i: ' + 1)
```
第一個函式進入 stack，在頁面印出 `i：1`。
第二個回調函式進入 webapis 區，。
後續迴圈以此類推，直到 `i = 5`時不符合迴圈條件` i < 5`，跳出迴圈不再執行，至此已經在頁面上印出：
```
i:0
i:1
i:2
i:3
i:4
```
這時 stack 是沒有剩餘工作的狀態，而 webapis 區已經滿足最小等待秒數的 callback function，將裡面的函式移動至 task queue。
當偵測到 task 沒有工作時，task queue 依序移入 callback function 內的 `console.log(i)`。
此時去找 `i` 值，由於是用 `var` 宣告在全域中，閉包的特性使得 `i` 仍殘留著先前跑完迴圈的值，即為 5。
所以接下來 task queue 移入的 `console.log(i)`，都是印出 5。
task queue 全部移入 stack，stack 依序執行，清空後程式結束，得到輸出為
```
i:0
i:1
i:2
i:3
i:4
5 
5
5
5
5
```
#### 其他補充
當迴圈內改用 let 宣告 i，輸出結果會變為
```
i:0
i:1
i:2
i:3
i:4
0
1
2
3
4
```
主因在於 var 與 let 作用域(scope)不同的關係，let 的作用域是一個 block，每跑一次迴圈，執行方式會相似於：
```javascript
{
let i = 0;
console.log('i: ' + 0)
setTimeout(() => {
    console.log(i)
    }, 0 * 1000)
}

{
let i = 1;
console.log('i: ' + 1)
setTimeout(() => {
    console.log(i)
    }, 1 * 1000)
}

{
let i = 2;
console.log('i: ' + 2)
setTimeout(() => {
    console.log(i)
    }, 2 * 1000)
}

etc.
```
這部分暫時沒辦法用我現在的能力透徹解釋，故節錄參考資料的原話：
> let 會在每次迭代時重新宣告變數 i，並將上一次迭代的結果作為這一次的初始值。
> 出處：
> [Summer。桑莫。夏天-你懂 JavaScript 嗎？#15 閉包（Closure）](https://cythilya.github.io/2018/10/22/closure/)