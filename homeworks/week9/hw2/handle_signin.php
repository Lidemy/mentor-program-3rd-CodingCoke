<?php require_once('conn.php');
$username = $_POST['username'];
$password = $_POST['password'];

if (empty($username)||empty($password)) {
    echo "<a href='./signin.php'>回上頁</a>";
    echo "<br/>";
    die('請檢查輸入');
}

$sql = "SELECT * from codingcoke_users where user_name = '".$username."' and user_password = '".$password."'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    echo '登入成功！';
 
    while ($row = $result->fetch_assoc()) {
        $nickname = $row['nickname'];
        setcookie("nickname", "$nickname", time()+3600*24);
    }
    header("Location: ./index.php"); 
} else {
    echo '登入失敗。';
    echo "<br/>";
    echo "<a href='./signin.php'>回上頁</a>";

}
?>