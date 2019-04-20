## 跟你朋友介紹 Git

如菜哥所知道的，
#### Git 是幫忙做版本控制的工具。
平常如果只有存一個笑話，想要改什麼內容的話，直接複製一個新的，在更改檔名就好了，跟我們同學時期交報告很像，過程就像下面：
`原創笑話原始版.txt`
改了一點內容之後，產生
`原創笑話第二版.txt`、`原創笑話最終版.txt`等等。
這就是一般人可以做到的版本控制。但是像菜哥這麼紅，通告接不完的笑話專家，基本的版本控制可能不敷使用，因為專業講笑話是會依場合及現場情況調整內容的，所以你可能會更進階，新建資料夾管理這些笑話。
這些資料夾可能有：
`原創笑話`、`男性朋友間的笑話`、`政治笑話`等等
資料夾裡面又各有`第一版`、`第二版`......如你所說，單一個笑話可能一直到第十版。
1. 你想保留住每一版，因為以後可能還要回過頭來看，那些版本可以再朝別的方向延伸演進。
2. 可能有同行有不錯的笑話，想分享給你，但他的笑話資料夾，剛好跟你名稱一樣。

你只好新增越來越多的檔案，而且還得替資料夾加上一堆不會重複的亂數號碼，比如說
`afsfa12266`、`pfsgkers56aew`以確保資料夾絕對不重複，
為了知道哪個是最新的資料夾，以及最新的版本，你還須要有專門的檔案，比如說 `oreder` `latest`紀錄這些亂碼的順序與最新版.....
終於你沒有時間賣菜與講笑話了，只能把時間花在每天整理版本上，這時候，你想起來了 Git。
想起來了那一天，你有聽沒有懂的話：
#### Git 就是幫忙你做上述這些拉哩拉雜，管理版本的工具。

#### 那我們該怎麼使用 Git 呢？
說到這裡，我們都知道為什麼要用 Git 了，也大概背後做的事情其實跟人做差不多。這裡先假設菜哥你已經了解基礎的 Command Line ，並且 Cmder 是安裝完全版，已經下載了 Git 套件，我們來開始操作 Git。
首先我們切換目錄到你的笑話資料夾底下。
`cd C:\Users\Desktop\Jokes`
#### 開始 Git

1. 輸入所有 git 的起手式`git init`
目錄裡就會多一個` git `資料夾，所有管理版本的事情都記錄在這個資料夾裡面，換句話說，如果你把 ` git `移除，就沒辦法管理版本囉！

2. 認識 git 狀態`git status`
這個指令就是察看現在資料夾的狀態，現在輸入的話，會看到
```
No commits yet
nothing to commit (create/copy files and use "git add" to track)
```
就是說還沒有任何檔案交給 git 控管。

#### GIT 請幫我管理他們吧
1. 開始交付要控管的檔案，`git add`
`git add OringinalJoke`，
將 Original joke 資料夾託付給 Git ，這時候用 `git status`查看狀態，會看到
```
Changes to be committed：
  (use "git reset HEAD <file>..." to unstage)

        new file: OringinalJoke
```
2. 完成 commit `git commit`
此時還沒完成版本控制，OringinalJoke 只是在等候區。輸入
`git commit OringinalJoke -m version1`
現在的狀態就是正式完成交付版本控制了，version1 的地方，可以任意更改成想要說明這個版本的內容。

3. 再用一次 `git status`，會看到 OringinalJoke 已經不會出現在 Changes to be committed 了。

4. 利用 `git log` 查看之前 commit 過的歷史紀錄。
這裡可以看到 commit 旁會有長長的一串中英文數字，像是 efdsas651之類，就是專屬這個版本的號碼，各個版本的號碼都不想同，也絕不重複，之後我們可以透過這串數字去做到切換各版本。

5. 重複 `add`,`commit`指令，將所有資料夾交付 Git 管理。或是用「 . 」代替全部的資料夾。若是有不想加入版控的檔案，新增一個 ignore 檔，透過 vim 編輯加入檔案名稱即可。

之後若是對資料夾新有增刪減了內容，就可以做一次 `add`+`commit` ，做一個新的版本出來。我們把 Jokes內這些 Git 所管理的檔案，統稱為 Repository。

#### Git 如何回到過去
還記得前面透過 `git log`看到的號碼嗎，那個代表版本的英數夾雜的號碼。
我們只要透過 `git check out`後方加上那一串號碼，就可以切換到當時的版本了喔！


#### 你看過我的 Git 嗎，如果沒有，現在讓你看看
GitHub 是匯集了世界各地 Git 使用者上傳 Repository 的網站，如果你想讓世界各地的人看看你的笑話庫，或是朝向多人編輯邁進，將自己的 Repository 上傳是一個好主意喔！
1. 我們先申請 GitHub 帳密並登入。
2. 點擊右上方，頭像左手邊的 「 + 」按鈕。
3. 選擇 New  repository，跟著引導，建立 repository name 和描述，完成按下綠色按鈕「Create repository」
4. 回到 CLI，在 Jokes 資料夾位址下，輸入
`git remote add origin https://github.com/CodingCoke/112.git`
`git push -u origin master`
接著就能在網站上看到自己的 repository了。
5. 若是之後在本機端有修改，只要輸入
`git push origin master`，就能同步變更到遠端上。
6. 反過來說，若是遠端 GitHub 上有修改，想同步變更到本機上，在本機輸入
`git pull origin master` 就可以了。

#### 你的 Git 就是我的 Git
如果在 GitHub 上看到其他人的 Repository 很棒，想抓下來，可以利用 `clone`指令。
1. 在對方 Repository 頁面的右上，有個綠色按鈕 「Clone or download」點下。
2. 複製對話框出現的網址。
3. 回到本機 CLI，輸入 `git clone`後方加上複製的網址。
4. 完成下載 Repository。接著就可以自己做更改增減東西啦！

上面就是一些基本的 Git 講解， 菜哥你先試試看吧，預祝你早日成為笑話冠軍！