(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"furuya-palindrome":2}],2:[function(require,module,exports){
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
},{}]},{},[1]);
