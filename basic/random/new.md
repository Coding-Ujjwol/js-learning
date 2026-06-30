## my name is ujjwol


tghiss is ti inform you that


``

function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();

counter(); 
counter(); 
counter(); 

``