const inputs = document.querySelectorAll(".angle-input");
const outPutDiv = document.querySelector(".output-div");
const submitButton = document.querySelector(".submit-button");



function checkHypotenuse(){
    const a = Number(inputs[0].value);
    const b = Number(inputs[1].value);
    const sum_of_squares = a**2 + b**2 ;

    const hypotenuse = Math.sqrt(sum_of_squares);
    outPutDiv.innerText = ` Length of Hypotenuse is ${hypotenuse}`;

    console.log("hh");

    
}

submitButton.addEventListener("click",checkHypotenuse)
