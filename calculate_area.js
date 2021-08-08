const inputs = document.querySelectorAll(".angle-input");
const outPutDiv = document.querySelector(".output-div");
const submitButton = document.querySelector(".submit-button");

function calculateArea(){
    const base = Number(inputs[0].value);
    const height = Number(inputs[1].value);

    const area = (base*height)/2 ;

    outPutDiv.innerText = `Area of the Triangle is ${area}`;

}



submitButton.addEventListener("click",calculateArea);