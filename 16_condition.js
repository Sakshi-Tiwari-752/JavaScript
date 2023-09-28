 // CONDITIONS 

 //1.  if 
 //2. else 
 //3. switch


 // if condition
 
  
//  if (voter >= 18){
//     console.log("Can vote");
//  }
//  else
//  {
//     console.log("Can't vote");
//  }
 

 // nested if


//  let balance = 900;
//  if(balance < 500){
//     console.log("less than 750");
//  }
//  else if(balance < 900){
//     console.log("less than 750")
//  }
//  else{
//     console.log("less than 1200");
//  }


// real life example

// const userLoggedIn = true;
// const debitCard = true;
// const loggedInFromEmail = true;
// const loggedInFromGoogle = false;

// if(userLoggedIn && debitCard && 2==2){
//     console.log("Allow to buy course");
// }
//  else if(loggedInFromGoogle || loggedInFromEmail) {
//     console.log("user logged in");
// }



//  switch case (syntax)

//          switch (key){
//              case value: ---
//              break;         
//              default: ---
//              break;
//          }



// let month = 13;

// switch (month) {
//     case 1:
//     console.log("January");
//     break;                           // break =>  break ke aage ka koi bhi code run nhi hoga
//     case 2:
//     console.log("february");
//     break;
//     case 3:
//     console.log("march");
//     break;
//     case 4:
//     console.log("april");
//     break;
//     case 5:
//     console.log("may");
//     break;
//     case 6:
//     console.log("june");
//     break;
//     case 7:
//     console.log("July");
//     break;
//     case 8:
//     console.log("august");
//     break;
//     case 9:
//     console.log("september");
//     break;
//     case 10:
//     console.log("october");
//     break;
//     case 11:
//     console.log("november");
//     break;
//     case 12:
//     console.log("december");
//     break;
    
//     default:                                 // if input value are not match with cases then this statement is run 
//         console.log("deafult case")

// }


// const userEmail = "s@gmail.com" ;

// if(userEmail){
//     console.log("Got user email");        // output => got user email
// } else {
//     console.log("Don't have user email");
// }


//Falsy values

// false, 0 , -0, (bigInt)-DATATYPE (0n) , "", null, undefined, Nan (NOT A NUMBER)

// truthy values

// "0", 'false', " ", [], {}, function(){} <= (called empty function)


// empty array

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }


// empty object

// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//     console.log("object is empty");
// }

 

 // Nullish Coalescing Operator (??): null undefined


//  let val1;
//  val1 = 5 ?? 10
//  console.log(val1);       // output => 5

//  let val2;
//  val2 = null ??  10
//  console.log(val2);        // output => 10

//  let val3;
//  val3 = undefined ?? 14
//  console.log(val3);         // output => 14

//  let val4;
//  val4 = null ?? 13 ?? 45
//  console.log(val4);         // output => 13


// Terniary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");