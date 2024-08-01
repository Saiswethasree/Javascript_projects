const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

let num = document.getElementById("valueschange")

const form = document.getElementById("form");

const field = document.getElementById("text")

const sub = document.getElementById("btn")

const scorecard = document.getElementById("score")

let score = JSON.parse(localStorage.getItem("score"));

if(!score)
    {
        score=0;
    }

scorecard.innerText = `score : ${score}`

num.innerText = `The value of ${num1} multiplied by ${num2} ?`

const mul = num1*num2;

sub.addEventListener("submit",()=>{
    const result = parseInt(field.value)
    console.log(result);
    if(result === mul)
    {
        score++;
        updatelocalstorage();
    }
    else{
        score--;
        updatelocalstorage();
    }
 })

 function updatelocalstorage(){
    localStorage.setItem("score",JSON.stringify(score))
 }