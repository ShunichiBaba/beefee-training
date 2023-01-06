//idが「submitButton」のHTML要素を取得している
const button = document.getElementById("submitButton");
//idが「resultTextAlp」のHTML要素を取得している
const resultTextAlp = document.getElementById("resultTextAlp");
//idが「resultTextNum」のHTML要素を取得している
const resultTextNum = document.getElementById("resultTextNum");

//パスワードの判定用の正規表現をregexAllに代入している
//英字数字がどちらも入っているか、文字数は8~15か、指定の記号と文字と数字のみで構成されているか
const regexAll = /^(?=.*?[a-z])(?=.*?\d)[a-z\d\-_/*+.,!#$%&()~|]{8,15}$/i;
//英字数字がどちらも入っているかの判断用の正規表現をregexAlpに代入している
const regexAlp = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]*$/i;
//文字数は適切かどうかの判断用の正規表現をregexNumに代入している
const regexNum = /^.{8,15}$/;

//「確認する」ボタンをクリックした際に関数を呼び出している
button.addEventListener("click", function(e) {

    //preventDefaultでページが更新されないようにしている
    e.preventDefault();

    //入力した内容を取得して、textFormへ代入している
    const textForm = document.getElementById("pwText").value;
    //入力した内容をtestメソッドの引数として、その結果をresultAllへ代入している
    const resultAll = regexAll.test(textForm);

    //以下2つはエラーメッセージ用のHTML要素を隠している
    resultTextNum.style.display = "none";
    resultTextAlp.style.display = "none";

    //パスワードが正しいか正しくないかのif文で、正しくない場合にどのエラー文を出力するかのif文を実行します
    if(!resultAll){

        //入力した内容をtestメソッドの引数として、その結果をresultAlpとresultNumへ代入している
        const resultAlp = regexAlp.test(textForm);
        const resultNum = regexNum.test(textForm);

        //このif文ではパスワードが英字数字をどちらも含んでいるかの判定をして、含めれていなかったらエラー文を表示します
        if(!resultAlp){
            //エラー文はinnerHTMLを使ってHTML要素へ値を代入している
            resultTextAlp.innerHTML = "パスワードは英字と数字をどちらも含めてください";
            //エラー文を表示するためにスタイルを変更している
            resultTextAlp.style.display = "block";
        }

        //このif文では文字数が適切かを判定し、エラー文を表示します
        if(!resultNum){
            //エラー文はinnerHTMLを使ってHTML要素へ値を代入している
            resultTextNum.innerHTML = "パスワードは8～15文字で設定してください";
            //エラー文を表示するためにスタイルを変更している
            resultTextNum.style.display = "block";
        }
    }
    
})