// *********************************** string *************************************

// you can use  " " ans ' ' to write the strings

//  console.log( "hello")
//   console.log ('hello')

//   //Concatenate or add two strings

//    let ans = "hello" + " world"
//    console.log(ans);

//  concatenation
//  const name = "sakshi"
//  const age = 22;

//  console.log("I am " + name + " and my age is " + age); // this is old method to add strings
 
//  // called string interpolation --- it is modern way 
//  console.log(`Hello my name is ${name} and my age is ${age}`);  //this is newest way using back tiks(``)in this way we can directly add the variable by using "${ }"  


// const gameName = "Ludo";

// //find length
// console.log(gameName.length);

// // change in upper and lower case
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());

// //How to index value (index  start from 0)

// console.log(gameName.charAt(2));  //d
// console.log(gameName.indexOf('o'));  //3

// //substring 

// const newString = gameName.substring(0, 2)  //Lu
// console.log(newString);

// //(.slice) in the  slice you can add negative value for the reverse access

// const anotherString = gameName.slice(-2, 4)
// console.log(anotherString);  //do
 

//[.trim()] it removes the unwanted space

// const newStringOne = "   sakshi    ";
// console.log(newStringOne.trim());   //sakshi ( it removes the extra unwanted space)


// //Replace

// const url = "https://github.com/Sakshi-Tiwari-752";
// console.log(url.replace('752', 'profile'));  //replace the 752 with profile  (output => https://github.com/Sakshi-Tiwari-profile)

// console.log(url.includes ('ki')); // it used for searching any word or any sentence if it found return true and if not found it return false // output => false because "ki" is not present in the url 


//[.split()] convert string in the array 

const  newName ="SAKSHI-tiwari-22_hello";
console.log(newName.split('-'));  // output => [ 'SAKSHI', 'tiwari', '22_hello' ] it remove the (-) and convert the all remaing part in the array 

