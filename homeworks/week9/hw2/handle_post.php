<?php require_once('./conn.php');?>

<?php
    $nickname = $_COOKIE['nickname'];
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
        echo "<br/>";
        echo "<a href='./index.php'>回上頁</a>";
    }
?>