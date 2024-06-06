function myIsNaN(value) {
    return value !== value;
}

console.log(myIsNaN(NaN));          
console.log(myIsNaN(123));          
console.log(myIsNaN(true));         
console.log(myIsNaN(null));         
console.log(myIsNaN(" "));          
console.log(myIsNaN(0 / 0));        
console.log(myIsNaN({}));           
console.log(myIsNaN(undefined));    
console.log(myIsNaN("Hello"));      
console.log(myIsNaN("123")); 