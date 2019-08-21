<?php
function setToken($conn, $username) {
    $token = uniqid();
    $sql = "DELETE FROM users_certificate WHERE user_name='$username'";
    $conn->query($sql);
    $sql = "INSERT INTO users_certificate(user_name, token) VALUES('$username', '$token')";
    $result = $conn->query($sql);
    setcookie("token", $token, time()+3600*24);
}
?>