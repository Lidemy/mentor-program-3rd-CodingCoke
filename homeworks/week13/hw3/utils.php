<?php include_once('./conn.php');?>
<?php
    function printMessge($msg, $redirect) {
        echo '<script>';
        echo "alert('" . htmlentities($msg, ENT_QUOTES) . "');";
        echo "window.location = '". $redirect ."'";
        echo '</script>';
    }

    function setToken($conn, $username) {
        $stmt_delete = $conn->prepare("DELETE FROM codingcoke_users_certificate WHERE user_name=?");
        $stmt_delete->bind_param('s', $username);
        $stmt_delete->execute();

        $token = uniqid();
        $stmt = $conn->prepare("INSERT INTO codingcoke_users_certificate(user_name, token) VALUES(?, ?)");
        $stmt->bind_param('ss', $username, $token);
        $stmt->execute();
        setcookie('token', $token, time()+3600*24);
    }

    function renderOperateBtns($message_id) {
        return "               
                <div class='operate-comment position col-1'>
                    <div class='edit-comment'>
                        <form method='GET' action='./edit_comment.php'>
                            <input type='hidden' value='$message_id' name='message_id'/>
                            <button type='submit' class='edit-button btn'><i class='far fa-edit'></i></button>
                        </form>
                    </div>
                    <i class='btn far fa-trash-alt delete-comment' data-id='$message_id'></i>
                </div>
                ";
    }
?>
