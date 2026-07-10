

// localStorage.setItem('name','ujjwol');
// localStorage.clear()
// let data = {
//     "name":"Ujjwol",
//     "age ":"21",
//     "email":"uupreti28@gmail.com",
//     "image":"https://images.unsplash.com/photo-1783519157779-afeafb41fe74?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// }

// localStorage.setItem('userData',JSON.stringify(data));
// let num = localStorage.getItem('userData')
// let name = JSON.parse(num)




// let body = document.querySelector("body")



// let arr = [1,2,3,4,5];
// let obj ={
//     name : "Ujjwol",
//     age : 12
// }//not iterable
// let name = "ujjwol"
// let num = 123456//not iterable


// let [a,b,c,d,e]=arr

//desturing with rest operator

// let [a,b,c,...rest]=arr;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(rest);


//defult values

// let [a,b,c,d=0]= [5,10,17]

// let [,b,,,e]=[1,2,3,4,5]

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

//value swap
// let a = 5;b = 10;
// [a,b]=[b,a]
// console.log(a,b);


//nested array

// let [a,,,[x,y]]=[1,2,3,[5,6]];

// console.log(a);
// console.log(x,y);

// let arr2 = [1,2,3,[4,5,[6,7,8,[9,10]]]];

// console.log(arr2.flat(Infinity));


//destructing object

//basic destructing

// let obj2 = {
//     name : 'ujjwol',
//     age : 22,
// }

// let {name,age} = obj2;
// console.log(name);
// console.log(age);

// let obj2 = {
//     name : 'ujjwol',
//     age : 22,
//     city : "Kathmandu",
//     isMarried : false,
// }

// let {name,age,city,isMarried} = obj2;

// console.log(name,age,city,isMarried);

// let {name,age, ...others} = obj2;

// console.log(name,age,others);
 
// way to change name in object destructing= name:fullName  

// let {name:fullName, age=18} = {
//     name : 'Ujjwol Upreti',
//     age : 22,
// }

// console.log(fullName,age);

let obj3 = { 
    name : "Ujjwol Upreti",
    age : 22,
    address : {
        city : "Kathmandu",
        pincode:4600,
        arr : [1,2,3,4,5]
    }
}

let {name:fullName,age,address:{city},address:{pincode},address:{arr}} = obj3

console.log(fullName,age,city,pincode,arr);
