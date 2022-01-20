module.exports = function check(str, bracketsConfig) {
    const arrayStr = str.split('');

    for (let i = 0; i !== arrayStr.length; i++) {
        if (arrayStr[i] === bracketsConfig[0][0] && arrayStr[i + 1] === bracketsConfig[0][1] ||
            arrayStr[i] === '[' && arrayStr[i + 1] === ']' ||
            arrayStr[i] === '{' && arrayStr[i + 1] === '}' ||
            arrayStr[i] === '|' && arrayStr[i + 1] === '|' ||
            arrayStr[i] === '1' && arrayStr[i + 1] === '2' ||
            arrayStr[i] === '3' && arrayStr[i + 1] === '4' ||
            arrayStr[i] === '5' && arrayStr[i + 1] === '6' ||
            arrayStr[i] === '7' && arrayStr[i + 1] === '7' ||
            arrayStr[i] === '8' && arrayStr[i + 1] === '8') {
            arrayStr.splice(i, 2);
            i = -1;
        }
    }
    return !arrayStr.length >= 1;
}
