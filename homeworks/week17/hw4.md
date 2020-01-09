#### 請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。
```javascript=
const obj = {
  value: 1,
  hello: function() {
    console.log(this.value)
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
}
  
const obj2 = obj.inner
const hello = obj.inner.hello
obj.inner.hello() // ??
obj2.hello() // ??
hello() // ??
```
#### 解答
```javascript=16
obj.inner.hello() // 印出 2
obj2.hello() // 也是印出 2
hello() // undefined
```
#### 解析
依據下面的原則去思考這則題目
1. this 的值跟作用域跟程式碼的位置在哪裡完全無關，只跟「你如何呼叫」有關
2. 函式的呼叫 `func(p1, p2)` 等价于 `func.call(undefined, p1, p2)`
3. func.call( ) 的第一個參數值，就是 this
> 出處
> [淺談 JavaScript 頭號難題 this：絕對不完整，但保證好懂 by Huli](https://github.com/aszx87410/blog/issues/39)
>[this 的值到底是什么？一次说清楚 by 知乎-方應杭](https://zhuanlan.zhihu.com/p/23804247)

利用上述原則
```javascript=16
obj.inner.hello() 
obj2.hello() 
hello() 
```
可轉換成
```javascript=16
hello.call(obj.inner) 
hello.call(obj2) 
hello.call() 
```
`hello()` 函式依據物件裡的定義，用於印出 this 的 value
第 16 行的 this 如上轉換所見，是 `obj.inner`，裡面的 value 值為 2，是故
```javascript=16
hello.call(obj.inner) // 印出 2
```
第 17 行的 this 如上轉換，是 `obj2`，`obj2` 在第 14 行用` = `賦值時指向 `obj.inner` 的記憶體位址，裡面的 value 值為 2，所以
```javascript=16
hello.call(obj.inner) // 印出 2
hello.call(obj2) // 也是印出 2
```
第 18 行轉換後為
```javascript=18
hello.call() 
```
等同於沒有給定 this 值，此時值為「預設綁定」，依據執行環境不同會有不同的預設值，在嚴格模式下，則為 `undefined`
```javascript=16
hello.call(obj.inner) // 印出 2
hello.call(obj2) // 也是印出 2
hello.call() // undefined
```
