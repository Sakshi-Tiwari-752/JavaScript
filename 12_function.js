//function 

// syntax 

//          function printName (){
//              ------
//              ------
//            }
//           printName();


// example

function addTwoNumbers(num1, num2){      //(num1 and num2 are parameters)
    console.log(num1 + num2)  ;
}
addTwoNumbers(2, 3);       // function call  (2, 3 are arguments)



//store output in a variable

function addTwoNumber(number1, number2){
    let result = number1 + number2
    return result;          //or
    // return number1 + number2;
}
const result = addTwoNumber(1,8)
console.log("Result : ", result);


//  example

function loginUserMessage (username){
    return `${username} just logged in`;    //string concatenations
}
 console.log(loginUserMessage("Sakshi"))   //print function 
//  console.log(loginUserMessage(""))    //output => undefined just logged in (undefined => because of empty value )


//example  (...  =>  known as rest operator and spread operator)

// function calculateCartPrice(...num1){       //   //output => [200, 400, 500, 2000] (...) this 3 dot are convert the numbers in an array here it is work as rest operator
function calculateCartPrice(val1, val2, ...num1){      // output => [500, 2000] this statement hold or rest the val1 , val2 and  put all remaining elements in an array
return num1 
}
 
// console.log(calculateCartPrice(200, 400, 500, 2000));  



// how to pass an object in the function 

const user = {
    username: "sakshi",
    age: "22"
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
}

handleObject(user)  //output => username is sakshi and age is 22 
// // you can directly access the object 

handleObject({
    username: "sonakshi",
    age:"23"
})           // output => username is sonakshi and age is 23



// pass array in the function 

const myNewArray = [300, 23, 21, 454, 344];
function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));   //output => 23  or use below statement both are same
console.log(returnSecondValue([300, 23, 21, 454, 344]));   // output => 23