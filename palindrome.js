// 文字列を逆順にして返す
function reverse(string) {
    return Array.from(string).reverse().join("");
}

// パリンドロームならTureを、違うならFalseを返す
// function palindrome(string) {
//     let processedContent = string.toLowerCase();
//     if (processedContent === reverse(processedContent)) {
//         return `これは回文です`
//     } else {
//         return `これは回文ではありません`
//     }
// }

// Phraseオブジェクトを定義する
function Phrase(content) {
    this.content = content;

    this.palindrome = function palindrome() {
        let processedContent = this.content.toLowerCase();
        return processedContent === reverse(processedContent);
    }
}