## 什麼是 DNS？Google 有提供的公開的 DNS，對 Google 的好處以及對一般大眾的好處是什麼？
1. Domain Name Server 的縮寫, 維基百科裡的中文翻譯是網域名稱系統。
2. 網路連線上，每台電腦都有屬於自己的地址，是一段數字，如 111.111.111.111，這段數字稱為 IP 位址，電腦間透過 IP 位址彼此聯繫。
3. 因為數字很不好記，所以發明了 Doman Name (網域名稱)，讓每組數字可以各自對應到不同的名稱，如 http://www.google.com，方便人類記憶。
4. DNS 就像電話簿，紀錄、管理網路世界中，網域名稱與 IP 位址間的對照關係。
5. Google 公開提供的 DNS 服務，比一般的 DNS 更快速、安全，主要在查詢機制上與 DNS 轉換把關上與一般服務提供商不同。
6. 對 Google 來說，人們使用他們提供的服務來查詢網址，使他們擁有了大量瀏覽網站的相關數據，可能可以藉此分析瀏覽模式，供作決策或產品開發使用。
資料來源1：程式導師實驗計畫：Lesson 8-2 之資料庫
資料來源2：維基百科
資料來源3：Youtube-How is Google Public DNS data used? by Google Webmasters

## 什麼是資料庫的 lock？為什麼我們需要 lock？
1. 為了避免同時間處理許多 requests, 讓資料同時被多方請求修改，因而出現異常狀況(race condition)而設立了 lock。
2. lock 可以確保一個以上的 transaction 同時處理時，可以讓先執行的指令先進行，其餘 transaction 請求等待前面一個完成後，再接續執行指令修改資料。
3. lock 不只一種，有分所整張表的、或鎖一個欄位的或其他特殊限制的。
4. 因為必須等待前面的 transaction, 所以會對效能上造成負擔。
資料來源1：程式導師實驗計畫：Lesson 8-2 之資料庫
資料來源2：台灣MySQL技術研究站

## NoSQL 跟 SQL 的差別在哪裡？
1. NoSQL 不像 SQL 每筆資料有固定的 Schema 結構、固定的欄位數量，也不支援 Join 查詢語法使用。
2. NoSQL 採用 Key-Value 的方式來存資料，將一筆資料簡化成一個 Key 對應到 一個 Value，長得就像 Json 格式。
3. NoSQL 相比 SQL, 更適合存一些欄位不固定的資料，在擴充資料庫容量上也比 SQL 容易且成本更低。 
資料來源1：程式導師實驗計畫：Lesson 8-2 之資料庫
資料來源2：了解NoSQL不可不知的5項觀念 by 王宏仁 (https://www.ithome.com.tw/news/92506)

## 資料庫的 ACID 是什麼？
是指保證資料庫進行 transaction 時結果是正確無誤，所需具備的四種特性。
A：Atomicity (原子性)，指 transaction 的所有操作只有兩種結果，全部完成或全部不完成，沒有第三種。
C：Consistency（一致性），transaction 開始之前與結束以後，都維持資料庫的完整性，寫入前與寫入後的資料都符合預設的規則，比如金額不會小於零。
I：Isolation（隔離性），多個 transaction 不會互相影響，不會同時對一個資料或值做修改。
D：Durability（持久性），transaction 成功後，寫入的資料不會不見，對數據地修改是永久的。
資料來源1：程式導師實驗計畫：Lesson 8-2 之資料庫
資料來源2：維基百科