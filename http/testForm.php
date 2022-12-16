<?php

//&_POST['text1']はinputタグのnameで指定された値
if(!empty($_GET['text1'])){
    $text1 = $_GET['text1'];
}
if(!empty($_POST['text1'])){
    $text1 = $_POST['text1'];
}
//htmlspecialchars関数は、htmlタグを入力した場合でも文字としてそのまま認識するもの
function escape1($str) {
    return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>submit</title>
</head>
<body>
    <p>入力した文字は、<?php echo escape1($text1) ?></p>
</body>
</html>