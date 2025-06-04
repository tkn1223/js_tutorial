module.exports = Phrase;

// reverse()メソッドを追加してすべてのStringで使えるようにする
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Phraseオブジェクトを定義する
function Phrase(content) {
  this.content = content;

  // パリンドロームのテスト用に変換した訳文を返す
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // コンテンツの文字だけを返す
  this.letters = function letters() {
    // let theLetters = [];
    // const letterRegex = /[a-z]/i;
    // Array.from(this.content).forEach(function(character) {
    //     if (character.match(letterRegex)) {
    //         theLetters.push(character);
    //     }
    // });
    // return theLetters.join("");
    return (this.content.match(/[a-z]/gi) || []).join("");
  }

  // パリンドロームならtrueを、違うならfalseを返す
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}