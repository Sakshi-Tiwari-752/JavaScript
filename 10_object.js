// ****************************************  OBJECTS  ***************************************

 //there are two methods to declare the objects 
 //1. As literals
 //2. As constructor

 //Singleton (koi bhi constructor esse bnate hai to singleton object bnta hai ) 
 // literals ki trh declare krne pr constructor nhi bnta hai

 // object literals
 Object.create  //1. method to create object as constructor 
 //2. method
const user = {
   name: "Sakshi",
   age: 18,
   location: "ayodhya",
   email: "st@gmail.com",
   isLoggedIn: false,
   lastLoginDays: ["Monday", "Saturday"]
  }
console.log(user.email);   //output => sk@gmail.com
console.log(user["email"]);
 

//change the value of object

user.email = "chatgpt@gmail.com";
//  Object.freeze(user);  // here the value of email is freeze we cannot change it again
user.email = "chatgpt123@gmail.com"  //can not change because it is freeze
console.log(user);

user.greeting = function(){
   console.log("Hello User");
}
console.log(user.greeting());