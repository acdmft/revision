function makeItSpongeBob(str) {
    return str.toLowerCase()
    .split('')
    .reduce((p,c) => {
        if (p.slice(-1) === p.slice(-1).toUpperCase()) {
            return p + c.toLowerCase();
        } else { 
            return p + c.toUpperCase();
        }
    })
}
console.log(makeItSpongeBob("Javascript is easy"));

