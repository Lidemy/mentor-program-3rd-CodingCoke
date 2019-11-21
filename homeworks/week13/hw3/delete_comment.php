<?php
    session_start();
    require_once('./utils.php');
    require_once('./check_login.php'); 
    require_once('./conn.php');
?>
?>

<?php

if (isset($_POST['message_id'])) {
    if (!empty($_POST['message_id'])) {        
        $message_id = $_POST['message_id'];
        $stmt = $conn->prepare("DELETE FROM codingcoke_message WHERE (message_id = ? OR parent_id = ?) AND nickname = ?");
        $stmt->bind_param('iis', $message_id, $message_id, $user);
        if ($stmt->execute()) {
            echo 'success';
        } else {
            echo 'fail';
        }
    } else {
        echo 'fail';
    }
}
?>