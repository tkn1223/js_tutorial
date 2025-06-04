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
    return (this.content.match(/[a-z]/gi) || []).join("");
  }

  // パリンドロームならtrueを、違うならfalseを返す、空っぽならfalseを返す
  this.palindrome = function palindrome() {
    if (this.processedContent()) {
      return this.processedContent() === this.processedContent().reverse();
    } else {
      return false;
    }
  }

  // 
  this.letters = function letters() {
    const lettersRegEx = /[a-z]/gi;
    return Array.from(this.content).filter(c => c.match(lettersRegEx)).join("");
  }
}