## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
1. <address>：裏頭放入文件/網頁所有者的聯繫資料，比如說聯絡信箱。
2. <abbr>：定義、標記縮寫名詞用的標籤，通常搭配搭 title 屬性放完整名詞使用，比如：<abbr title="HyperText Markup Language">HTML</abbr> 。
3. <map>：可以在 img 插入的圖片上規劃各種不同的範圍區塊，然後做到點擊區塊可以超連結到不同位址的標籤，可以用來製作觀光景點地圖。

## 請問什麼是盒模型（box modal）
指的就是 HTML 裡面的元素除了本身的長、寬的長度之外，還要計入 border 寬度、padding 寬度、 margin 寬度等數字，才算是真正在網頁上顯示出來的長度與寬度。
就好像原本的元素盒子外面包著布、布外面包著大盒子，讓原本的元素長寬被撐開加大了，如果切版時沒有考慮到長寬被撐大的狀況，很容易發生跑版的悲劇。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
display 是 HTML 每種元素都有的屬性，分為 inline, block兩種，通常可以透過 CSS 設定修改。
* inline: 行內元素，元素不會換行，不能設定高度與寬度，屬性為 inline 的元素可以水平顯示在同一行上面。 
* block: 區塊元素，每增加一個區塊元素都會從新的一行開始，也就是會換行，並且可以設定長度跟寬度。
* inline-block: 為了排版好用應運而生的屬性，當設定元素 display 為 inline-block，則除保有 inline 的特性可以水平排列外，也有 block 的特性可以設定長寬。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
* static: 元素預設的 position 屬性，不會特別被定位，照著瀏覽器、 HTML 的安排自動排版。
* fixed: 透過 top / right / bottom / left 設定位置，設定後最大的特性就是網頁滾動時，會始終固著在螢幕上相同的位置，怎麼滑網頁都不會被滑走。
* relative: 不特別設定的話，跟 static 一樣。若透過 top / right / bottom / left 設定位置，會讓元素依據原本的位置去做調整位移，位移時不影響其他元素的位置。
* absoult：會依隨著 relative 元素的位置做絕對定位，永遠出現在 relative 元素的固定座標上，若上層都沒定義 relative ，則依隨 body 元素的位置。


