var isValid = function (s) {
    //最初が閉じ括弧
    if (s[0] === ')' || s[0] === ']' || s[0] === '}')
        return false;
    //文字列が偶数でない
    if (s.length % 2 !== 0)
        return false;
    //括弧のスタック
    var stack = [];
    //対応する開き括弧・閉じ括弧
    var map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        //charが閉じ括弧だった場合
        if (map[char]) {
            //スタックに文字がない・直前に入れたものがcharに対する開き括弧出なかった場合
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        }
        else {
            stack.push(char);
        }
    }
    return stack.length === 0;
};
var s = '([]{)}';
console.log(isValid(s)); // true
s = '({)}';
console.log(isValid(s)); // false
