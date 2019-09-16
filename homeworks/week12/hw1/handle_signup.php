<?php 
    require_once('./conn.php');
    require_once('./utils.php'); 
    $nickname = $_POST['nickname'];
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    if (empty($nickname)||empty($username)||empty($password)) {
        echo "<a href='./signup.php'>回上頁</a>";
        echo "<br/>";
        die('請檢查資料');
    }
    $sql = "INSERT INTO codingcoke_users(nickname, user_name, user_password) VALUES ('$nickname', '$username', '$password')";
    $result = $conn->query($sql);
    if ($result) {
        setToken($conn, $username);
        echo "<script>alert('註冊成功'); location.href='./index.php'</script>";
    } else {
        echo $conn->error;
        echo "這個暱稱或帳號已經有人使用囉，請換一個";
        echo "<br/>";
        echo "<a href='./index.php'>回上頁</a>";
    }
?>
