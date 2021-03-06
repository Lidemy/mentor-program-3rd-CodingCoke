### 第十一週
#### 後端基礎 - 雜湊(hash)
雜湊的概念不難理解，網路上也有幾個網站和文章用淺白的方式去介紹，幾篇延伸閱讀的文章讀起來也不會很艱澀，所以覺得從雜湊開始去接觸資訊安全，是一個滿好的切入點。
所以複習時是有點模仿 Huli 的感覺去寫了一篇文章放在 Medium, 名稱是「密碼存明碼，怎麼不直接去裸奔算了？」，嘗試看看用有趣簡單的方式去介紹自己知道的東西。
透過寫這篇文章，又再一次複習加鹽、彩虹表等概念，也深入一步去認識到哪些演算法是已經被破解的，是一種很不錯的複習手段。雖然寫完覺得還有很多地方可以更好，或覺得會不會原創性不夠、被內行看笑話等等，這時候就會想起剛跟課時 Huli 開示：「反正其實不會有人看 / 非常少人看。」不在寫作上放太多壓力，索性就不鑽牛角尖了。不過寫分享文章這件事真的滿有趣又實用的。

#### 後端基礎 - Session 與 Cookie
這裡真的是滿模糊的一塊，的確需要多看幾遍，循序來學習。
依照課程進度，我是這樣認識
1. 「Cookie」可以在瀏覽器端存資訊，可以是一個字串，可以是一串數字。
2. 「Cookie」的資訊很容易修改，所以內容不能太簡單，最好是一串隨機生成的亂碼。
3. 可以在資料庫做一個表格，內容是「亂碼」對應「真正內容」，這樣瀏覽器端「Cookie 存的亂碼」便有了意義，想竄改也不知道改什麼才對。
4. 看似無序的「亂碼」有個正式名稱，叫做「Session ID」。
5. 透過「Session ID」去找伺服端對應內容，以確保瀏覽器端始終是同一個使用者的這個行為，有人說是「Session 機制」。
6. 瀏覽器都是同一個使用者，從操作開始到操作結束的這一段過程，也稱作為一個「Session」，有譯作「交談期」、「會話」，有稱作「具有狀態的一段時間」。
7. PHP 有一個函式叫「Session 函式」，可以幫你做到生成「Session ID」和儲存真正內容的功用。
附註：Session ID 不一定要存在 Cookie 裡才能完成整個流程，也有其他方式。
Session 在整個流程的各個地方都會重複一再被提到，概念功能又很相近，做得也是朝一個終極目標「確保送出請求的是同一個使用者」出發，所以剛接觸時會有種「這個 Session 是不是就是那個 Session？」，此玄非比玄，此玄亦此玄的一種霧煞煞的感覺。回頭看當初十一週我在簡答題將 Session 比喻成車票搭火車的系統，其實還是不夠精確，這次複習時重頭來看技術文章，有了不一樣的想法，特地記在這次的複習週。

### 第十二週
#### 資訊安全 - XSS, SQL injection
利用 Huli 在十五週提供的小遊戲來複習，這種可以一直闖關的遊戲真的很好玩，網路上也可以找得到攻略，實際玩幾次就大概能抓到那種「找漏洞，去拼湊程式碼」的感覺了篇，真喜歡這種寓教於樂的感覺，拜此所賜也自己找了些其他程式碼闖關遊戲來玩。
其實本來想仿造 Hash 那樣寫一篇介紹或攻略的，也預想了幾個比較形象化、生活化的例子，可是在 Medium 上看到一篇 Jayden Lin 的「一次看懂 SQL Injection 的攻擊原理」，發現他實在寫得太好了，圖示說明也很清楚，尤其舉了一個 PTT 網友故意截斷別人的留言，造成語意的改變的例子。內容如下：
===
→ swearwin    :因為是妹妹 所以沒辦法 現在我比較擔心他長這麼大還沒男
推mariandtmac :人味                                               
→ swearwin    :朋友 XD       
===
真的讓沒學過程式的人也能看懂攻擊的重點在哪裡，趣味、內容、說明、舉例都比不過人家，只好摸摸鼻子按下 follow 。


### 第十三週
#### Bootstrap
滿好理解的工具，幫助設計苦手設定好漂亮樣式。就好像自己一開始也會將某幾種常用的 CSS 設定存起來，遇到適合的元件就套上去，省得設定半天顏色、邊框什麼的。

