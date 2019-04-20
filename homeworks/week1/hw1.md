## 交作業流程
* 交作業環境設定
1. 進入 [MTR03]課程 > 交作業流程 > 設定 GitHub 專案與 Eslint 的課程，點擊 「https://classroom.github.com/a/V4hZopA2」。
2. 按下接受，等待設置頁面跑完，跑完進入與老師共用的 repositories。
3. 點擊綠色按鈕 「Clone or download」，複製網址。
4. 打開 CLI ，輸入`git clone +網址`，按下 Enter。
5. 打開瀏覽器，到 [Node.js 的官方網站](https://nodejs.org/en/) ，下載 Node.js。
6. 連點下載完的 Node.js，用「步步下一步」大法完成安裝。
7. 重新開啟 CLI，此時輸入 `npm install` 安裝交作業所需的套件(若沒有安裝 Node.js 則指令不會執行。)

* 寫作業
1. `git branch week` 建立一個寫作業的分支。
2. `git checkout week`切換到 week 分支，在這裡編輯文件檔寫作業，用 vim 或在 GUI 環境下編輯檔案。
3. 作業檔案若副檔名為「.md」表示支援 Markdown 語法，可至支援該語法的網站預覽、調整編輯，之後在貼回作業上確保格式沒有跑掉。[其中一個支援 Markdown 的編輯網站](https://markdown-editor.github.io/#)
4. 邊寫記得`git commit -am XXX`保存版本。若 `commit` 失敗，閱讀錯誤訊息並修改檔案，重新 `commit`。
5. 隨時使用`git status`查詢檔案狀態。

* 上傳作業
1. `git push origin week` 上傳分支到 GitHub。
2. 成功後，在 GitHub 會看到新的分支，點擊綠色的按鈕「Compare & pull request」。
3. 輸入標題，在內容部分輸入心得感想或疑問，或不打也可以，打完按下綠色按鈕 「Create pull request」。
4. 完成後，複製網址列的網址。
5. 點擊切換到 [第三期作交作業網址](https://github.com/Lidemy/homeworks-3rd)。
6. 點擊分頁標籤「Issues」，進入後點擊綠色按鈕 「New issue」。
7. 標題依照規範填寫，若是第一周的作業，就打[Week1]，內容貼上剛剛複製的網址，下面可以打心得。
8. 按下「Submit new issue」。
9. 接下來就是老師改作業時間，看是否有要修改的地方。
10.若是看到 Huli 將 issue close了，將遠端上的分支 merge 到 master，表示作業沒有問題。
11.來到 CLI 輸入 `git checkout master`。
11. `git pull origin master`，將遠端的 master 下載更新回到本機。
12.最後  `git branch -d week` 將分支刪除，完成這一周的作業流程。
