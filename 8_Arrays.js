// ******************************************  Array  ******************************

//Declaration of array 

const myArr = [1, 2, 3, 4, 7];

const myarr2 = ["Sakshi", "Neha", "Aarti", "Aastha"];

const myArr1 = new Array(1, 2, 3, 4);
// console.table([myArr,myarr2, myArr1]);  //method that you can print your output in a tabular form 

// // Access the element by index
// console.log(myarr2[0]);  //Indexing start from 0 so output => sakshi


//Array Methods


// [.push()] Push an element in an array after declaration
// myarr2.push(6);  //output => ["Sakshi", "Neha", "Aarti", "Aastha", 6]
// myarr2.push("rachna");  //output => ["Sakshi", "Neha", "Aarti", "Aastha", 6, "rachna"]
// console.log(myarr2);


// //[.pop()] for deleting  an element 
// myarr2.pop();  // this statement deletes the last element of an array
// console.log(myarr2);


//[.unshift()]  it add  element at the first index
// myarr2.unshift(4);     //output => [ 4, "Sakshi", "Neha", "Aarti", "Aastha"]
// myarr2.unshift(0);    //output => [ 0, 4, "Sakshi", "Neha", "Aarti", "Aastha"]
// console.log(myarr2);


//[.shift()] it remove the first element from the array
// myarr2.shift();    //output => [ "Neha", "Aarti", "Aastha"]
// console.log(myarr2);


// [.includes()] find element (9 is included or not in tha array)
// console.log(myarr2.includes(9));   //output => false

//[.indexOf()] check the index of particular element
// console.log(myarr2.indexOf(1));  // output => -1 (because 1 is not present in the array)
// console.log(myarr2.indexOf("Sakshi"));  //output => 0 (because "Sakshi" is present at the index 0)
// console.log(myarr2.indexOf("Aastha"));  //output => 3 (because "Aastha" is present at the index 3)


// //[.join()]  adds all the elements of an array into a string, separated by the specified separator
// const newArr = myArr.join();
// console.log(myArr);   //output => [1, 2, 3, 4, 7]
// console.log(newArr);   //output => 1,2,3,4,7  because it gives the output as an array but now the values datatype is string 
// console.log(typeof newArr);  //output => string


// [.slice(start num, end num)] (returns a copy of a section of an array. For both start and end)
// console.log("A ", myArr);   // OUTPUT => A [1, 2, 3, 4, 7]
// const myn1 = myArr.slice(1,3);   
// console.log(myn1);         //OUTPUT => [2, 3]


// //[.splice(starting num, end num)] ()
// const myn2 = myArr.splice(1,3);
// console.log("C ", myArr);   // output => [1, 7]
// console.log(myn2);    // output => [2, 3, 4]

