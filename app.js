

// console.log(num === 2);
// also check the data type
// ----------------------------------------------------------------------------------------
// Asking user his score and to tell his grade
// let score = prompt("Please enter something:");
// if (score > 0 && score !== isNaN  ) {
    

   
//     if(score>50 || score<60)
//     {
//         console.log("  your input score is "+score);
//         score++
//         console.log("  After incrementing your  score is "+score);
//         console.log("your grade is B");
//     }
//     else if(score>=60 && score<=70){
//         console.log("  your input score is "+score);
//         score++
//         console.log("  After incrementing your  score is "+score);
//         console.log("your grade is A");
//     }
//     else if(score >= 71 && score <=80){
//         console.log("  your input score is "+score);
//         score++
//         console.log("  After incrementing your  score is "+score);
//         console.log("your grade is A+");
//     }
//     else if(score>=81 && score<=100){
//         if(score==100){ 
//             console.log("  your input score is "+score);
//             console.log(" your  score is "+score);
//             console.log("your grade is that you top in class");
//         }
//         else{
//             console.log("  your input score is "+score);
//             score++
//             console.log("  After incrementing your  score is "+score);
//             console.log("your grade is that you top in class");
//         }
//     }
// }
//  else {
//     alert("please enter a valid number .");
// }

// -----------------------------------------------------------------------------------------
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
    // function addOPTILanguage(language) {
    //     const li=document.createElement('li')
    //     const text=document.createTextNode(language)
    //     li.appendChild(text)
    //     //or
    //     // li.appendChild(document.createTextNode(language))
    //     document.querySelector('.language').appendChild(li)
    // }
    // addOPTILanguage("golang")
    // addOPTILanguage("python")
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
// const lastLang=document.querySelector('li:last-child')
// lastLang.remove()

// --------------------------------------------LEACTURE 35--------------------------------
// -----------------------------PROJECT------------------------------------------------------


// --------------------------------------------LEACTURE 36--------------------------------
//EVENTS
// =>event propogation
// =>bubbling

// ----------------------------------------------------------index-----------------------------------------
{/* <h2>Amazing images</h2>
        <div>
        <ul id="images">
            <li><img src="img/pexels-dejiprince-28231061.jpg"  id="girl"></li>
            <li><img src="img/pexels-miami302-26793646.jpg"  id="dog" alt=""></li>
            <li><img src="img/pexels-njeromin-20177407.jpg" id="plane"alt=""></li>
            <li><img src="img/pexels-ruxandra-scutelnic-1470184397-28259733.jpg" id="cake"alt=""></li>
            <li><img src="img/pexels-wwarby-21533286.jpg" id="bridge"alt=""></li>
            <li><a style="color: rgb(73, 213, 231);" href="https://www.google.com/" id="google">google</a></li>
        </ul>
        </div> */}
// ----------------------------------------------------------index-----------------------------------------

//document.getElementById('images').addEventListener('onclick', function name(params) {},false)
            // capturing start to end true
            //bubbling down to upward false
            // document.getElementById('images').addEventListener('click', function (e) {
            //     console.log("clicked inside ul");
            // },false)
    
            // document.getElementById('plane').addEventListener('click', function (e) {
            //     console.log("clicked owl");
            //     e.stopPropagation()
            //     // ye for ex just slick owl print krega not
            // },false)
    
            // document.getElementById('google').addEventListener('click',function (e) {
            //     e.preventDefault()
            //     e.stopPropagation()
            //     console.log("google clicked");
            // },false)

// --------------------------
// document.querySelector('#images').addEventListener('click',function(e){
//     // console.log(e.target);will give you just images
//     // console.log(e.target.parentNode); //will give you just li
//     console.log(e.target.tagName); //will give you just li
//     if (e.target.tagName === 'IMG') {
//         // removeIt.parentNode.removeChild(removeIt)  //best way          
//         let removeIt= e.target.parentNode
//         removeIt.remove() //ok
//     }
// },false)

