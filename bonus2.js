function myCompare(a,b) {
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    } 
    if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    }
    return 0;
}
function sortLetters2(str) {
    return str.split('').sort(myCompare).join('');
} 

console.log(sortLetters2("konexio"));
console.log(sortLetters2('KoneXiO'));