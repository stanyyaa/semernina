function pad (string, symbol, isBeginning, count) {
if (count > string.length)
    return (isBeginning) ? symbol.repeat(count - string.length).concat(string): string.concat(symbol.repeat(count - string.length));
else 
return string ;
}
console.log(pad ("qwerty" , "+", true, 10));
console.log (pad ("qwerty", "+", false , 10));
console.log (pad ("qwerty", "+", true, 2));