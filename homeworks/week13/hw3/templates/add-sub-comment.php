<div class='add-sub-comment col-12'>
    <form class='form' role='form' method='POST' action='./add_comment.php'>
        <?php 
            if ($user) {
                echo "<div class='form-group'>";
                echo "<div><h5>回覆留言：</h5></div>";
                echo "<input type='hidden' value='" . $row['message_id'] . "' name='parent_id'/>";
                echo "<textarea class='form-control' name='content' rows='3'></textarea>";
                echo "</div>";
                echo "<button class='btn btn-primary submit-sub-comment' type='submit'>送出</button>";
                echo "<button class='btn btn-primary' type='reset'>清除</button>";
            } else {
                echo "<div class='form-group'>";
                echo "<textarea class='form-control' name='content' placeholder='登入後使用留言功能' rows='3' disabled='disabled'></textarea>";
                echo "</div>";
            }
        ?>
    </form>
</div>