// Immediately Invoked Function Expression (IIFE)


// IIFE is used for removing the global scope's variable and other declaration  pollution 
// first () in which we write the definition of function 
// second() for the execution call



//    ( function name(){      //it is named IIFE because it has name of function
//        console.log(`john`);
//    }) ();


//or

// ( () => {
//     console.log(`harry`);
// }) ()

//   or
 
//   how to pass parameter in IIFE

// ( (test) => {    //  unnamed IIFE
//     console.log(`harry ${test}`);
//  }) ('IIFE')                            // output => harry IIFE



// how to write 2 IIFE together 

( () => {
    console.log(`harry`);
}) ();                          // if we write 2 IIFE together then it is compalsury to write semi colon after the exicution call parenthesis()

( (test) => {
    console.log(`harry ${test}`);
}) ('IIFE')                            // output =>  harray
                                       //            harry IIFE
