<?php 
    require_once('conn.php');
?>
<?php
    $id = $_POST['id'];
    $stmt = $conn->prepare("DELETE FROM task WHERE task_id = ? ");
    $stmt->bind_param('i', $id);
    $stmt->execute();
?>