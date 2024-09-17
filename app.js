


// --------------------------------------------LEACTURE 17----------------------------------
// const tinderUser=new Object()//singelton obj
const tinderUser={}//non singleton obg
tinderUser.id="123abc"
tinderUser.name="yumna"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

// const regularUser={
//     email:"yumna@gmail.com",
//     fullName:{
//         userfullname:{
//             firstName:"yumna",
//             lastName:"nasir"
//         }
//     }
// }
// console.log(regularUser.fullName.userfullname.firstName);

// const obj1={1:"a" , 2:"b"}
// const obj2={1:"c" , 2:"d"}
// const obj3=Object.assign({},obj1,obj2)
// const obj3={...obj1,...obj2}//spread operator
// console.log(obj3);

// const users=[
//     {
//         id:1,
//         email:"yumna@gmail"
//     },
//     {
//         id:1,
//         email:"yumna@gmail"
//     }
// ]
// users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// --------------------------------------------LEACTURE 18----------------------------------
// objects json formatter

// const course = {
//     coursename: "javascript",
//     price:"999",
//     courseInstructor:"hitesh"
// }
// -----object sestructure-------
// course.instructor //not a good way
// const{courseInstructor}=course
// console.log(courseInstructor);
// // or
// const{courseInstructor:instructor}=course
// console.log(instructor);

// const navbar = ({company})=>{//destructuring
// }
// navbar(company="hitesh")
// -------------------------- API-------------------
// API in object
// {
//     "name":"hitesh",
//     "coursename":"js",
//     "price":"free"
// }

//API in array
// [
//     {},
//     {}
// ]

// --------------------------------------------LEACTURE 19----------------------------------
//FUNCTIONS AND PARAMETERS

// function add(num1,num2){ //parameters
//     a=num1+num2
//     return a;  
// }
// const Result=add(2,2); //arguments
// console.log("Result",Result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("hitesh"));
console.log(loginUserMessage());




// --------------------------------------------LEACTURE 20----------------------------------
// --------------------------------------------LEACTURE 21----------------------------------
// --------------------------------------------LEACTURE 22----------------------------------
// --------------------------------------------LEACTURE 23----------------------------------
// --------------------------------------------LEACTURE 24----------------------------------
// --------------------------------------------LEACTURE 25--------------------------------
// --------------------------------------------LEACTURE 26--------------------------------
// --------------------------------------------LEACTURE 27--------------------------------