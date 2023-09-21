// let score = 33 //33 this is an integer
 

// let score = "33"  // now 33 is  a string because of the double quotes  


// console.log(typeof score);
// console.log(typeof(score));  //both are same 


//Now the score is convert in the number form
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);


//let score = 23abs  => it return the NaN (NOT A NUMBER) in the terminal because it is not pure integer or string
//javascript convert these value in other form but if you print this value it return (NaN) in the terminal


// null  is a object 
// let number  = null  //variable declaration
// console.log(number);  // print the value
// console.log(typeof number);  //find the type of variable
 

// let changeValue = String(number)   //convert the type of variable in one form to aNOTHER 
// console.log(typeof changeValue);   //again print this datatype 


//undefined
// let num = undefined
// console.log(num);
// console.log(typeof num);


//BOOLEAN 
// let bool = true;
// console.log(bool);
// console.log(typeof bool);


//STRING can not convert in the integer   (it return the type "number" when you change the datatype but when you print the value it not convert in the number and return value you give "sakshi")
// let namee = "sakshi";
// console.log(namee);
// console.log(typeof namee);


// let changeName = Number(namee);
// console.log(typeof changeName);
// console.log(namee);


// "" => false
//"sakshi" => true


// let  checknum = 22;
// let stringNumber = String(checknum);
// console.log(stringNumber);
// console.log(typeof stringNumber)




//******************************** Operation *************************** */


// let value = 3
// let negValue = -value;  //convet 3 in the negative value 
// console.log(negValue);


// console.log(2+2);
// console.log(3-3);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**3);  //  2**3 means power of 2 => 2**3 = 8


//ADD TWO STRINGS

// let str1 = "hello";
// let str2 = " world";
// let str3 =  str1 +  str2;
// console.log(str3);  //output=> hello world


//ADD TWO NUMBERS

// let num1 = 23;
// let num2 = 43;
// let ans = num1 + num2;
// console.log(ans);


// console.log("1" + 2);  // output => 12
// console.log(1 + "2");   // output => 12
// console.log(1 + 2 + "2");  //output => 32
// console.log (1+2 + "2");   //output => 32
// console.log ((3*4) + 23%6); //output => 17


// console.log(+true);  //output => 1
//console.log(true+);   // give error
// console.log(+"");    // output => 0


// let num1, num2, num3;
// num1 = num2 = num3 = 2+2;  //All variable num1 num2 num3 is stored same value 4 but it is not a good way  beacause it has no readability in this code and readability is more important in the codes
 // it looks cool but it is not a correct way 

// console.log(num1);
// console.log(num2);
// console.log(num3);


// prefix and postfix increment and decrement operator

let a = 2;
++a;   // it increment the value by 1 in 2
console.log(a);  //output => 3

--a;   // it decrement the value by 1 in the 3
console.log(a);  //output =>2
