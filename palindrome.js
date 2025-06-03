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
class Phrase {
    constructor(content) {
        this.content = content;
    }

    processor(string) {
        return string.toLowerCase();
    }

    processedContent() {
        return this.processor(this.content);
    }

    palindrome() {
        return this.processedContent() === reverse(this.processedContent());
    }
}

// TranslatedPhraseオブジェクトを定義する
class TranslatedPhrase extends Phrase {
    constructor(content, translation) {
        this.content = content;
        this.translation = translation;
    }

    // パリンドロームのテスト用に変換したcontentを返す
    processedContent() {
        return this.processor(this.translation);
    }
}

let phrase = new Phrase("Racecar");
console.log(phrase.content);
console.log(phrase.processedContent());
console.log(phrase.palindrome());