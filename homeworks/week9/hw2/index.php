<!-- 
留言板目標：
HW2
1. 身為使用者，在新增留言時應該可以輸入暱稱跟留言內容(checked)
2. 身為系統，應該顯示出留言者的暱稱跟留言內容以及留言時間(checked)
3. 身為系統，顯示留言時應該按照時間排序，最後留的顯示在最上面(checked)
4. 身為系統，應該只顯示最新的前五十筆留言(checked)
5. 有一個留言的區塊可以新增留言(checked)
6. 能夠顯示留言(checked)
-->

<?php require_once('./conn.php');?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="styles/normalize.css">
    <link rel="stylesheet" href="styles/style.css">
    <meta charset="UTF8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Message board</title>
</head>
<body>
    <nav>
        <?php
            if(!isset($_COOKIE["nickname"])) {
                echo "<a href='./signin.php'>Sign in</a>";
                echo "<a href='./signup.php'>Sign up</a>";
            } else {
                echo "<a href='./handle_signout.php'>Sign out</a>";
                echo "<a href='./signup.php'>Sign up</a>";
            }
        ?>
    </nav>
    <main>
        <div class="title">
            <h1>Message board</h1>
            <h4>「本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼」</h6>
        </div>
        <form  class="message_form" method="POST" action="./handle_post.php">
            <?php
            if(!isset($_COOKIE["nickname"])) {
                echo "<h4>請先登入或註冊，才可以使用留言功能</h4>";
            } else {
                echo "<h3>".$_COOKIE['nickname']."：</h3>";
                echo "<input class='message_input' placeholder='Leave message......' type='text' name='content'/>";
                echo "<button type='submit'><b>Send</b></button>";
            }
        ?>
        </form>
        <?php
            // LIMIT 0, 50 => 從第 1 筆資料開始，顯示 50 筆資料
            $sql = 'SELECT * from codingcoke_message ORDER BY created_at DESC LIMIT 0, 50';
            $result = $conn->query($sql);
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    echo "<div class='message_info'>";
                    echo "<div class='nickname'><h4>" . $row['nickname'] . "</h4></div>";
                    echo "<div class='message'>";
                    echo "<p>" . $row['content']. "</p>";
                    echo "</div>";
                    echo "<div class='message_time'><h5>" . $row['created_at'] . "</h5></div>";
                    echo "</div>";
                }
            }
        ?>
    </main>
</body>
</html>