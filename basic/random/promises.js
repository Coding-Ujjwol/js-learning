const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    //db calls, cryptography,network
    setTimeout(function(){
        console.log('async task is completed')
        resolve()
    },1000);
})

promiseOne.then(function(){
    console.log("promise consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
        
    },1000)
}).then(function(){
    console.log("promise 2 recived");
    
})

const promisethree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email: "chai@example.com"})
    },1000)
})

promisethree.then(function(user){
    console.log(user)
})
 

const promiseFour = new Promise(function(resolve, reject){
    setTimeout=(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        }else{
            reject("ERROR: Something went wrong")
        }
    },1000)
    
})

 promiseFour.then((user) => {
    console.log(user);
    return user.username  
}).then(() => {

})


