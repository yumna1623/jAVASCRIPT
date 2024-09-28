

// console.log(num === 2);
// also check the data type
// ----------------------------------------------------------------------------------------

// Use prompt to take input from the user
// let userInput = prompt("Please enter something:");

// if (userInput > 0 && userInput !== isNaN  ) {
//     console.log("  your input number is "+userInput);
// } else {
//     console.log("please enter a valid number .");
// }



// --------------------------------------------LEACTURE 17----------------------------------
// const tinderUser=new Object()//singelton obj
// const tinderUser={}//non singleton obg
// tinderUser.id="123abc"
// tinderUser.name="yumna"
// tinderUser.isLoggedIn=false
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

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("please enter a username");
//         return
        
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage());

// --------------------------------------------LEACTURE 20----------------------------------
//rest operator/spread
// 1 
// function canculateCartPrice(...num1){
//         return num1
// }
// console.log(canculateCartPrice(200,400,500));

// 2
// anyobject is because function dont know whether api is coming or object is coming
// const user={
//     username:"yumna",
//     prices:999
// }
// function handleObject(anyObject){
//     console.log(`Username is ${anyObject.username} and price is${anyObject.price}`);
// }
// // handleObject(user)
// //direct passing of obj
// handleObject({
//     username:"hitesh",
//     price:199
// })

// 3
//passing of aaray in function
// const myNewArray = [200,400,100,600]
// function returnSecondValue(getArray){
//     return getArray[1]
// }
// console.log(returnSecondValue(myNewArray));

// --------------------------------------------LEACTURE 21----------------------------------
//scope
// we can access var out of the scope and thats the problem
// cant access let and const

// --------------------------------------------LEACTURE 22----------------------------------
// 1
// function one(params) {
//     const username="omer"

//     function two(params) {
//         const website="youtube"
//         console.log(username);
//     }
//     // console.log(website);//cant access
//     two()   
// }
// one()

// 2
// if (true) {
//     const username="ayesha"
//     if(username==="ayesha")
//     {
//         const website = "github"
//         console.log(username+website);        
//     }
// }

//3

// console.log(addone(2));//can access from here too 
// function addone(num) {
//     return num+1
// }
// console.log(addone(2));

// or

// console.log(addtwo(2));//cant access from here
// const addtwo=function (num) { //function/expression
//     return num+2
// }
// console.log(addtwo(2));

// --------------------------------------------LEACTURE 23----------------------------------
//arrow function

// const user ={
//     username:"hitesh",
//     price:999,
//     welcomemsg:function (params) {
//         console.log(`${this.username},welcome to website`);
//         console.log(this);
//     }
// }
// user.welcomemsg()//if i make this a comment and run below command
// console.log(this);//now it will give {}

// 2
// --------------------------------------normal function
// const chai1=function(){

// }
// -------------------------------------Basic arrow function =()=>{}

// const addTwo = (n1,n2)=>     n1+n2          //this is fine implicit return
// const addTwo = (n1,n2)=>     (n1+n2)        //when using () no need to use return keyword
// const addTwo = (n1,n2)=>{                   //explicit return
//     return n1+n2
// }
// const a =addTwo(1,1)
// console.log(a);

// --------------------------------------------LEACTURE 24----------------------------------
// IIFE normal function
// (function chai(params) {
//     console.log("DB CONNECTED");
// }) ();                          //this semicolon is must in between 2 iife

// ----------------------------IIFE arrow function
// ( chai2 = () =>{
//     console.log("DB CONNECTED 2");
// }) ();

// ---------------------------------name IIFE
// ( chai2 = (name) =>{
//     console.log(`DB CONNECTED 2 ${name}`);
// }) ('yumna');

// ---------------------------------unname IIFE
// ((name) =>{
//     console.log(`DB CONNECTED 2 ${name}`);
// }) ('yumna');


// --------------------------------------------LEACTURE 25--------------------------------
//callstack + execution context

// JavaScript Execution context
// global EC =>this
// Functinal EC
// Eval EC

// Memory Creation Phase
// Ececution Phase

