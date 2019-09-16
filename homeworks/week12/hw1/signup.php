<?php require_once('./conn.php');?>

<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="styles/normalize.css">
    <link rel="stylesheet" href="styles/style.css">
    <meta charset="UTF8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Message board sign up</title>
</head>
<body>
    <nav>
        <a href="./signin.php">Sign in</a>
        <a href="./signup.php">Sign up</a>
</nav>
    <main>
        <div class="title">
            <h1>Sign up</h1>
            <h4>「本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼」</h6>
        </div>
        <form  class="signin_form" method="POST" action="./handle_signup.php">
            暱稱：<input class="nickname_input" type="text" name="nickname"/><br/>
            帳號：<input class="username_input" type="text" name="username"/><br/>
            密碼：<input class="password_input" type="password" name="password"/><br/>
            <button type="submit"><b>Send</b></button>
            <button type="reset"><b>Clear</b></button>
        </form>
    </main>
</body>
</html>