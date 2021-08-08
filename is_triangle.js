const inputs = document.querySelectorAll(".angle-input");
const outPutDiv = document.querySelector(".output-div");
const submitButton = document.querySelector(".submit-button");

function calculateAngles(angle1,angle2,angle3){
    const sum_of_angles = angle1 + angle2 + angle3;
    
    return sum_of_angles;
}

function isTrinagle(){
    


    const total_angle = calculateAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));

    if(total_angle == 180){
        outPutDiv.innerHTML= "Yes, these angles can form a triangle";
    }else{
        outPutDiv.innerHTML="The given Angles won't be ablle to make a Triangle";
    }
    
}

submitButton.addEventListener("click",isTrinagle)
