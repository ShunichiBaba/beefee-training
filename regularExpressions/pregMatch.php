
<?php
if(preg_match('/^(070|080|090|０７０|０８０|０９０)[-ー]\d{4}[-ー]\d{4}$/u',$_POST['telNum'])){
    echo '<h1>正しい電話番号でした</h1>';
} else {
    echo '正しい電話番号を入力してください<br>';
    echo '<a href="' . $_SERVER['HTTP_REFERER'] . '">前に戻る</a>';
}
?>