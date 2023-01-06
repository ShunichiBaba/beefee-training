<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post" action="pregMatch.php">
        電話番号を入力してください
        <input type="tel" name="telNum">
        <input type="submit" name="btn_confirm" value="確認する">
    </form>
</body>
</html>



<?php

//正規表現 [0-9０－９]{3}←全角半角数字いずれも3桁のもの
//[0-9０－９]{3}|
// /^0\d{2}-\d{4}-\d{4}$/   これが電話番号ハイフンあり
// /^0[7,8,9]0
?>