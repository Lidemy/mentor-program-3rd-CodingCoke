## CSS 預處理器是什麼？我們可以不用它嗎？
原生的 CSS 語法，不支援巢狀結構、變數等等的一般程式語言的特性，使得編寫上較為繁瑣、缺乏結構性。
CSS 預處理器就是幫助你用更方便、更簡潔的方式去編寫 CSS 的工具。
它讓你可以像寫其他程式語言一樣，使用變數、巢狀、引入等等的方式去編寫 CSS，只要寫完後交給預處理器編譯，就會生成符合你編寫語法的原生 CSS，讓開發者少掉許多麻煩。
(流程就像這樣： 用程式語言的特色寫 CSS => 交給預處理器編譯 => 產生符合結果的原生 CSS 檔案)
即使不使用預處理器，也還是可以寫 CSS，只是會辛苦繁瑣一點就是了。

## 請舉出任何一個跟 HTTP Cache 有關的 Header 並說明其作用。
在 HTTP 1.0 有 Expires 和 Pragma: no-cache。
在 HTTP 1.1 有 Cache-Control。
Expires 是設定快取過期的時間。
Pragma: no-cache 代表只有在伺服端有更新檔案的時候，才會去抓取檔案，不然都只讀 cache 裡的檔案。
Cache-Control 有幾種屬性可以設置，包含 max-age, public, private, no-cache, co-store 等等。
Cache-Control: private, 指快取是私有的，只有 Client 端的使用者可以存取。
Cache-Control: public, 指快取是公有共享的，中間傳輸的 ISP, CDN 服務商都可存取。

資料來源1：循序漸進理解 HTTP Cache 機制 by Huli (https://blog.techbridge.cc/2017/06/17/cache-introduction/)
資料來源2：新手坑：讓人又愛又恨的 HTTP Caching by Amdis Liu (https://medium.com/frochu/http-caching-3382037ab06f)
資料來源3：HTTP 快取 By Ilya Grigorik (https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching?hl=zh-TW)

## Stack 跟 Queue 的差別是什麼？
Stack 遵守 FILO (先進後出)的處理原則；Queue 遵守 FIFO (先進先出) 的處理原則。
Stack 儲存資料就像在桌子上疊書，最先疊的書在最下面，之後疊的書依序在前一本的上面;
拿取資料的時候，就像從一疊書的最上層拿書一樣，由最後一本放的書開始拿，最先放的書最後拿，是為「先進後出」。
Queue 存取資料就像喝珍奶時吸珍珠的過程，最先吸進吸管的珍珠，會優先進到嘴巴，然後依序吸到排在後頭的珍珠，是為「先進先出」。

## 請去查詢資料並解釋 CSS Selector 的權重是如何計算的（不要複製貼上，請自己思考過一遍再自己寫出來）
CSS Selector 權重計算分成四種類型，分為
第一類. 寫在 HTML 標籤裡的 style (inline style attribute)的數目
第二類. id 選擇器的數目
第三類. class 選擇器、屬性選擇器、偽類選擇器(如 :hover)的數目
第四類. 標籤選擇器的數目(如: div, p)
* 在比較 CSS Selector 時，我們計算各類數目，並依第一類 > 第二類 > 第三類 > 第四類的順序進行比較。
* 如果第一類的數目相等，比較第二類；第二類的數目相等，比較第三類；第三類的數目相等，比較第四類。
* 若數目完全相等，寫在後面的選擇器會蓋過前面的。
* 如果兩種 Selector 在前面的一類已經分出數目多寡，則不再比較後面的數目，後面的數目不管多少，權重永遠不會高於前面一類。
* * 沒有任何權重，可以輕易被其他選擇器蓋過
* !important 永遠大於任何權重，能覆蓋其他任何權重的選擇器，只有後寫的 !important 能蓋過前面寫的 !important。
舉例
#id p : 第一類數目 0, 第二類數目 1, 第三類數目 0, 第四類數目 1, 記作 0 - 1 - 0 - 1。
body div ul li p：第一類數目 0, 第二類數目 0, 第三類數目 0, 第四類數目 5, 記作 0 - 0 - 0 - 5
前者的選擇器大於後者。
資料來源1：知呼--前端雜談:CSS 權重 by ssthouse (https://zhuanlan.zhihu.com/p/50322177)
資料來源2：https://cssspecificity.com
資料來源3：iT 邦幫忙-- Day 20 小事之 CSS 權重 by 小艾 (https://ithelp.ithome.com.tw/articles/10196454)