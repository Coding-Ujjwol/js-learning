const questions = [
    {
        'que':"which of the following is a markup language?",
        'a':"HTML",
        'b':"CSS",
        'c':"JavaScript",
        'd':"PHP",
        'correct':"a"
    },
    {
        'que':"which of the following is a markup language?",
        'a':"HTML",
        'b':"CSS",
        'c':"JavaScript",
        'd':"PHP",
        'correct':"b"
    },
    {
        'que':"which of the following is a markup language?",
        'a':"HTML",
        'b':"CSS",
        'c':"JavaScript",
        'd':"PHP",
        'correct':"d"
    }
]

let index = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () =>{
    const data = questions[index]
    console.log(data);
    quesBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const ans = getAnswer()
}

loadQuestion()