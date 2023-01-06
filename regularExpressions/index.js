//idが「submitButton」のHTML要素を取得している
const button = document.getElementById("submitButton");
//idが「resultTextChar」のHTML要素を取得している
const resultTextChar = document.getElementById("resultTextChar");
//idが「resultTextAlpInt」のHTML要素を取得している
const resultTextAlpInt = document.getElementById("resultTextAlpInt");
//idが「resultTextNum」のHTML要素を取得している
const resultTextNum = document.getElementById("resultTextNum");

//パスワードの判定用の正規表現をregexAllに代入している
//半角、数字、記号のみで構成されているかの判断用の正規表現をregexCharに代入している
const regexChar = /^[a-z\d\-_/*+.,!#$%&()~|]*$/i;
//英字数字がどちらも入っているかの判断用の正規表現をregexAlpIntに代入している
const regexAlpInt = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]*$/i;
//文字数は適切かどうかの判断用の正規表現をregexNumに代入している
const regexNum = /^.{8,15}$/;

//「確認する」ボタンをクリックした際に関数を呼び出している
button.addEventListener("click", function(e) {

    //preventDefaultでページが更新されないようにしている
    e.preventDefault();

    //入力した内容を取得して、textFormへ代入している
    const textForm = document.getElementById("pwText").value;

    //入力した内容をtestメソッドの引数として、その結果をresultCharとresultAlpIntとresultNumへ代入している
    const resultChar = regexChar.test(textForm);
    const resultAlpInt = regexAlpInt.test(textForm);
    const resultNum = regexNum.test(textForm);

    //以下2つはエラーメッセージ用のHTML要素を隠している
    resultTextChar.style.display = "none";
    resultTextAlpInt.style.display = "none";
    resultTextNum.style.display = "none";

    //このif文では半角アルファベット、数字、記号以外のものが入力されたらエラー文を表示します
    if(!resultChar){
        //エラー文を表示するためにスタイルを変更している
        resultTextChar.style.display = "block";
    }

    //このif文ではパスワードが英字数字をどちらも含んでいるかの判定をして、含めれていなかったらエラー文を表示します
    if(!resultAlpInt){
        //エラー文を表示するためにスタイルを変更している
        resultTextAlpInt.style.display = "block";
    }

    //このif文では文字数が適切かを判定し、エラー文を表示します
    if(!resultNum){
        //エラー文を表示するためにスタイルを変更している
        resultTextNum.style.display = "block";
    }
    
})