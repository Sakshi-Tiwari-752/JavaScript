                                       // LOOP
// 1. for loop
// 2. while loop

                                  // for loop (syntax)


// for(initialization; condition; updation){
//      --------
//      --------
//   }


// for(let i = 0; i<=10; i++){
//     console.log(i)
// }

 // nested loop

//   for (let i =1; i<10 ;i++) {
//   console.log(`Outer loop value: ${i}`);
//   for(let j =1; j<=10; j++){
//   // console.log(`Inner loop value  ${j} and inner loop ${i}`);
//    console.log(i + '*' + j + ' = ' + i * j);          // print table
//    }
//     }



//     let myArray = ["hanumanji", "ramji", "krishnaji"]
//     console.log(myArray.length);
//     for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
//      }



// break 

//     for(let i =0; i<=20; i++){
//     if(i == 5){
//     console.log(`Detected 5`);
//     break                                 // control flow ko break krne ke liye break keyword use hota h 
//     }
//     console.log(`value of i is ${i}`);
//     }


// continue 

    //    for(let i =0; i<=20; i++){
    //    if(i == 5){
    //    console.log(`Detected 5`);
    //    continue                               // continue keyword jis statement me lga h usko ek bar skip kr deta h 
    //    }
    //    console.log(`value of i is ${i}`);
    //    }


                                            // while loop 


//        let index = 0
//        while(index <= 10){
//            console.log(`value of index is ${index}`);
//            index = index + 2
//        }                                            
       
//        let myArray = ['hanumanji', 'ramji', 'krishnaji']
//        let arr = 0 
//        while (arr < myArray.length){
//            console.log(`value is ${myArray[arr]}`);
//            arr= arr +1
//        }



                                             // do while loop 

//    let score = 10;
//    do{
//     console.log(`score is ${score}`);
//     score++;
//    }     
//    while(score <= 10);                                     


                                            // for of loop in array


//     const arr = [1, 2, 3, 4, 5] 
//     for(const num of arr){
//         console.log(num);
//     }                         
    
//     const greetings = "hello world"
//     for(const greet of greetings ){
//         console.log(`Each char is ${greet}`)
//     }


                                                  // Maps 

//       (The map object holds key -value pairs and remembers the original insertion order of the keys)
 //      ( Any value may be used as either a key or a value) 


//       const map = new Map()
//       map.set (`IN`, "INDIA")
//       map.set('USA', "UNITED STATE OF AMERICA")
//       map.set('Fr', "France")

//       console.log(map);


  //for of loop in the map

    //   const map = new Map()
    //   map.set (`IN`, "INDIA")
    //   map.set('USA', "UNITED STATE OF AMERICA")
    //   map.set('Fr', "France")
    
    //    for(const [key, value] of map)
    //   console.log(key, ':-', value);;



  // for of loop in object

    // const myObject = {
    //     'game1': 'cricet',
    //     'game2': 'hockey'
    // }
    // for(const [key, value] of myObject){
    //     console.log(key, ':-', value);
    // }                                           // myObject is not iterable((for of) loop is not working in the map)



 // other method of to apply the (for in) loop in the map

//  const myObject = {
//     js: 'javascript',
//     cpp: 'c++',
//     rb:  'ruby'
//  }
//  for (const key in myObject){
//     console.log('${key} shortcut is for ${myObject[key]}');
//  }


// (for in) loop in the array 

// const programming = ["js", "cpp", "py", "java"]
// for(const key in programming){
//     console.log(programming[key]);
// }


// map is not iterable

// const map = new Map()
//   map.set (`IN`, "INDIA")
//   map.set('USA', "UNITED STATE OF AMERICA")
//   map.set('Fr', "France")

//   for(const key in app){
//     console.log(key);
//   }



                                                // for each loop  in array


 const coding = ["js", "java", "cpp"]
 coding.forEach( function (item) {
    console.log(item);
 })                                                
                                                
                                                