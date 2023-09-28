                                           //scope


let a = 10;
 const b = 20;
 var c = 30;

 console.log(a);
 console.log(b);
 console.log(c);

 // {}  (curly braces jb kisi function aur if- else conditions me aata h to use scope khte h 



 if(true){         // { block scope } 
    let a = 10;
    const b = 20;
    var c = 54;  // block scope me hum jo bhi value likhte hai vo value bahr output me nhi aati h 
 }

 console.log(a);  // output => undefined aayega kyuki let keyword use kiya gya h aur jiska scope } closing braces tk hi h
 console.log(b);  // output => undefined  same as let 
 console.log(c);     // output => 54  kyuki var ye stategy follow nhi krta h 


   let a = 300;     //global scope
   let b = 34;
   if (true){       //block scope
    let a =20;
    const b = 31;
    console.log("block scope: ", a , b);      // output => block scope: 20, 31
   }

   console.log("global scope: ", a);            // output =>  global scope: 300
   console.log ("global scope: ", b);           // outpput => global scope:  34


   // scope in loop 

   let a = 300;
   for ( let i= 0; i<10; i++){
    console.log([i]);                // block scope
   }

   console.log(a);                   // global scope


   


                                 // Nested scope

    // (Nested scope me basically child function(two) parent function(one) ko access kr pate h )

  function one(){
    const username = "sakshi"

    function two(){
        const channel = "youtube"
        console.log(username);
    }
    // console.log(channel);

    two();
  }                                                   
   
  one();




  //  ******************************************************************************************

  console.log(addone(6))
  function addone(num){
        return num +1
  }
//   addone(6)         // this statement only return value not print because we are not calling the printing method
 


addTwo(7)               // can not access addTwo before initialization at object
  const addTwo = function(num){
    return num + 2
  }

//   addTwo(7)