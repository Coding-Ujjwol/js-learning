
// document.addEventListener('DOMContentLoaded', () => {
//     const heading = document.querySelector('h1');
//     heading.textContent = 'Discount Calculator';
// }); 

// let amount = document.querySelector("#price").value
// let discount = document.querySelector("#discount").value
// let show = document.querySelector("#show")
// console.log(amount);

// // amount.addEventListener("input",() => {
// //     let price = amount.value

// //     let heading = document.querySelector("h1")
// //     heading.innerHTML= price;
// // })


// let calculate = document.querySelector("#calculate")

// calculate.addEventListener("click",function(){

// })

let amount = document.querySelector("#price")
let discount = document.querySelector("#discount")
let calculator = document.querySelector("#calculate")
let display = document.querySelector("#show")



calculator.addEventListener("click",() =>{
    const price = amount.value
    const rate =  discount.value
    if(price.trim() === ""){
        display.innerHTML = "Please enter something"
    }
    else{
        const total = price + rate
        display.innerHTML = (`Sum of ${price} +${rate} =${total}`)
        
        setTimeout(() => {
            display.innerHTML= ""
        }, 4000);
    }
    
})