// --------------------------------------------LEACTURE 26--------------------------------
//CONTROL FLOW/LOGIC FLOW
// if(2 === "2") true
// --------------------------------------------LEACTURE 27--------------------------------
//loops

// --------------------------------------------LEACTURE 28--------------------------------

// --------------------------------------------LEACTURE 29--------------------------------
//for of => will not work on objects

// obj in arrays
// [{},{},{}]

// const arr = [1,2,3,4,5]
// for (const num of arr) {
//             console.log(num);
// }

// const greetings = "hello world"
// for (const greet of greetings) {
//     console.log(`each char is ${greet}`);
    
// }

// --------------------------------------------LEACTURE 30--------------------------------
//MAP

// const myNum = [1,2,3,4,5,6,7,8,9,10]
// const newNums=myNum.map((num)=>num+10)
// console.log(newNums);

// const map = new Map()
// map.set('IN','India')
// map.set('US','United States Of America')
// console.log(map);

// const map = new Map()
// map.set('IN','India')
// map.set('US','United States Of America')
// for (const [key,value] of map) {
//     console.log(key, ':-',value);
// }

// const myObject = {
//     'game1':'NFS',
//     'game2':'Spiderman'
// }
// for of wont work on obj// 
// for (const [key,value] of myObject) {
//     console.log(key,'-:',value);
// }

// const myObject = {
//     js:'javascript',
//     cpp:'c++'
// }


// for (const key in myObject) {
//     //    console.log(myObject[key]);
//     console.log(`${key} shortcut is for ${myObject[key]}`);
    
// }

//------------------------------------FILTER
// 1)
// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newnum=myNums.filter((num)=>
//         num>4
// )
// console.log(newnum);

// 2)
// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newnum=myNums.filter((num)=>{
//     return num>4            
//     //with curly braces it wil not return without return statement
// })
// console.log(newnum);

// 3)
// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newnum=myNums.filter((num)=> (num>4) )
// console.log(newnum);

// const Books=[
//     {title:'book one',genre:'Fiction',publish:1981,edition: 2000},
//     {title:'book two',genre:'history',publish:1982,edition: 2001},
//     {title:'book three',genre:'science',publish:1983,edition: 2002},
//     {title:'book four',genre:'tragic',publish:1984,edition: 2003}
// ]
// const userbooks=Books.filter((bk)=>{
//         return bk.genre==='tragic'
// })
// console.log(userbooks);

// -----------------chaining

// const myNum = [1,2,3,4,5,6,7,8,9,10]
// const newNums=myNum.map((num)=> num * 10)
//                     .map((num)=>num + 1)
//                     .filter((num)=> num>=40)
// console.log(newNums);

// ----------------REDUCE
// 1)
// const myNum=[1,2,3]
// const myTotal=myNum.reduce(function(acc,currval) {
//     console.log(`acc:${acc} and currval: ${currval}`);
    
//     return acc+currval},3)
//     console.log(myTotal);
    
// 2)
// const myNum=[1,2,3]
// const myTotal=myNum.reduce((acc,currval) => acc+currval,3)
//     console.log(myTotal);

// const ShoppingCart = [
//     {
//         itemName:"js course",
//         price:100
//     },
//     {
//         itemName:"py course",
//         price:200
//     },
//     {
//         itemName:"cpp course",
//         price:400
//     },
// ]
// const money =ShoppingCart.reduce((acc,item)=>acc+ item.price,0)
// console.log(money);


// --------------------------------------------LEACTURE 31--------------------------------
// DOM(document obj model)
 
// --------------------------------------------LEACTURE 32--------------------------------
//DOM
{/* <div class="bg-black">
        <h1 id="title" class="heading">DOM LEARNING</h1>
        <p>Lorem ipsum s ods consequatur qui iusto totam!</p>
    </div> */}

// --------------------------------------------LEACTURE 33--------------------------------
//HOW TO SELECT DOCUMENT

