const quizForm = document.querySelector(".quiz-form");
const outputDiv = document.querySelector(".output-div");
const submitButton = document.querySelector(".submit-button");

const correctAnswers = ["Yes", "No"];

function checkResponse(){
    const formResults = new FormData(quizForm);
    // console.log( typeof formResults.entries);   function it is
    // console.log( typeof formResults.entries());   object it is

    let score = 0;
    let index = 0;
    for(let answer of formResults.values()){
        console.log(answer,correctAnswers[index]);
        if(answer ===  correctAnswers[index]){
            score = score +1
        }
        index = index + 1;
    }
    console.log(score);
    // outputDiv.innertText = ` fff${score}`;
    outputDiv.innerText = `Your Score is ${score}`;

    
     
}

submitButton.addEventListener("click",checkResponse);
