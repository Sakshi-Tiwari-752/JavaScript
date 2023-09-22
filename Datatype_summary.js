//PRIMITIVES DATATYPE(call by value)

  //  7 TYPES:
  //  string, Number, Boolean, Null, Undefined, Symbol, Bigint

//  In the javascript we does't define language 
//  It is dynamic typed language , If use the incorrect type, your program does run, and the error occurs only when that particular line of code is executed. so, the types are checked during runtime.


// NON PRIMITIBVE TYPE  OR REFERENCE TYPE 
//Non primitive datatype ka typeof "Function" hi hota h 

// Array, Object, Functions


//    const score = 233;
//    const scorevalue = 23.33;

//    const isLoggedIn = false;
//    const outsideTemp = null;
//    let userEmail;


   // In (Symbol) you create diffrent name's of 2 variable and give the same value it now you will check that both value are same or not  you will see it returns the false in terminal beacause both are differnt values in the symbol.
//    const id = Symbol('123')
//    const anotherId = Symbol('123')
//    console.log(id === anotherId);

   //BIGINT

//    const bigNumber = 1234567890123342n  // we use bigint for store the large number and if if add n in the last it will automatically convert in the bigint. 


   // Array

//    const heros = ["Shaktiman", "Nagraj", "Doge"];

   // Object
   // object are i curly braces and store value in key-value pairs and you can store in any variable.

//    let myObj = {
//     name: "Sakshi",
//     age: 22,
//    }

   // Function   (in the javascript you can treat function as variable)

//    const myFunction = function(){
//     console.log("Hello World");
//    }
//    myFunction();


   // The typeof Operator

   //      type of val                           Result

        //  Undefined                          "undefined"            
        //  Null                                "object"
        //  Boolean                             "boolean"
        //  Number                               "number"
        //  String                               "string"




        //  *********************************** Memory *******************************

        // 2 types memory == Stack , Heap

        // Premitive datatype are use Stack Memory (copy)
        // And In Non-primitive datatype used Heap Memory (original/ reference)

        let firstName = "Sakshi";
        let secondName = firstName
        anothername = "tiwari"     //it is copy of firstName


        console.log(secondName);
        console.log(anothername);

        