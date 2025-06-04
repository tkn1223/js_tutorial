# mhartl-palindrome
**Phraseオブジェクト（回文検出器付き）**

これは、Michael Hartl の『Learn Enough JavaScript to Be Dangerous』で作成された、サンプルのNPMモジュールです。
このモジュールは以下のように使用できます：

## インストール方法

```bash
$ npm install --global mhartl-palindrome   # モジュールをグローバルにインストール
$ vim test.js                              # テスト用ファイルを作成・編集
```

## 使い方

1. 任意のJavaScriptファイルを作成します
```JavaScript
let Phrase = require("mhartl-palindrome");

let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
```

2. ファイルをNode.jsで実行します
```bash
node test.js
```
出力
```bash
true
```

## 補足

- このモジュールは、句読点や大文字・小文字を無視して回文を検出します
- 例にある"Able was I, ere I saw Elba."は実際に回文です。

## 出典

本モジュールは、Learn Enough JavaScript to Be Dangerous の学習過程で作成されました。
