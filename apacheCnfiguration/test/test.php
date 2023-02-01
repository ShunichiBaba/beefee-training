<?php

$text = getenv("TEST_ENV",false);
///$_SERVER['TEST_ENV']でもできる
//
//
if($text == "LOCAL"){
    echo "ローカル環境です";
} else if($text == "PRODUCTION"){
    echo "本番環境です";
}
?>