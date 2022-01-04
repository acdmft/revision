function countEach(str) {
    if (typeof str !== 'string') {
        console.log('Function requires string as a parameter!');
        return;
    }
    let letters = str.split('');
    let xAmount = letters.filter((l) => {l === "x"}).length;
    let oAmount = letters.filter((l) => {l === "o"}).length;
    return xAmount === oAmount;
}
console.log(countEach("xxxoooox" ));
console.log(countEach(42));

