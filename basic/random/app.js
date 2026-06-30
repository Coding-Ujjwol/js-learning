// // const account = 14455
// // let email = "uupreti29@gmail.com"
// // var password = "9849522272"
// // accountCity =  "kathmandu"

// // console.table([account, email, password, accountCity])

// "use strict"; //treat all JS code as newer version

// // alert("Hello World"); we are using nodejs, not browser

//  let score = 33
//  console.log(typeof score);
//  console.log(typeof (score));

// const name = "hutesh";
// const repoCount = 40:

// // console.log(name + repoCount + "value"); not use

// console.log(`Hello my name is  ${name} and me repo count is ${repoCount}`);  --use

// const balance = new Number(100)
// console.log(balance);

// const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-NP'));

// ++++++++++++ Maths ++++++++++++++++++

// console.log((Math.random()*10) + 1);

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

/*const time = new Date();0
console.log(time.toString());
console.log(time.toDateString());
console.log(time.toISOString());
console.log(time.toJSON());
console.log(time.toLocaleDateString());
console.log(time.toLocaleString());
console.log(time.toLocaleTimeString());
console.log(time.toTimeString());
console.log(time.toUTCString());
console.log(time.getTimezoneOffset());
console.log(typeof time);

Fri Apr 03 2026 20:54:17 GMT-0700 (Pacific Daylight Time)
Fri Apr 03 2026
2026-04-04T03:54:17.249Z
2026-04-04T03:54:17.249Z
4/3/2026
4/3/2026, 8:54:17 PM
8:54:17 PM
20:54:17 GMT-0700 (Pacific Daylight Time)
Sat, 04 Apr 2026 03:54:17 GMT
420
object*/

// let myCreatedDate = new Date("01-14-2023")
// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.round(Date.now()/1000));

// let newDate = new Date()

// console.log(newDate.getMonth());

// Array

const myArr = [0, 1, 2, 3, 4, 5, true, "hello"];
const myHeros = ["shaktiman", "ironman"];
const myArr2 = new Array(1, 2, 3, 4);

// console.log(myArr[0]);

// Array methods

// myArr.push(6)
// console.log(myArr);

// myArr.push(6)
// myArr.unshift(9)
// myArr.shift()
// myArr.pop()
// console.log(myArr.includes("hello"));
// console.log(myArr.indexOf("8"));
// console.log(myArr);

// slice and splice

// objects ----singleton------------object literals

const myKey = Symbol("key1");
const JsUsre = {
  name: "Ujjwol",
  [myKey]: "key33", //not use--it will run as string-- myKey: "key33"
  age: 18,
  location: "kathmandu",
  email: "uupreti29@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["monday", "saturday"],
};

// console.log(JsUsre.email)
// console.log(JsUsre["email"])
// console.log(JsUsre)

// JsUsre.greeting = function(){
//     console.log(`Hello JS user, ${this.name}`);

// }

// console.log(JsUsre.greeting());

const course = {
  coursename: "js in hindi",
  price: "1000",
  couresInstructor: "ujjwol",
};

// course.couresInstructor

// const {coursename} = course
// console.log(coursename);

//---------functions--------

//   function addTowNumbers(number1 , number2){
//     console.log(number1 + number2);
//   }
//   function addTowNumbers(number1 , number2){
//     console.log(number1 + number2);
//   }

// addTowNumbers(3, 4)

// for of

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//   console.log(num);

// }

// const greetings = "hello world"

// for (const greet of greetings) {
//   console.log(`Each char is ${greet}`)
// }

for (let index = 1; index <= 10; index++) {
  /*index++ = index = index = 1*/
  // console.log(`loop = ${index}`);
} 

// --------- for loop ------------
// for (let index = 3; index <= 20; index = index + 2) {
//   /*index++ = index = index = 1*/

//   if (index == 10) {
//     console.log(`${index} detected!`);
//     break;
//   } else {
//     console.log(`${index} has bypassed`);
    
//   }

//    console.log(`loop = ${index}`);

// }

// --------- simple voting code---------
/*
function vote(num) {
    if (num >= 18) {
        console.log(`${num}-you are eligible for voting`); 
    }else{
        console.log(`${num} -you can,t vote`);
        
    }
}

vote(20) */

const games = ["coc", "heyday", "green farm", "free fire",
   { "bus": "nepali yatayat",
        "taxi": "tata",
        "bike" : "phatao"
    }
];
// console.log(games.length);
// console.log(games);

// const single = games[4].
// console.log(single);


// console.log(`Best game of the year = ${single}`);

(function() { /* code */ })(); /*IIFE- Immediately Invoked Function Expression (IIFE)*/


const arr = [ 1,2 , 3, 4, 5,]


for (const num of arr) {
 // console.log(num);
  
}  


const  greetings = "hello world!"
for (const greet of greetings) {
 // console.log(`each character is ${greet}`);  
}

//maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('FR', "France")

//console.log(map);

for (const [key,value] of map) {
 //console.log( key,value);
}

// const myObject = {
//   'game1':'Nfs',
//   'game2':'spiderman'
// }

// for (const [key,value] of myObject) {
//   console.log( key,value);
// }

//----- for in loop with object -------

const myObject = {
  js:'javaScript',
  cpp:'c++',
  rb:'ruby',
  swift:'swift by apple'
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ["js", "rb", "py","rb"]

for (const key in programming) {
  // console.log(programming[key]);
  
}
//----with curly bracket and scope--------
const myNumber =  [1, 2, 3, 4 , 5, 6, 7 ,8 ,9 ,10]

const myNum = myNumber.map ( (num) => {return num * 10} )

// console.log(myNum);
//------ with prant thesis () -------
const mynum = myNumber.map ( (num) => num * 10 )

// console.log(myNum);

const soot = [1, 2, 3, 4, 5, 6 , 7, 8 ,9 ,0];

//-------DOM -------------



