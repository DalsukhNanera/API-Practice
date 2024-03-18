// // var a = 190 ;
// // var a = "tony stark";
// // var a = 240;
// // var a = 330;

// {
//      a = 445 ;
// }
// a = 223 ;
// console.log(a);
// let a = 5 ;
// let obj = {
//      fullname : "dalsukh",
//      std: 12 ,
//      blood: "bPositive"
// };
// console.log(a == obj);
// let b = 10 ;
// if(a === 19)
// {
// console.log("ok");
// }

// if( b === 10)
// {
//      console.log("b is ok")
// }

// else{
//      console.log("last ok")
// }

// let a = true ; 
// switch(a)
// {
//   case true: 
//   console.log("this is not ok");
//   break;

//   case  false:
//     console.log("this is less than 4");
//     break;

//   case 48:
//     console.log("abcd is ok");

//   case  a == 4 :
//         console.log("this is 4");
//   break;

//   default:
//     console.log("this is default case");

// }

//  a = 43 ;
// var a  ;
// console.log(a);

// let a = 45 ;
// let b = true;
// console.log(a%b);

// let a = 5 ;
// let b = "5";

// console.log(a == b);

// let a = 55 ;

// if( a > 50)
// {
//     console.log("a is greater than 50");
// }

// else if( a < 53)
// {
//     console.log("i am doing nothing");
// }

// if(a < 3){
//     console.log("i am doing if lese checking");
// }

// else{
//     console.log("a is not greater than 50");
// }

//alert("hello dalsukh");
// let name = prompt("whats your name");
// console.log("hello",name);


// let a = null;
// let b = 5 ;
// let c = b / a ;
// console.log(c);
// if( num % 5 === 0)
// {
//     console.log("nuber is multiple of 5");
// }
// else{
//     console.log("not");
// }

// for(let i = 1 ; i <=5 ; i++)
// {
//     console.log("coding guru");
// }


// console.log("me hu");
// console.log("me hu");
// console.log("me hu");

// let i = 0 ;
// do{
//     console.log(i);
//     i++;
// } while(i <= 5);

// let str = "dalsukh";
// for(let i of str)
// {
//  console.log(i);
// }

// const obj = 
// { a: 1,
//   b: 2,
//   displayType(a) {
//     // Method which will display type of Animal
//     console.log("i am in the function");
//   },

// };



//   obj.c = 3 ;
//   obj.c = 3 ;
//   obj.c = 3 ;

//   for (const prop in obj) {
//     console.log(`obj.${prop} = ${obj[prop]}`);
//     obj.c = 3;
//   }

