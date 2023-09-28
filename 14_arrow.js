

// this keyword  (this keyword told us about current context )

// const user ={
//     username: "sakshi",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }
// }


// user.welcomeMessage();
// user.username ="roshni"
// user.welcomeMessage();

// console.log(this);     //empty object

// browser ke andar jo  global object h usko window object khte h 


// function name(){
//     let username = "sakshi";
//     console.log(this.username);
// }
// name();

const name = () => {
    let username = "sakshi"
    console.log(this.username);         // undefined
}
name();


//arrow function  
//

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4))         // {} curly braces me return likhna pdega

//or

// const addTwo = (num1, num2) => num1 + num2       // implicit return   (return likhne ki need nhi h )
//  console.log (addTwo(3, 4))

// or 

 const addTwo = (num1, num2) => (num1 + num2)     // return likhne ki need nhi h 
 
//  const addTwo = (num1, num2) => ({username: "sakshi"});     // for object return 

 console.log(addTwo(3,4))