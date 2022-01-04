function checkPal(str) {
    let reversedStr = str.split('').reverse().join('');
    return reversedStr === str;
}
console.log(checkPal("racecar"));
console.log(checkPal("laptop"));