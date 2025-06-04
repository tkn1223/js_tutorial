let Phrase = require("furuya-palindrome");

let string = prompt("パリンドロームをテストしたい文字列を入力して下さい：");
let phrase = new Phrase(string);

if (phrase.palindrome()) {
    alert(`"${phrase.content}"はパリンドロームです`)
} else {
    alert(`"${phrase.content}"はパリンドロームではありません`)
}