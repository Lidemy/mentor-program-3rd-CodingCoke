<?php 
    require_once('conn.php');
?>
<?php
    $content = $_POST['content'];
    $stmt = $conn->prepare("INSERT INTO task(task_content) VALUES (?)");
    $stmt->bind_param('s', $content);
    if (!$stmt->execute()) {
        echo($conn->error);
    } else {
        $last_id = $conn->insert_id;
        $arr = array('result' => 'success', 'content' => $content, 'task_id' => $last_id);
        echo json_encode($arr);
    }
?>