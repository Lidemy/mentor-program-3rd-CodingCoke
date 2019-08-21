<?php require_once('./conn.php');?>

<?php
    $token = $_COOKIE['token'];
    $sql = "SELECT * from users_certificate where token =  '".$token."'";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    $user = $row['user_name'];
    $sql = "SELECT * from codingcoke_users where user_name =  '".$user."'";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    $nickname= $row['nickname'];
    $content = $_POST['content'];

    if (empty($content)) {
        echo "<a href='./index.php'>回上頁</a>";
        echo "<br/>";
        die('請檢查資料');
    }

    $sql = "INSERT INTO codingcoke_message(nickname, content) VALUES('$nickname', '$content')";
    $result = $conn->query($sql);
    if ($result) {
        header("Location: ./index.php");
    } else {
        echo "好像哪裡出錯了，請再試一次";
        echo $conn->error;
        echo "<br/>";
        echo "<a href='./index.php'>回上頁</a>";
    }
?>