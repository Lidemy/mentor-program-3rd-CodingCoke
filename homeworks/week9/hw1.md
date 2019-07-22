資料庫名稱：message
|欄位名稱 |欄位型態| 說明    |
|-------|--------|--------|
| id   | INT| 留言 id (AI)(PK)|
| nickname  | VARCHAR(64)  | 暱稱|
| content| TEXT | 留言內容 |
| created_at| DATETIME| 留言時間(current_timestamp)|



資料庫名稱：users
|欄位名稱 |欄位型態| 說明    |
|-------|--------|--------|
| id   | INT| 使用者 id (AI)(PK)|
| username  | VARCHAR(64)   | 帳號|
| user_password| VARCHAR(16)| 密碼|
| nickname| VAR(64)| 暱稱|

