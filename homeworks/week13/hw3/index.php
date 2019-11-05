<?php     
    if (!isset($_SESSION)) {
        session_start();
    }
?>
<?php include_once('./check_login.php');?>
<?php include_once('./conn.php');?>

<!DOCTYPE html>
<html lang="en">
<head>    
    <link rel="stylesheet" href="styles/normalize.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="styles/style.css">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="main.js"></script>

    <script src="https://kit.fontawesome.com/59199a79ff.js" crossorigin="anonymous"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Home</title>
</head>
<body>
    <?php include_once('templates/navbar.php') ?>
    <div class="container">
        <?php
            if ($user) {
                echo '<h1>Hello, ' . htmlspecialchars($user, ENT_QUOTES, 'utf-8') . '</h1>';
            }
        ?>
        <div>
            <form class='form submit-messgae-form' role='form' method='POST' action='./add_comment.php'>
                <?php 
                    if ($user) {
                        echo "<div class='form-group'>";
                        echo "<input type='hidden' value='0' name='parent_id'/>";
                        echo "<div><h4>輸入留言內容：</h4></div>";
                        echo "<textarea class='form-control' name='content' rows='5'></textarea>";
                        echo "</div>";
                        echo "<button class='btn btn-primary submit-comment' type='submit'>送出</button>";
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
        <?php
            if (isset($_GET['page'])) {
                $page = $_GET['page'];
            } else {
                $page = 1;
            }
            $size = 20;
            $start = $size * ($page-1);
            $stmt = $conn->prepare("SELECT *
                                    FROM codingcoke_message as c
                                    LEFT JOIN codingcoke_users as u ON c.nickname = u.nickname
                                    WHERE c.parent_id = 0
                                    ORDER BY c.message_id DESC
                                    LIMIT ?, ?");
            $stmt->bind_param('ii', $start, $size);
        ?>
        <?php include_once('templates/pagination.php') ?>
        <div class='comments row'>
            <?php
                if ($stmt->execute()) {
                    $result = $stmt->get_result();
                    while ($row = $result->fetch_assoc()) { ?>
                        <div class='comment col-12 row'>
                            <?php
                                echo "<div class='comment__author col-2'><h4>" . htmlspecialchars($row['nickname'], ENT_QUOTES, 'utf-8') . "</h4></div>";
                                echo "<div class='comme nt__content col-7'><p>". htmlspecialchars($row['content'], ENT_QUOTES, 'utf-8') . "<p></div>";
                                
                                echo "<div class='comment__time col-2'>" . $row['created_at'] ."</div>";        
                            ?>
                            <?php 
                                if ($user === $row['nickname']) {
                                    echo renderOperateBtns($row['message_id']);
                                }
                            ?>                      
                            <?php include('templates/sub-comments.php') ?>
                            <?php include('templates/add-sub-comment.php') ?>
                        </div>
                    <?php }
                }
                
            ?>
        </div>
    </div>
</body>
</html>