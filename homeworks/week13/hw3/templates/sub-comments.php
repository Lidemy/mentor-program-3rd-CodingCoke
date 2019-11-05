<div class='sub-comments col-12 row'>
    <?php
        $parent_id = $row['message_id'];
        $stmt = $conn->prepare("SELECT *
                                FROM codingcoke_message as c
                                LEFT JOIN codingcoke_users as u ON c.nickname = u.nickname
                                WHERE c.parent_id = ?
                                ORDER BY c.message_id DESC");
        $stmt->bind_param('s', $parent_id);
        if ($stmt->execute()) {
            $result_sub = $stmt->get_result();
            while ($row_sub = $result_sub->fetch_assoc()) {
                if ($row['nickname'] === $row_sub['nickname']) { ?>
                    <div class='sub-comment by-author col-12 row'>
                <?php } else { ?>
                    <div class='sub-comment col-12 row'>
                <?php } ?>
                    <div class='sub-comment__author col-2'><h5><?= htmlspecialchars($row_sub['nickname'], ENT_QUOTES, 'utf-8')?></h5></div>
                    <?php
                        echo "<div class='sub-comment__content col-7'><p>". htmlspecialchars($row_sub['content'], ENT_QUOTES, 'utf-8') . "<p></div>";
                    ?>
                    <div class='sub-comment__time col-2'><?= $row_sub['created_at']?></div>
                    <?php 
                        if ($user === $row_sub['nickname']) {
                            echo renderOperateBtns($row_sub['message_id']);
                        }
                    ?>
                    </div>
            <?php } 
        }
    ?>
</div>