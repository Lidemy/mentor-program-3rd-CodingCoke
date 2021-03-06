<?php 
    require_once('conn.php');
    session_start();
    require_once('./utils.php');
    include_once('./check_login.php');
?>

<?php
    $content = $_POST['content'];
    $parent_id = $_POST['parent_id'];
    $stmt = $conn->prepare("INSERT INTO codingcoke_message(nickname, content, parent_id) VALUES (?, ?, ?)");
    $stmt->bind_param('ssi', $user, $content, $parent_id);
    if (!$stmt->execute()) {
        printMessage($conn->error, './index.php');
    }
    if ($parent_id === '0') {
        $last_id = $conn->insert_id;
        $sql = "SELECT * FROM codingcoke_message WHERE message_id = ".$last_id."";
        $result = $conn->query($sql);
        $row = $result->fetch_assoc();
        $time = $row['created_at'];
        $arr = array('result' => 'success', 'id' => $last_id, 'user' => $user, 'time' => $time);
        echo json_encode($arr);
        
    } else { // 子留言 parent_id !== 0 的情況
        $sql = "SELECT * FROM codingcoke_message WHERE message_id = ".$parent_id."";
        $result = $conn->query($sql);
        $row = $result->fetch_assoc();
        $time = $row['created_at'];
        $arr = array('result' => 'success', 'id' => $parent_id, 'user' => $user, 'time' => $time);
        echo json_encode($arr);
    }
?>

