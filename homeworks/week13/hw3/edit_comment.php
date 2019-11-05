<?php include_once('./check_login.php');?>
<?php include_once('./conn.php');?>

<!DOCTYPE html>
<html lang="en">
<head>    
    <link rel="stylesheet" href="styles/normalize.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="styles/style.css">
    <script src="https://kit.fontawesome.com/59199a79ff.js" crossorigin="anonymous"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Edit comment</title>
</head>
<body>
    <?php include_once('templates/navbar.php') ?>
    <div class="container">
        <?php
            if ($user) {
                echo '<h1>Hello, ' . $user . '</h1>';
            }
        ?>
        <div>
            <form class='form' role='form' method='POST' action='./handle_edit_comment.php'>
                <?php 
                    if ($user) {
                        echo "<div class='form-group'>";
                        echo "<input type='hidden' value='" . $_GET['message_id'] . "' name='message_id'/>";
                        echo "<div><h4>輸入留言內容：</h4></div>";
                        echo "<textarea class='form-control' name='content' rows='5'></textarea>";
                        echo "</div>";
                        echo "<button class='btn btn-primary' type='submit'>送出</button>";
                        echo "<button class='btn btn-primary' type='reset'>清除</button>";
                    } else {
                        echo "<div class='form-group'>";
                        echo "<textarea class='form-control' name='content' rows='5' disabled='disabled'></textarea>";
                        echo "</div>";
                        echo '<h1>請登入或註冊</h1>';
                    }
                ?>
            </form>
        </div>
    </div>
</body>
</html>