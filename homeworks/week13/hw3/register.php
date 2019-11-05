<?php require_once('./utils.php') ?>
<?php include_once('./conn.php');?>
<?php
$is_error = false;
if (
    isset($_POST['nickname']) &&
    isset($_POST['username']) && 
    isset($_POST['password'])
) {
    if (
        !empty($_POST['nickname']) &&
        !empty($_POST['username']) &&
        !empty($_POST['password'])
    )  {        
        $nickname = $_POST['nickname'];
        $username = $_POST['username'];
        $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
        $stmt = $conn->prepare("INSERT INTO codingcoke_users(nickname, user_name, user_password) VALUES (?, ?, ?)");
        $stmt->bind_param('sss', $nickname, $username, $password);
        if ($stmt->execute()) {
            // setToken($conn, $username);
            session_start();
            $_SESSION['nickname'] = $_POST['nickname'];
            printMessge('註冊成功', './index.php');
        } else {
            printMessge('帳號或暱稱已經被使用，請重新輸入', './register.php');;
        }
    } else {
        $is_error = true;
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>    
    <link rel="stylesheet" href="styles/normalize.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="styles/style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Register</title>
</head>
<body>
    <?php include_once('templates/navbar.php') ?>
    <div class='container'>
        <div class='reminder'><h5>本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼</h5></div>
        <form class='form' role='form' method='POST' action='./register.php'>
            <div class='form-group'>
                暱稱：<input class='form-control' type='text' name='nickname'/>
            </div>
            <div class='form-group'>
                帳號：<input class='form-control' type='text' name='username'/>
            </div>
            <div class='form-group'>
                密碼：<input class='form-control' type='password' name='password'/>
            </div>
            <button class='btn btn-primary' type='submit'>確認</button>
            <?PHP
                if ($is_error) {
                    echo "<h3>請檢查輸入</h3>";
                }
            ?>
        </form>
    </div>
</body>

</html>