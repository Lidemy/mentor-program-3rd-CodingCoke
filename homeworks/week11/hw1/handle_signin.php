<?php 
require_once('conn.php');
require_once('utils.php');
$username = $_POST['username'];
$password = $_POST['password'];

if (empty($username)||empty($password)) {
    echo "<a href='./signin.php'>回上頁</a>";
    echo "<br/>";
    die('請檢查輸入');
}

$sql = "SELECT * from codingcoke_users where user_name =  '".$username."'";
$result = $conn->query($sql);
if ($result->num_rows <= 0) {
    echo '登入失敗, 帳號或密碼錯誤。';
    echo "<br/>";
    echo "<a href='./signin.php'>回上頁</a>";
    exit();
}
$row = $result->fetch_assoc();
$hash_password = $row['user_password'];
$nickname = $row['nickname'];

if (password_verify($password, $hash_password)) {
    setToken($conn, $username);
    echo '登入成功！';
    header("Location: ./index.php"); 
} else {
    echo '登入失敗, 帳號或密碼錯誤。';
    echo "<br/>";
    echo "<a href='./signin.php'>回上頁</a>";
}
?>