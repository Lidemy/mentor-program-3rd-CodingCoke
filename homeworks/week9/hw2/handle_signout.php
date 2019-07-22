<?php
    setcookie("nickname", "", time()+3600*24);
    header('Location: ./index.php');
?>