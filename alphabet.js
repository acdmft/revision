function sortLetters(word) {
    return word.split('').sort().join('');
}
console.log(sortLetters("konexio"));
console.log(sortLetters('KoneXiO'));