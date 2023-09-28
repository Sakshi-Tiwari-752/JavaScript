
// const tinderUser = new Object()   //singleton object

const tinderUser = {}     //non- singleton object

tinderUser.id = "123abc"
tinderUser.name = "sakshi"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "sa@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sakshi",
            lastaname: "tiwari"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}


//[.assign()]
// const obj3 = {obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2)
const obj4 = {...obj1, ...obj2}   //or
console.log(obj3);


const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 11,
        email: "skl@gmail.com"
    },
    {
        id: 12,
        email: "sb@gmail.com"
    }
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn')); 



// ***************************** destructuring of object ********************************************

const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "xyz"
}

// course.courseInstructor;   //for checking the value are present or not

const{courseInstructor} = course
console.log(courseInstructor);


// ******************************** API *************************************

//how API looks(syntax) in the form of object


// "name": "sakshi",
// "age": "22",
// "course": "b.tech"

// API in the form of array

[
    {},
    {},
    {}
]