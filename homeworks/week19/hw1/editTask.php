<?php include_once('./conn.php');?>

<?php
    $id = $_POST['id'];
    $content = $_POST['content'];
    $stmt = $conn->prepare("UPDATE task SET task_content = ? WHERE task_id = ?");
    $stmt->bind_param('si', $content, $id);
    if ($stmt->execute()) {
        echo json_encode(['status' => 'success']);
    } else {
        echo json_encode(['status' => 'fail']);;
    }

?>