## 請以自己的話解釋 API 是什麼
寫完第四週的作業之後，覺得 API 不是那麼遙不可及的東西，中文翻譯「應用程式介面」，也沒有表面上那麼抽象了。
API 整體來說是一種提供服務的介面，照著供應方的規範去使用 API，就能藉此取得資料，或是做出相對應的功能。
甚至有種 API 很像 APP 想法，當想要知道火車的時刻表，就去台鐵的網站，下載安裝火車時刻表的 APP 到手機上，或是找台鐵提供的 API (假設有)，透過台鐵 API 文件的指引，從自家的電腦取得台鐵時刻表的資料，從電腦「串接」了台鐵時刻表的 API，就好像「安裝」了 APP 在手機上。
其中的差異是，APP 的顯示是有固定形式的，通常無法客製化，而串接 API ，依資源豐富的程度，可以透過程式碼加以調整呈現的樣子，甚至我可以同時串接捷運、高鐵的 API，讓三家的時刻表統一顯示在網頁上，自由度更高。
總的來說， API 就是一種取用服務的介面、接口，供應方透過這個介面提供服務，而客戶端透過這個介面使用服務。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹
1. 410 Gone： 表示請求的資源不再可用。與 404 很像，但差別在於 404 可以允許用戶再提交請求，因為伺服器端可能只是暫時性，因不願透露的原因拒絕提供服務，410 偏向有意刪除資源，因某些已知原因 **永久性** 的不再提供該資源的意味，用戶不該再次請求資源。比較好懂的一類例子是過時網頁，以後這個頁面不會再提供資源，也不會另外轉址，用戶要做的，就是試試別的地方，這地方廢了。
2. 451 Unavailable For Legal Reasons：該請求因**法律**的問題不能提供資源。馬上就可以想到像中國這類會審查思想、言論的地方，應該會很常用到XD
3. 511 Network Authentication Required: 用戶需要進行身分驗證、有**權限**才能存取資源。在咖啡店、捷運站等提供免費 Wifi 的地方會遇到，得同意條款、或擁有帳密才能瀏覽網站。


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

### 我的餐廳 API
Base URL: https://MyGroup.com
1.回傳所有餐廳資料 
>Method:`GET`
>Path:`/kitchens`
>Parameters:`_limit:限制回傳資料數量`
>Example request:`/kitchens?_limit=2`
>Example response:
>>`["id": 1, "name":"cucinapasta", "staff": 20]`
>>`["id": 2, "name":"Ding Taifeng", "staff": 30]`

2.回傳單一餐廳資料
>Method:`GET`
>Path:`/kitchens/`
>Parameters:`id` or `name`. For a query to be valid, `id` or `name` must be specified.
>Example request:`/kitchens?id = 1`
>Example response:
>>`["id":1, "name":"cucinapasta", "staff": 20]`

3.刪除餐廳
>Method:`DELETE`
>Path:`/kitchens/`
>Parameters:`id` or `name`. For a query to be valid, `id` or `name` must be specified.
>Example request:`/kitchens?id = 1`
>Example response: none

4.新增餐廳
>Method:`POST`
>Path:`/kitchens/`
>Parameters:`name` and `staff`. For a query to be valid, `name` and `staff`must be specified.
>Example request:`/kitchens?name = Ruth's Chris&staff = 20`
>Example response:`["id":10, "name":"Ruth's Chris", "staff": 20]`

5.更改餐廳
>Method:`PATCH`
>Path:`/kitchens/`
>Parameters:`id`,`name` and `staff`. For a query to be valid, `id`must be specified.
>Example request:`/kitchens?id = 2&staff = 50`
>Example response:`["id": 2, "name":"Ding Taifeng", "staff": 50]`
