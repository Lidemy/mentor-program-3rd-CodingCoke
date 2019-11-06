<?php include_once('./conn.php');?>
<?php include_once('./utils.php');?>
<?php
    $user = null;
    if (!empty($_SESSION['nickname'])) {
        $user = $_SESSION['nickname'];
    }
?>

<?php
/* 舊的方法
    session_start();
    $user = null;
    if (isset($_COOKIE['token']) && !empty($_COOKIE['token'])) { 
        $token = $_COOKIE['token'];
        $stmt = $conn->prepare("SELECT * FROM codingcoke_users_certificate WHERE token=?");
        $stmt->bind_param('s', $token);
        $stmt->execute();
        $result = $stmt->get_result();
        if (!$result || $result->num_rows <= 0) {
            $user = null;
        } else {
            $stmt = $conn->prepare("SELECT c.nickname 
                                     FROM codingcoke_users as c 
                                     LEFT JOIN codingcoke_users_certificate as u 
                                     ON c.user_name = u.user_name
                                     WHERE u.token = ?");
            $stmt->bind_param('s', $token);
            $stmt->execute();
            $result = $stmt->get_result();
            $row = $result->fetch_assoc();
            $user = $row['nickname'];
        }
    } 
    */
?>