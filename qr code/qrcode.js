// const url = document.getElementsByClassName('url');
// const img = document.getElementsByClassName('img');
// const qrbutton = document.getElementsByClassName('qrbutton');


// console.log(url,img, qrbutton);

// qrbutton.addEventListener('click', () => {

//     const inputValue = url.value;
//     console.log(inputValue)

//     if ( !inputValue ){
//         alert('please enter a valid URL');
//         return;
//     }else{
//         img.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
//         img.alt= `QR Code for ${inputValue}`;
//     }

// });


const url = document.querySelector(".url");
const img = document.querySelector(".img");
const qrbutton = document.querySelector(".qrbutton");

console.log(url, img, qrbutton);

qrbutton.addEventListener("click", () => {
  const inputValue = url.value.trim();
  console.log(inputValue);

  if (!inputValue) {
    alert("Please enter a valid URL");
    return;
  }

  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputValue)}`;
  img.alt = `QR Code for ${inputValue}`;
});