{/* <div class="parent">
            <div class="day">monday</div>
            <div class="day">tuesday</div>
            <div class="day">wednesday</div>
            <div class="day">thursday</div>
            <div class="day">friday</div> */}
    //     </div>


    //  <script>
    //     // const parent = document.querySelector('.parent')
    //     // console.log(parent);
    //     // console.log(parent.children[0]);
    //     {/* // console.log(parent.children[0].innerHTML); */}

    //     {/* // for (let i = 0; i < parent.children.length; i++) { */}
    //     //     console.log(parent.children[i].innerHTML);
    //     //     parent.children[1].style.color="orange"
    //     // }

    //     //same
    //     // console.log(parent.children[0]);
    //     // console.log(parent.firstElementChild);
    //     // console.log(parent.lastElementChild);

    //     // const dayOne=document.querySelector('.day')
    //     // console.log(dayOne);
    //     // console.log(dayOne.parentElement);
    //     // console.log(dayOne.nextElementSibling);

    //     // console.log("nodes;-", parent.childNodes);

    // -----------------------------------HOW TO CREATE AN ELEMENT
    // const div = document.createElement('div')
    // console.log(div);
    // div.className="divider"
    // div.id=Math.round(Math.random()*10+1)
    // div.id="ruler"
    // div.innerHTML="my firset javascript code" //no
    // const text=document.createTextNode("my firset javascript code") //yes
    // div.appendChild(text)
    // div.setAttribute("title","chai or code")
    // div.style.backgroundColor="purple"
    // div.style.color="white"
    //-------attaching div to body--------
    // document.body.appendChild(div)

    // const h1 = document.createElement('h1')
    // console.log(h1);
    
// --------------------------------------------LEACTURE 34--------------------------------
//EDIT AND REMOVE ELEMENTS IN DOM


{/* <ul class="language">
            <li>javascript</li>
        </ul> */}
    // ----------------------------

    // function addLanguage(language){
    //     const li=document.createElement('li')
    //     li.innerHTML=`${language}`
    //     document.querySelector('.language').appendChild(li)
    // }
    // addLanguage("ruby")

    // -------------------------------OPTIMIZE APPROACH-------
    function addOPTILanguage(language) {
        const li=document.createElement('li')
        const text=document.createTextNode(language)
        li.appendChild(text)
        //or
        // li.appendChild(document.createTextNode(language))
        document.querySelector('.language').appendChild(li)
    }
    addOPTILanguage("golang")
    addOPTILanguage("python")
    // ------------------------------------IF I HAVE TO CHANGE PYTHON INTO C++(best)

    // 1)select the element you want to change
    // 2)create a new element
    // 3)change the text of that new element
    // 4)replave with the element you select first
    // const secLang=document.querySelector("li:nth-child(2)")
    // secLang.innerHTML="c++"no
    // const newli=document.createElement('li')
    // newli.textContent="mojo"
    // secLang.replaceWith(newli)
    // console.log(secLang);
    

// 2)
//remove last element=>python
const lastLang=document.querySelector('li:last-child')
lastLang.remove()

// --------------------------------------------LEACTURE 35--------------------------------
// -----------------------------PROJECT------------------------------------------------------


// --------------------------------------------LEACTURE 36--------------------------------





















// --------------------------------------------LEACTURE 37--------------------------------
// --------------------------------------------LEACTURE 38--------------------------------
// --------------------------------------------LEACTURE 39--------------------------------
// --------------------------------------------LEACTURE 40--------------------------------
// --------------------------------------------LEACTURE 41--------------------------------
// --------------------------------------------LEACTURE 42--------------------------------
// --------------------------------------------LEACTURE 43--------------------------------
// --------------------------------------------LEACTURE 44--------------------------------
// --------------------------------------------LEACTURE 45--------------------------------
// --------------------------------------------LEACTURE 46--------------------------------
// --------------------------------------------LEACTURE 47--------------------------------
// --------------------------------------------LEACTURE 48--------------------------------
// --------------------------------------------LEACTURE 49--------------------------------
// --------------------------------------------LEACTURE 50--------------------------------
// --------------------------------------------LEACTURE 51--------------------------------
