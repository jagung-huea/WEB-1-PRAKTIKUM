<?php
require "hitung.php";
?>
<!DOCTYPE html>
<html>

<head>
    <title>Tabel Perkalian Matriks</title>
    <style>
        th,
        td {
            width: 35px;
            height: 30px;
            border: 1px solid black;
        }
    </style>
</head>

<body>

    <table border="1" style="text-align: center;">
        <tr>
            <th>bilangan</th>
            <?php for ($j = 1; $j <= 10; $j++) { ?>
                <th><?php echo $j; ?></th>
            <?php } ?>
        </tr>
        <?php for ($i = 1; $i <= 10; $i++) { ?>
            <tr>
                <th><?php echo $i; ?></th>
                <?php for ($j = 1; $j <= 10; $j++) { ?>
                    <td><?php echo $hsl[$i][$j]; ?></td>
                <?php } ?>
            </tr>
        <?php } ?>
    </table>

</body>

</html>