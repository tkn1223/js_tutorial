let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// URLに適した文字列を返す
// function urlify(string) {
//     return string.toLowerCase().split(/\s+/).join(`-`);
// }

// URL生成：命令型バージョン
// function imperativerUrls(element) {
//     let urls = [];
//     element.forEach(function(element) {
//         urls.push(element.toLowerCase().split(/\s+/)).join("-");
//     });
//     return urls;
// }

// URL生成：関数型バージョン
// function functionalUrls(elements) {
//     return elements.map(element => urlify(element));
// }

// URL生成
// function createUrls(states) {
//     return states.map(state => `https://example.com/${state.toLowerCase().split(/\s+/).join("-")}`);
// }

// ２単語の文字列抽出：命令型バージョン
// function imperativeSingles(elements) {
//     return elements.filter(element => element.split(/\s+/).length === 2);
// }

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// SUM：命令型バージョン
// function imperativeSum(elements) {
//     let lengths = {};
//     elements.forEach(function(element) {
//         lengths[element] = element.length;
//     });
//     return lengths;
// }

// SUM：関数型バージョン
function functionalSum(elements) {
    return elements.reduce((acc, n) => { return acc * n; });
}

console.log(functionalSum(numbers));