#### jQuery 
這個也很好理解，就是寫好各種好用的函式給你更方便寫 JS。原理理解是理解了，但這裡有哪些函式能用、那些情境能用，還是需要自己花一點心思到網路上做功課，才能比較快上手 jQuery 的使用方法。為了縮短學習時間，直接在 Udemy 買 jQuery 的入門教學，系統化的認識哪些函式是操作 HTML, 那些是操作 CSS, 哪些是動畫效果, 哪些又是抓取父輩子輩等等並跟著練習，算是花錢節省時間。不然一般學習能力強的人，都可以透過免費的網路資源去整理這些函式。

#### 作業 - 留言板
這三週也都有改進留言版的作業，其實卡關比較久的部分在留言版，因為真的要去做一點小改動的時候，才發現不知道怎麼改，這邊寫起來就會有點挫折。
之前寫到不知道如何是好時，就會看手把手教學影片，自己能做的地方就自己寫，不會的地方就看手把手，片段片段的拼湊出留言版的功能，由於並不是完全透徹的理解手把手，後來就會產生一些比如說變數名稱不一樣，或是自己定義的函式名稱不一樣等等的狀況，或是看到教學內，出現自己之前根本沒看過的函式，還要去往前翻當初為什麼要寫這個，是什麼時候要用，是不是跟自己寫得某個功能重複等等，很花時間在倒轉、快轉影片上。後來橫了心打掉重練，完全照著影片抄，依著影片裡的思路去認識程式碼，才總算完成作業，但始終隱隱覺得少了一點自己的想法，懷疑是不是有完全吸收進去內容，這段不是很踏實的時期，就有點逃避又臭又長的程式碼，比較明顯的把進度延宕了。
後來看了一下其他同學的 Code, 覺得如何把 Code 編排的有系統，有次序又好看，是一門很重要的學問。

#### 作業 - AJAX
AJAX 著實困擾我一陣子，照著影片操作後，還是不知道自己在幹嘛。之後透過不斷調整 data 裡的數值，去觀察傳回前端 console 出來會是什麼樣子，才一步一步的了解整件事是在做什麼。那段時間覺得比較像一個工程師，一邊調整、一邊看會有什麼改變，放 123 會不會顯示 123，會不會顯示 123 ，如果放在別的地方可以嗎，這樣的感覺，不斷地觀察調整寫法。最後照著自己要的樣子，真的抓到數值並正確顯示時，真的是滿開心的，總覺得就是這樣偶爾會冒出來的小成就感，才讓我無法真的說出很討厭寫程式這句話。可是真的很花時間。

### 第十四週
#### 後端基礎 -- 各種架構名詞
久違的學習聽講課，多懂一些縮寫、學術名詞，複習定義就過去了。
#### 後端基礎 -- 部署
這週的重頭戲，在這之前一直以為部署有多可怕，實際做起來，才知道「也不過是這麼一回事」。很慚愧，靠著前人的筆記，然後花點時間查一下 ubuntu 的常用指令，整個部署上並沒有遇到真正的困難，算是很幸運。頂多就是發現 Cmder 有時在連線主機時會當機而已，這時就直接用微軟的 CMD 去操作。如果有問題，就砍掉作業系統，重裝 ubuntu，重裝 Apache, 重裝 PHP。這些多少還有一些大學時期的印象，不至於太陌生。
能自己買網域，用自己選的字做網址，感覺真的酷，連上的瞬間成就感爆棚。

### 最後
把每一次的複習週當作一個階段的話，11 到 15 週真的是拖延得比較嚴重的一週，中間當然各種原因，繼續跟放棄之間搖擺不定，也會自我懷疑。不過還是要面對自己落後的事實、不夠努力的事實、沒有勇氣求職的事實，然後接受「還想再嘗試下去」這件事。
我嘗試客觀歸納自己最後不敢出去求職的原因，可能因為缺乏相關資歷、拿不出什麼值得 Demo 的作品出來，同學分享的面試題，也七八成看不懂、沒有把握回答，所以判斷自己憑著粗淺的「HTML + PHP + JS」能力，只能值 30k ~ 35k 的薪水。如果是領這樣的薪水，實在無法在北部租屋生活。
所以還是想再跟一下課，多認識一些工具，另外做一些切版或一些前端的小作品，多擁有有一點技能和實績後再到南部找 35k - 39k 的工作。
我還想再跟一陣子課。