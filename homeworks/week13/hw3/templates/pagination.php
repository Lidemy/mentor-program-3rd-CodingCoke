<?php
    // 這個 sql 好像寫死了，沒有 sql injection 的空間？
    $count_sql = "SELECT count(*) AS count FROM codingcoke_message WHERE parent_id = 0";
    $count_result = $conn->query($count_sql);
    if ($count_result && $count_result->num_rows > 0) {
        $count = $count_result->fetch_assoc()['count'];
        $total_page = ceil($count/$size); 
        $previous = $page - 1;
        $next = $page + 1;
        ?>
        <div class='page'>
            <ul class='pagination'>
            <?php 
                if ($previous <= 1) {
                    $previous = 1;
                }
                if ($next >= $total_page) {
                    $next = $total_page;
                }
                echo "<li class='page-item'><a class='page-link' href='./index.php?page=". $previous . "'>Previous</a></li>";
                for ($i=1; $i<=$total_page; $i++) {
                    echo "<li class='page-item'><a class='page-link' href='./index.php?page=$i'>$i</a></li>";
                }
                echo "<li class='page-item'><a class='page-link' href='./index.php?page=" . $next . "'>Next</a></li>";
                ?>
            </ul>
        </div>
        <?php
    }
?>