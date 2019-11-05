<?php require_once('./utils.php') ?>
<?php require_once('./check_login.php') ?>
<?php require_once('./conn.php');?>
<?php
if (isset($_POST['content'])) {
    if (!empty($_POST['content'])) {
        $content = $_POST['content'];
        $message_id = $_POST['message_id'];
        $stmt = $conn->prepare("UPDATE codingcoke_message SET content = ? WHERE message_id = ? AND nickname=?");
        $stmt->bind_param('sis', $content, $message_id, $user);
        if ($stmt->execute()) {
            printMessge('編輯成功', './index.php' );
        } else {
            printMessge('Error!', $_SERVER['HTTP_REFERER']);
        }
    } else {
        printMessge('請輸入內容', $_SERVER['HTTP_REFERER']);
    }
}
?>