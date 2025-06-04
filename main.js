function palindromeTester() {
    let Phrase = require("furuya-palindrome");

    let string = prompt("パリンドロームをテストしたい文字列を入力して下さい：");
    let phrase = new Phrase(string);

    if (phrase.palindrome()) {
        alert(`"${phrase.content}"はパリンドロームです`)
    } else {
        alert(`"${phrase.content}"はパリンドロームではありません`)
    }
}

// htmlが読み込まれるまで待機する
document.addEventListener("DOMContentLoaded", () => {
    // 読み込まれてからidが一致するエレメントを探す
    let form = document.querySelector("#palindromeTester");
    form.addEventListener("submit", () => {
        palindromeTester();
    });
});