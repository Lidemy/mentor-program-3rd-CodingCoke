<?php require_once('./conn.php');?>
<?php require_once('./utils.php');?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="styles/normalize.css">
    <link rel="stylesheet" href="styles/style.css">
    <meta charset="UTF8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Message board</title>
</head>
<body>
    <nav>
        <?php
            if(!isset($_COOKIE["token"])) {
                echo "<a href='./signin.php'>Sign in</a>";
                echo "<a href='./signup.php'>Sign up</a>";
            } else {
                echo "<a href='./handle_signout.php'>Sign out</a>";
                echo "<a href='./signup.php'>Sign up</a>";
            }
        ?>
    </nav>
    <main>
        <div class="title">
            <h1>Message board</h1>
            <h4>「本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼」</h6>
        </div>
        <form  class="message_form" method="POST" action="./handle_post.php">
            <input  type="hidden" value="1" name="parent_id"/>
            <?php
            if(!isset($_COOKIE["token"])) {
                echo "<h4>請先登入或註冊，才可以使用留言功能</h4>";
            } else {
                $token = $_COOKIE['token'];
                $sql = "SELECT * from codingcoke_users_certificate where token =  '".$token."'";
                $result = $conn->query($sql);
                $row = $result->fetch_assoc();
                $user = $row['user_name'];
                $sql = "SELECT * from codingcoke_users where user_name =  '".$user."'";
                $result = $conn->query($sql);
                $row = $result->fetch_assoc();
                $nickname= $row['nickname'];
                echo "<h3>".$nickname."：</h3>";
                echo "<input type='hidden' value='0' name='parent_id'/>";
                echo "<input class='message_input' placeholder='Your message......' type='text' name='content'/>";
                echo "<button type='submit'><b>Send</b></button>";
            }
            ?>
        </form>
        <?php
            // 要做分頁所要用到的幾個數字
            $count_sql = 'SELECT * from codingcoke_message ORDER BY created_at';
            $result = $conn->query($count_sql);
            $count = $result->num_rows; 
            $sizePerPage = 20;
            $totalPage = ceil($count / $sizePerPage);
            // 如果 page 沒有設定，就是 1
            if (!isset($_GET['page'])){
                $page=1;
            } else {
                $page = intval($_GET["page"]);
            }
            $start = ($page - 1) * $sizePerPage;
            echo "<div class='page'>";
            for ($i = 1; $i <= $totalPage; $i++) {
                echo "<a href='./index.php?page=$i'>$i</a>";
            }
            echo "</div>";
            
            // 用 LIMIT 與前面設定的數字，讓網頁依據分頁抓取資料庫資料
            $sql = "SELECT * 
                    from codingcoke_message 
                    WHERE parent_id = 0
                    ORDER BY created_at 
                    DESC LIMIT $start, $sizePerPage
                    ";
            $result = $conn->query($sql);
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    echo "<div class='message_info'>";
                        // 主留言資訊：暱稱、內容、時間
                        echo "<div class='nickname'><h2>" . $row['nickname'] . "</h2></div>";
                        echo "<div class='message'>";
                            echo "<p>" . htmlspecialchars($row['content'], ENT_QUOTES, 'utf-8') . "</p>";
                            echo "<div class='edit_message'>";
                                echo "<form  method='GET' action='./edit_message.php'>";
                                    echo "<input type='hidden' name='id' value=" . $row['message_id'] . "/>";
                                    echo "<input type='submit' value='edit'/>";
                                echo "</form>";
                            echo "</div>";
                            echo "<div class='delete_message'>";
                                echo "<form  method='POST' action='./delete_message.php'>";
                                    echo "<input type='hidden' name='id' value=" . $row['message_id'] . "/>";
                                    echo "<input type='submit' value='delete'/>";
                                echo "</form>";
                            echo "</div>";
                        echo "</div>";
                        echo "<div class='message_time'><h5>" . $row['created_at'] . "</h5></div>";
                        
                        // 子留言資訊：暱稱、內容、時間
                        $sql_sub = "SELECT * 
                                    FROM codingcoke_message 
                                    WHERE parent_id = ".$row['message_id']."
                                    ORDER BY created_at 
                                    DESC LIMIT $start, $sizePerPage
                                    ";
                        $result_sub = $conn->query($sql_sub);
                        if ($result_sub->num_rows > 0) {
                            while ($row_sub = $result_sub->fetch_assoc()) {
                                echo "<div class='sub-message_info'>";
                                    if ($row_sub['nickname'] === $row['nickname']) {
                                        echo "<div class='sub-message-by-author'>";
                                            echo "<div class ='sub-message_nickname'><h4>" .$row_sub['nickname']. "</h4></div>";
                                            echo "<div class ='sub-message_content'>" . htmlspecialchars($row_sub['content'], ENT_QUOTES, 'utf-8') ."</div>";
                                            echo "<div class ='sub-message_time'>" . $row_sub['created_at'] . "</div>";
                                        echo "</div>";
                                    } else {
                                        echo "<div class='sub-message'>";
                                            echo "<div class ='sub-message_nickname'><h4>" .$row_sub['nickname']. "</h4></div>";
                                            echo "<div class ='sub-message_content'>" . htmlspecialchars($row_sub['content'], ENT_QUOTES, 'utf-8') ."</div>";
                                            echo "<div class ='sub-message_time'>" . $row_sub['created_at'] . "</div>";
                                        echo "</div>";
                                    }
                                echo "</div>";
                            }
                        }
        ?>
                        <form  class="message_form" method="POST" action="./handle_post.php">
                            <?php
                                if(!isset($_COOKIE["token"])) {
                                    echo "請先登入或註冊，才可以使用留言功能";
                                } else {
                                    // 輸入留言(子留言)
                                    echo "新增留言：";
                                    echo "<input type='hidden' value='". $row['message_id'] . "' name='parent_id'/>";
                                    echo "<input class='message_input' placeholder='Your meassage......' type='text' name='content'/>";
                                    echo "<button type='submit'><b>Send</b></button>";
                                }
                            ?>
                        </form>
        <?php 
                echo "</div>";
                }
            }
        ?>
    </main>
</body>
</html>