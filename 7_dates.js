//DATES
            
// let myDate = new Date()
// console.log(myDate.toString());        // output =>   return indian current time

// console.log(myDate.toDateString());  //output => Fri Sep 2023
// console.log(myDate.toLocaleString());  // output => 9/22/2023, 12:12:26 AM

//  check datatype of date
// console.log(typeof myDate); //Datatype of Date is "Object"

// let myDate = new Date()
 
// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5,3)
// let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp =  Date.now()
console.log(myTimeStamp);  //it give value in mili second
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);

