## gulp 跟 webpack 有什麼不一樣？我們可以不用它們嗎？
gulp 與 webpack 都是幫助我們完成前端任務的工具，節省許多時間。
它們有許多功能是相似的，但實作上，gulp 類似於一條工廠的生產線，一路透過各種 plugin 完成工作，依照順序跑完一長串的任務流程。
webpack 則類似於將各種類型的資源，打包、最佳化成一件一件的模組，方便使用者們取用開發前端產品。
兩項可以一起使用加速開發過程，將 webpack 視為 gulp 任務流程的一項任務。
也可以不使用它們，只是親力親為可能會比較累和耗時。

## hw3 把 todo list 這樣改寫，可能會有什麼問題？
每新增一個任務就重新 render 全部頁面，若任務數量龐大的話，可能會有延遲，浪費效能的問題。

## CSS Sprites 與 Data URI 的優缺點是什麼？
CSS Sprites 優點：
    1. 節省 HTTP 請求次數，加快載入時間。
    2. 網頁設計師不用再替每一個小 icon 或零碎的圖片命名，只需要替合成後的大圖命名，節省腦力，提升效率。
CSS Sprites 缺點：
    1. 不能隨心所欲的針對每一個小 icon 調整細節或大小，維護上比較麻煩。
    2. 開發時要針對每一個小圖示設定精確的位置，需要倚靠工具、細心及耐心。
Data URI 優點：不用透過外部檔案載入資源，節省 HTTP 請求次數，加快載入時間。
Data URI 缺點：
    1. 處理過後的檔案會比原始的檔案大約 33%。
    2. 對於資訊安全檢驗來說，Data URL 會增加檢驗難度。
    3. 若檔案有變化，每一個有內嵌檔案的網頁都要重新編碼。
    4. 部分瀏覽器可能對 DataURI 有使用限制。
    5. 檔案都在網頁中，無法使用快取。
    6. 對於開發者來說，在文件編輯器裡面放入編碼後的檔案，會使得 HTML 變大，搜尋關鍵字時較為耗時。
參考資料：
[css sprite原理優缺點及使用 from CSDN 博客](https://read01.com/zh-tw/aA83e.html#.XiAod8gzY2w)
[css sprite form wibibi 網頁設計教學百科](https://www.wibibi.com/info.php?tid=373)
[Data URI scheme詳解和使用例項及圖片base64編碼實現方法](https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/384080/)
[Data URI 前端優化](https://medium.com/cubemail88/data-uri-%E5%89%8D%E7%AB%AF%E5%84%AA%E5%8C%96-d83f833e376d)
[使用 DATA URI 將圖片以 Base64 編碼並內崁至網頁中，加速載入速度](https://blog.gtwang.org/web-development/minimizing-http-request-using-data-uri/)
