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
            <h1>Message board</h1>
            <h4>「本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼」</h6>
        </div>
        <form  class="message_form" method="POST" action="./handle_post.php">
            <?php
            if(!isset($_COOKIE["token"])) {
                echo "<h4>請先登入或註冊，才可以使用留言功能</h4>";
            } else {
                $token = $_COOKIE['token'];
                $sql = "SELECT * from users_certificate where token =  '".$token."'";
                $result = $conn->query($sql);
                $row = $result->fetch_assoc();
                $user = $row['user_name'];
                $sql = "SELECT * from codingcoke_users where user_name =  '".$user."'";
                $result = $conn->query($sql);
                $row = $result->fetch_assoc();
                $nickname= $row['nickname'];
                echo "<h3>".$nickname."：</h3>";
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
                        echo "<div class='delete_message'>";
                            echo "<form  method='POST' action='./delete_message.php'>";
                                echo "<input type='hidden' name='id' value=" . $row['message_id'] . "/>";
                                echo "<input type='submit' value='delete'/>";
                            echo "</form>";
                        echo "</div>";
                        echo "<div class='message_time'><h5>" . $row['created_at'] . "</h5></div>";
                    echo "</div>";
                }
            }
        ?>
    </main>
</body>
</html>