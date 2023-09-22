
// **************************COMPARISON *********************************


// console.log(2>1);
// console.log(2<=1);
// console.log(2<1);
// console.log(2 == 1);
// console.log(2 != 1);

 
//Before COMPARISON you should check that both are the same datatype or not 
// typescript does't allow you to compair two differnt datatype 

// console.log("2" > 1);
// console.log("02" > 1);


// console.log (null > 0);
// console.log (null == 0);
// console.log(null >= 0);  

// The reason is that an eqality check == and comparisons >, <, >=, <= work differntly.
// Comparisons convert null to a number, treating it as 0.
// That's why(3)  null >= 0 is true and (1) null > 0 is false.


//  (===)

console.log("2" == 2); //output => true  Beacuse in this case "conversion" works
console.log("2" === 2);  //output => false  Because in this case  it doesn't convert because both datatypes are not same.