<?php require_once('./conn.php');?>

<?php
    $token = $_COOKIE['token'];
    $sql = "SELECT * from codingcoke_users_certificate where token =  '".$token."'";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    $user = $row['user_name'];
    $sql = "SELECT * from codingcoke_users where user_name =  '".$user."'";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    $id = (int)$_POST['id'];
    $content = $_POST['content'];

    if (empty($content)) {
        echo "<a href='" . $_SERVER ["HTTP_REFERER"] . ">'>回上頁</a>";
        echo "<br/>";
        die('請輸入內容');
    }

    $sql = "UPDATE codingcoke_message SET content='$content' WHERE message_id='$id'";
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