const accountId = 153653     // can't change
let accountEmail = "skaifk@yahoo.com"

/* prefer not to use var because of issues in block scope 
and functional scope */

var accountPassword = "12345"
accountCity = "Ayodhya" // it is possible, you can initialize any thing without any keyword but it is bad practice

let accountState; //in javascript  if you declare any variable without any value  then it will give you a undefined value


//accountId = 2 not allowed
//accountId = 2


console.log(accountId);


//our whole information  show in the terminal in a tabular form
console.table([accountId, accountEmail, accountPassword, accountCity]);