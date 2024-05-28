function pow(x,y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    return result;
}
console.log(pow(2,3));
console.log(pow(3,5));
console.log(pow(4,3));