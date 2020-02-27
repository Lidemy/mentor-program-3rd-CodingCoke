<?php include_once('./conn.php');?>

<?php
  $id = $_GET['id'];
  $stmt = $conn->prepare("SELECT * FROM task WHERE task_id = ? ");
  $stmt->bind_param('i', $id);
  if ($stmt->execute()) {
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();
    echo json_encode($row);

  } 
?>