// --------------------------------------------LEACTURE 37--------------------------------
//ASYNC
// javascrip is synchronous(line by line execution)
//single threaded language 

// => BLOCKING CODE
//    block the flow of program
//    read file sync

// => NON BLOCKING CODE
//    do not block the execution
//    read file async

// --------------------------------------------LEACTURE 38--------------------------------
// PROJECTS WITH ASYNC JS

// --------------------------------------------LEACTURE 39--------------------------------
// API request and V8 engine
// JSON FORMATTER

// --------------------------------------------LEACTURE 40--------------------------------
// Promise syntax
// const promiseOne=new Promise((resolve, reject) => {})
// promiseThree.then().catch()

    //what does this resolve and reject doing
// ---------------------------------------------1
// const promiseOne=new Promise((resolve, reject) => {
//     // Do an async task
//     //DB Calls, cryptography,network
//     setTimeout(() => {
//         console.log("async task is completed");
//         resolve()
//     }, 1000);

//     })
//     //it has a direction connection with resolve
//     // but we did not connect the resolve with this the so connect to this to promise 
//     //we write resolve() in promise 
//     promiseOne.then(()=>{
//         console.log("promise consumed");
        
//     })

// ---------------------------------------------2

// new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("async task  2 is completed");
//             resolve()
//         }, 1000);
    
//         }).then(()=>{
//             console.log("Async 2 resolved");
//         })
        
// ---------------------------------------------3

// const promiseThree=new Promise((resolve, reject) => {
//     setTimeout(() => {
        
//         resolve({userame:"chai",email:"chai@example.com"})
//     }, 1000);
//     })
//     promiseThree.then((user)=>{
//         console.log(user);
                
//             })
// // ---------------------------------------------4-------use case of reject

// const promiseFour=new Promise((resolve, reject) => {
//     setTimeout(() => {
        
//         let error =false
//         if (!error) {
//             resolve({username:"hitesh",password:"123"})
//         }
//         else{
//             reject("ERROR: something is wrong ")
//         }
//     }, 1000);
//     })
//     // chaining
//     const username=promiseFour
//             .then((user)=>{
//                 console.log(user)
//                 return user.username
//             }).then((username)=>{
//                 console.log(username);
                
//             }).catch((error)=>{
//                 console.log(error);
                
//             }).finally(()=>{console.log("promise is either resolved or rejected");
//             })

// ---------------------------------------------

// const promiseFive=new Promise((resolve, reject) => {
//     setTimeout(() => {
        
//         let error =true
//         if (!error) {
//             resolve({username:"javascript",password:"123"})
//         }
//         else{
//             reject("ERROR: JS is wrong ")
//         }
//     }, 1000);
//     })
    // async function consumepromiseFive(){
        //     const response=await promiseFive
        //     console.log(response);
        
    // }
    // const consumepromiseFive = async () => {
    //     try {
    //         const response = await promiseFive;
    //         console.log(response);
    //     } catch (error) {
    //         console.log(error);
            
    //     }
    // };
    // consumepromiseFive()    

    // -------------------------------------or -------------------------------------
    // chaining
    // const username=promiseFive
    //         .then((user)=>{
    //             console.log(user)
    //             return user.username
    //         }).then((username)=>{
    //             console.log(username);
                
    //         }).catch((error)=>{
    //             console.log(error);
                
    //         }).finally(()=>{console.log("promise5 is either resolved or rejected");
    //         })


// --------------------try and catch format
    // const getAllUser = async()=>{
    //     try {
    //         const response=await fetch('https://jsonplaceholder.typicode.com/user')
    //         const data=await response.json()
    //         console.log(data); 
    //     } catch (error) {
    //         console.log("error",error);
            
    //     }  
    // }
    // getAllUser()

    // fetch('https://jsonplaceholder.typicode.com/user')
    // .then((Response)=>{
    //     return Response.json()
    // })
    // .catch((data)=>{
    //     console.log(data);

    // })


// --------------------------------------------LEACTURE 41--------------------------------
// FETCH






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