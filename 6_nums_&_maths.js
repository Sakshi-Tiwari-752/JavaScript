// const score  = 400;
// console.log(score);  //400

// const balance = new Number(100)
// console.log(balance);  //[Number: 100]

// //[.toString]
// console.log(balance.toString().length);  //3

// //[.toFixed]
// console.log(balance.toFixed(1));   // 100.0


// //[.toPrecision], range(0-21)
// const otherNumber = 23.8922    
// console.log(otherNumber.toPrecision(3));   //23.9

// //[.toLocalString]
// const hundreds = 100000;
// console.log(hundreds.toLocaleString())  // US standard  output => 100,000
// console.log(hundreds.toLocaleString('en-IN'));  //now it change in the indian standard from US standard output => 1,00,000



//  ****************************************  Maths  *****************************************************


// console.log(Math);   // an object

// // [Math.abs()]  Absolute value (it convert the negative value in the positive value) output => 4
// console.log(Math.abs(-4));

// // [Math.round()] Round off  (34.9 = 35, 23.87 = 24...)
// console.log(Math.round(4.7));  //output => 5

// // [Math.ceil()] it give you upper value (Ye round off kr deta number me chahe decimal ke bad chhoti value ho fir ye increase kr deta hai)
// console.log(Math.ceil(4.2));  //output => 5

// // [Math.floor()] it give you lower value (ye number me round off  krta hai minimum value se. Decimal ke phle ki value ko vaise hi return krta hai)
// console.log(Math.floor(4.8));  //output => 4

// // [Math.min] for find the minimum value in tha array
// console.log(Math.min(3, 2, 3, 0, 4, 98, 142637));  //output => 0

// // [Math.max] for find the maximum number in the array
// console.log(Math.max(3, 2, 3, 0, 4, 98, 142637));  // output =>14267

// //[Math.random()] it gives the value in between (0 - 1)  and value are change in every run
// console.log(Math.random()); //output => 0.04322343234 , 0.0512345678.....

console.log((Math.random()*10) + 1);   //output =>9.08667...
console.log(Math.floor(Math.random()*10) + 1);  //output => 8

const min = 20;
const max =20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // output => 20