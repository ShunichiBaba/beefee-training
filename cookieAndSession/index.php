<?php

$date = date('Y-m-d H:i:s');

//第一引数がname、第二がデータ、第三が有効期限。マストはnameとデータ。
//今回は有効期限を30日後に設定。
setcookie('TEST_TIME',$date,time()+60*60*24*30);

if(!empty($_COOKIE['TEST_TIME'])){
    echo $_COOKIE['TEST_TIME'];
} else {
    echo '初めてサイトにアクセスしました。（もしくはcookieを削除しました）';
}
?>