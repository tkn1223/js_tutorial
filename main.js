let Phrase = require("furuya-palindrome");

function palindromeTester(event) {
    // フォームのデフォルトの振る舞いを止める（画面のロードを止める）
    event.preventDefault();
    
    let phrase = new Phrase(event.target.phrase.value);
    let palindromeResult = document.querySelector("#palindromeResult");

    if (phrase.palindrome()) {
        palindromeResult.innerHTML = `"${phrase.content}"はパリンドロームです`;
    } else {
        palindromeResult.innerHTML = `"${phrase.content}"はパリンドロームではありません`;
    }
}

// htmlが読み込まれるまで待機する
document.addEventListener("DOMContentLoaded", () => {
    // 読み込まれてからidが一致するエレメントを探す
    let form = document.querySelector("#palindromeTester");
    form.addEventListener("submit", (event) => {
        palindromeTester(event);
    });
});