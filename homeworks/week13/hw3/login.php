
<?php 
    session_start();
    require_once('conn.php');
    require_once('./utils.php'); 
?>

<?php

if (
    isset($_POST['username']) && 
    isset($_POST['password'])
) {
    if (
        !empty($_POST['username']) &&
        !empty($_POST['password'])
    )  {        
        $username = $_POST['username'];
        $password = $_POST['password'];

        $stmt = $conn->prepare("SELECT * FROM codingcoke_users WHERE user_name = ?");
        $stmt->bind_param('s', $username);
        $stmt->execute();
        $result = $stmt->get_result();

        if (!$result) {
            printMessge($conn->error, './login.php');
            exit();
        }
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $hash_password = $row['user_password'];
                if (password_verify($password, $hash_password)) {
                    // setToken($conn, $username);
                    $_SESSION['nickname'] = $row['nickname'];
                    printMessge('登入成功, 歡迎回來：'.$_SESSION['nickname'].'','./index.php');
                    
                }
                printMessge('帳號或密碼錯誤', './login.php');
            }
        } else {
            printMessge('帳號或密碼錯誤', './login.php');
        }
    } else {
        printMessge('請檢查輸入', './login.php');
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
    <title>Login</title>
</head>
<body>
    <?php include_once('templates/navbar.php') ?>
    <div class='container'>
        <div class='reminder'><h5>本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼</h5></div>
        <form class='form' role='form' method='POST' action='./login.php'>
            <div class='form-group'>
                帳號：<input class='form-control' type='text' name='username'/>
            </div>
            <div class='form-group'>
                密碼：<input class='form-control' type='password' name='password'/>
            </div>
            <button class='btn btn-primary' type='submit'>確認</button>
        </form>

    </div>
</body>

</html>