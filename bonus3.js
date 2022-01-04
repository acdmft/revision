function countEach2(str) {
    if (typeof str !== 'string') {
        console.log('Function requires string as a parameter!');
        return;
    }
    let letters = str.split('');
    let xAmount = letters.filter((l) => l.toLowerCase() === "x").length;
    let oAmount = letters.filter((l) => l.toLowerCase() === "o").length;
    if (xAmount + oAmount < str.length) {
        return "The word should contain only 'x' and 'o'";
    }
    return xAmount === oAmount;
}
console.log(countEach2("xxooOx"));