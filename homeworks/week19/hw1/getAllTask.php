<?php include_once('./conn.php');?>

<?php
    $sql = 'SELECT * FROM task ORDER BY task_id DESC ';
    $result = $conn->query($sql);
    $arr =array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            array_push($arr, $row);
        }
        echo json_encode($arr);
    } 
?>