<?php require_once('./conn.php');?>
<?php require_once('./utils.php');?>

<?php

    if (
        isset($_POST['id'])&&
        !empty($_POST['id'])
    ) {
        if(!isset($_COOKIE["token"])) {
            echo "<a href='" . $_SERVER ["HTTP_REFERER"] . "'>回上頁</a>";
            echo "<br/>";
            die('請先登入或註冊，才可以使用刪除留言功能');
        } else{
            $id = (int)$_POST['id'];
            $sql = "DELETE FROM codingcoke_message where message_id='$id'";
            if($conn->query($sql)) {
                header('Location: ./index.php');
            } else {
                echo "好像哪裡出錯了，請再試一次";
                echo $conn->error;
                echo "<br/>";
                echo "<a href='./index.php'>回上頁</a>";
            }
        }
    } else {
        echo "<a href='./index.php'>回上頁</a>";
    }
?>