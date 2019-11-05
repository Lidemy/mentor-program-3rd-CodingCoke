<?php     
    if (!isset($_SESSION)) {
        session_start();
    }
?>
<?php include('./check_login.php'); ?>
<nav>
    <ul class="nav justify-content-end">
        <li class="nav-item">
            <b><a class="nav-link active" href="./index.php"><button type="button" class="btn btn-outline-secondary">回首頁</button></a></b>
        </li>
        <li class="nav-item">
            <?php 
            if ($user) {
                echo "<a class='nav-link' href='./logout.php'><button type='button' class='btn btn-outline-secondary'>登出</button></a>";
            } else {
                echo "<a class='nav-link' href='./login.php'><button type='button' class='btn btn-outline-secondary'>登入</button></a>";
            }
            ?>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="./register.php"><button type="button" class="btn btn-outline-secondary">註冊</button></a>
        </li>
    </ul>
</nav>
