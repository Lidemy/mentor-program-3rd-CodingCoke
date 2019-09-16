<?php require_once('./conn.php');?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="styles/normalize.css">
    <link rel="stylesheet" href="styles/style.css">
    <meta charset="UTF8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Edit message</title>
</head>
<body>
    <nav>
        <?php
            if(!isset($_COOKIE["token"])) {
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
            <h1>Edit Message</h1>
            <h4>「本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼」</h6>
        </div>
        <form  class="message_form" method="POST" action="./handle_edit.php">
            <?php
            if(!isset($_COOKIE["token"])) {
                echo "<h4>請先登入或註冊，才可以使用更改留言功能</h4>";
                echo "<a href='./index.php'>回上頁</a>";
                echo "<br/>";
            } else {
                echo "<input type='hidden' value='" . (int)$_GET['id'] ."' name='id'/>";
                echo "<input class='message_input' type='text' name='content'/>";
                echo "<button type='submit'><b>Send</b></button>";
            }
        ?>
        </form>
    </main>
</body>
</html>