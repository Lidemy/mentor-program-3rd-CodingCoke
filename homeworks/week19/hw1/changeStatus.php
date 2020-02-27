<?php 
    require_once('conn.php');
?>
<?php
  $status = $_POST['status'];
  $id = $_POST['id'];
  if ($status === '0') {
      $isdone = 1;
  } else {
      $isdone = 0;
  }

  $stmt = $conn->prepare("UPDATE task SET task_isDone = ? WHERE task_id = ?");
  $stmt->bind_param('ii', $isdone, $id);
  if (!$stmt->execute()){
    echo($conn->error);
  } else {
    $arr = array('result'=>'success', 'status'=>$isdone);
      echo json_encode($arr);
  }
?>