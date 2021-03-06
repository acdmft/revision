function countEach(str) {
    if (typeof str !== 'string') {
        console.log('Function requires string as a parameter!');
        return;
    }
    let letters = str.split('');
    let xAmount = letters.filter((l) => l === "x").length;
    let oAmount = letters.filter((l) => l === "o").length;
    if (xAmount + oAmount < str.length) {
        return "The word should contain only 'x' and 'o'";
    }
    return xAmount === oAmount;
}
console.log(countEach("xxxoooox" ));
console.log(countEach("xxoddO"));
console.log(countEach("xoo"));