// Logs:
// obj.a = 1
// obj.a = 1
// obj.b = 2

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   sayHello: function(t) {
//     console.log("Hello!");
//   }
// };

// for (let key in obj) {
//   if(obj.hasOwnProperty(key)){
//   console.log(key, obj[key]);
//   }
// }

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHello() {
//     console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
//   }
// }

// let personObj = new Person("John", 25);

// for (let key in personObj) {
//   // Check if the property is a direct property of the object (not inherited)

//     console.log(key, personObj[key]);

// }

// let myObject = {
//   property1: "value1",
//   property2: "value2",
//   myMethod() {
//     console.log("This is a method!");
//   },
// };

// // Accessing properties
// console.log(myObject.property1); // Output: value1
// console.log(myObject.property2); // Output: value2

// // Calling the method
// myObject.myMethod(); // Output: This is a method!

// for (let key in myObject) {
//     // Check if the property is a direct property of the object (not inherited)
//     if (myObject.hasOwnProperty(key)) {
//       console.log(key, myObject[key]);
//     }
//    }

// let myArray = [1, 2, 3];
// // myArray.customProperty = "Custom Value";

// // Using for...in to iterate over array indices and properties
// for (let index in myArray) {
//   console.log(index, myArray[index]);
// }

// Object.prototype.dalsukh = "Prototype Property";

// let myObject = {
//   propertyName: "Own Property"
// };

// for (let key in myObject) {
//    if(myObject.hasOwnProperty(key))
//     console.log(myObject[key]); // Output: Own Property

// }

//Function constructor for creating an object
// function createPerson(name, age) {
//   // Create an empty object
//   let person = {};

//   // Assign properties to the object
//   person.name = name;
//   person.age = age;

//   // Add a method to the object
//   person.sayHello = function() {
//     console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
//   };

//   // Return the created object
//   return person;
// }

// // Create an instance of the object using the constructor function
// let myObject = createPerson("John", 25);

// for (let key in myObject) {
//      if(myObject.hasOwnProperty(key))
//       console.log(myObject[key]);

//   }

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.sayHello = function() {
//   console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
// };

// let personObj = new Person("John", 25);

// for (let key in personObj) {

//        console.log(personObj[key]);
// }

// let a = 45 ;
// let input = prompt("gues a number");
// while(input != a)
// {
//   if(input > a)
//   {
//    input =  prompt("number is less than this number enter new number");
//   }

//   else{
//    input =  prompt("number is greater than this number enter a new number");
//   }
// }
// alert("you did it ",a ,"is the right answer");

// let str = "dalsukh\nnanera";
// console.log(str);
// console.log(typeof(str));
// console.log(str.length);

// console.log(`dalsukh\nnanera`);

// let str = "naneradalsukh";
// let smr = str.replace("karathiya","karena");
// console.log(smr);

// let input = prompt("enter your name");

// let ans = `@${input}${input.length}`;
// alert(ans);

// let marvel_heroes = ["blumburg", "microsoft", "uber", "google", "IBM", "netflix" ];

//  marvel_heroes.splice();
//marvel_heroes.length = 3;
// console.log(Object.keys(marvel_heroes));
// console.log("sab badiya hai koi nai");
// console.log("abhi kuchh problem nahi hai");
// console.log(marvel_heroes[5]);
// let newhero = marvel_heroes.slice(14,2);
//console.log(marvel_heroes.toString());

// let num = [1,2,3,4,5,6];
// num.splice(2,0,'9');
// console.log(num);
// console.log("everything is ok");
// function sum(num1,num2){
//     console.log(num2);
//      console.log(num1*num2);
//     //return num1 * num2 ;
// }

// sum(1,2,3,12);

// let sum = (a,b) => {
//   console.log(this);   
// }

// function multi(a,b)
// {
//     console.log(this);
// }
// multi(5,7);

// const sayHello = name => {
//     console.log("greeting" + " " + name)
//     console.log("hi")
//   }

//   const x = {
//     name: "Harry",
//     role: "Js Developer",
//     exp: 30,
//     show: function() {
//       // let that = this
//       // console.log(this)
//       setTimeout(() =>  {
//         console.log(`The name is ${this.name}\nThe role is ${this.role}`)
//       }, 2000)
//     }
//   }
//   //sayHello("Harry", "Good Afternoon")
//   // console.log(x.name, x.exp)
//     x.show()

// function nothing()
// {
//  console.log("sab badiya hai traditional me ",this.name);

// }

// class Person {
//   constructor(name, age) {
//       this.name = name;
//       this.age = age;
//       this.startAging();
//   }

//   startAging() {
//       // Traditional function thi parent vala object ne derive nahi kare traditionally this ne bind karvu padse 
//     function ok()
//     {
//       console.log(this);
//       console.log("sab changa");
//     }
//     let a = ok();
//     console.log(a);

//     // arrow function thi parent vala this ne derive kari le 
//     // let ok = () => {
//     //   console.log(this.name);
//     // }
//     // ok();
//       //Arrow function with lexical 'this'
//       setInterval(function () {

//           console.log('Arrow Function:', this, 'is', this.age, 'years old.');
//       }, 1000);
//   }
// }

// const john = new Person('John', 30);

// function tree()
// {
//   console.log("this is ok with this ");
//   console.log(this);

//   function tree2()
//   {
//     console.log("this is not ok");
//     console.log(this);
//   }
//   tree2();
// }
// tree();

// let ok = () => {
//   console.log("this is ok with this");
//   console.log(this);
// }

// //ok();

// function func1()
// {
//   console.log("this is new function");

// }

// func1();

// function sum(a,b)
// {
//   console.log(a+b);
// }

// let ok = sum ;
// sum(2,3);

//let func = (num,index,ok) => console.log(num,index,ok);

// let arr = [5,10,15,20,25];

// arr.forEach(function ok() {
//     console.log("ok chhe");
// });

// arr.forEach((val) => {
//     console.log(val);
// });

// arr.forEach(function nothing(val){
//     console.log(val);
// });

// arr.forEach((_) =>{
// console.log("nathi bhai");
// });

// arr.forEach(func1 );

//  let newarr1 = arr.filter((val,index,arr) => {
//     console.log(val,index,arr);
//     // if(val === 5 )
//     // return false ;

//     // else return true;
// });
//   console.log(newarr1);

//console.log(arr);

// let arrnew = arr.map((e) => {
//     console.log("this is not ok with this");
//     return e * e ;
// });
// console.log(arrnew);

// let newarr = arr.map((el,i) => {
//     console.log("nothing is happen");
// });
// console.log(newarr);


// let obj = {
//     name : "dalsukh",
//     std:"college",
//     rollno: 43,
//     length:4,

// }
// // let newarr = Array.prototype.map.call(obj, (x) => x ** 2);
// // console.log(newarr);

// let arrobj = [1,2,3, ,5];
// console.log(arrobj);

// let newonearr = arrobj.map((e,i) => {
//     console.log(i,"this is very heavy");
//     return e*e ;
// })

// const kvArray = [
//     { key: 1, value: 10 , pass:"yes" },
//     { key: 2, value: 20 , pass:"no"},
//     { key: 3, value: 30 ,pass:"medium"},
//   ];

//   //const reformattedArray = kvArray.map((obj) => ({ [key]: value }));
//   let newarr = kvArray.map((obj) => {
//        return {[obj.key] : obj.value, "nothing":"nathi"};
//   });

//   let newonearr = kvArray.map(({key,pass,value},i) => {
//     return {[pass]:key, [value]:key};
//   });

// //   console.log(newarr); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
// //   console.log(kvArray);
// console.log(newonearr);

// let arrok = [1,2,3,,5];

// let okarr = arrok.filter((value,index)=>{
//     console.log(index);
//     return true ;
// });

// let obj = {
//         1 : "dalsukh",
//         2:"college",
//         3: 2,
//         4:4,  
//     }

//    let newcd = Array.prototype.map.call(obj,(el) => {
//             return el*el;
//     });

//     console.log(newcd);

// let something = Object.values(obj);
// console.log(something);

//let arr = [5,10,15,20,25];

// console.log(Object.keys(arr));

// let str = new String();
// //str = "dalsukh";
// console.log(str);

// console.log(document.body);

//div.class = "nothing";
//div.style.backgroundColor = "red";   
// let div = document.querySelector("div");
// let nothing = document.querySelector("h1");
// let att = div.getAttributeNames();
// let ok = div.classList;
// console.log(ok);
// let anotherOk = div.className;
// console.log(anotherOk);
// console.log(div.style);
// let aa = div.getAttribute()
// console.log(aa);

// let newel = document.createElement("h1");
// newel.innerHTML = "<i> appended text </i>";
// let el = document.querySelector("#h1kiid");
// el.prepend(newel);
// el.remove();

// let newbtn = document.createElement("button");
// newbtn.innerText = "Click me";
// newbtn.style = "background-color:blue";
// let el = document.querySelector("body");
// el.prepend(newbtn);

//console.log(document.querySelector("div").outerHTML);
//let el = document.querySelector("div");
// console.log(el.classList);
// console.log(el.innerText);

// console.log(el.attributes); 
// console.log(el.className)
// console.log(el.classList)

// let el = document.querySelector("div");

// console.log(el.getAttribute("class"));
// console.log(el.classList);
// el.classList.remove("myClass");
// console.log(el.classList);
// el.classList


//let el2 = document.querySelector("#seconddiv");
// console.log(el.classList)
// el.className = "second class ji";
// el.className = "second class ok";
// console.log(el.className)
// let el2 = document.querySelector("div");
// el2.classList.forEach( classname => {
//     el.classList.add(classname);
// })

// let el = document.querySelector("div");
// classnames = el.classList ;
// let arr = Array.from(classnames);
// console.log(arr);
// arr.forEach(classname => {
//    el2.classList.add(classname);
// })

// let el = document.querySelector("div");

// if(el.hasAttributes)
// {
//     console.log("oj ji")
// }

// console.log(el.childNodes)

// let el = document.querySelector("div");
// let newel = document.createElement("h1");
// let onenmore = document.createElement("h1");
// newel.innerText = "i am first";
// onenmore.innerText = "i am second";
// el.appendChild(newel,onenmore);

// let btn = document.querySelector("#btnId");

// btn.onclick =  function ()
// {
//     console.log("button was clicked by another function");
// } 

// btn.addEventListener("click",(e) => {

//     if(e.target.style.backgroundColor = 'white')
//     {
//         e.target.style.backgroundColor = 'red' ;
//     }
//     else{

//         e.target.style.backgroundColor = 'red';
//     }

//     ;
// })

// function nothing()
// {
//     console.log("button was clicked by another function");
// } 


//const btn = document.querySelector("#btnId");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// btn.addEventListener("click", (e) => {

//   const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;

// console.log(e.key);
// });

// const textBox = document.querySelector("#textBox");
// const output = document.querySelector("#output");
// btn.addEventListener("keydown", (event) => {
//   output.textContent = `You pressed "${event.key}".`;
// });

// textBox.addEventListener("click",() =>{

//     console.log("this is textbox keypress");
// })

// function returndata(data, func) {
//     setTimeout(() => {
//         console.log(data);
//         if (func) {
//             func();
//         }
//     }, 2000);


// };

// returndata(1,
//     () => returndata(2,
//         () => returndata(3,
//             () => {
//                 returndata(4);
//             }
//         )));

// let promise = new Promise((resolve,reject) =>
// {

//     setTimeout(() => {
//         resolve("something"); 
//     }, 3000);
    
// })

// let promise1 = new Promise((resolve,reject) =>
// {

//     setTimeout(() => {
//         resolve("something1"); 
//     }, 3000);
    
// })

// promise.then((res)=> {
// console.log("this is first");
// promise1.then(()=> {
//     console.log("after some time");
// });

// }) ;



// function returndata(data) {
//    return new Promise((resolve,reject)=> {
    
//     setTimeout(() => {
//          console.log(data);
//        resolve(data);
//     }, 5000);
//    }) 
// };

 async function returndata(data) {
   return new Promise((resolve,reject)=> {
    
    setTimeout(() => {
       resolve(data);
    }, 5000);
   }) 
};


let b = returndata(2);

// returndata(1).then((res)=>{
//    console.log(res);
// })

// returndata(1).then((res)=> {

//     console.log(res);
//     returndata(2).then((res)=>{
//         console.log(res);
//         returndata(3).then((res)=>{
//             console.log(res);
//         })
//     })
// })

// returndata(1).then((res)=> {
//    console.log("something is here please execute this"); 
// }).catch((err)=>{
//    console.log(err);
// })

//  let pp = returndata(1).catch((err)=>{
//    console.log(err);
// });
//console.log(pp);

//  console.log("main in sab se pare hu ");

// async function getdata()
// {
//     let pk = await returndata(1);
//     console.log("Result from first call:", pk);
//     let ok = await returndata(2);
//     console.log("Result from first call:", ok);

// }

// getdata();

// let p = new Promise((resolve,reject)=> {
//     reject("this");
// })



// let p = new Promise((resolve, reject) => {
//    reject("this");
// });

// p.catch((err)=>{
//    console.log(err);
// })

// function returndata(data) {
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            console.log(data);
//            resolve(data);
//        }, 1000); // Reduced the timeout to 1000 milliseconds for demonstration purposes
//    });
// }

// async function getdata() {
//    let pk = await returndata(1);
//     console.log(pk);
//    console.log("this is first");
//    let ok = await returndata(2);
//    console.log(ok);
//    console.log("this is second");
// }



// getdata();


// async function example() {
//    const result = await someNonPromiseFunction();
//    console.log(result);
// }

// function someNonPromiseFunction() {
//    console.log("Hello, world!") ;
// }

// example();














