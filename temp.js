
const degreeInput =document.querySelector("#degree");
const tempTypeSlect = document.querySelector("#temp-type");
const convertButton = document.querySelector("#convert-button");
const resultText = document.querySelector(".temp h3");

let result = degreeInput.value;

function convertTemperature(){
    const inputValue = parseFloat(degreeInput.value);
    if (tempTypeSlect.value === "fahrenheit"){
        result = (inputValue * 9) / 5 + 32;
        resultText.innerText = `Your Result is ${result.toFixed(2)} F`;
    }else if(tempTypeSlect.value ==="kelvin"){
        result = inputValue + 273.15;
        resultText.innerText = `Your Result is ${result.toFixed(2)} K`;
    }else{
        resultText.innerText = `Your Result is ${inputValue} °C`;
    }
}

function handleConversion(){
    const inputValue = parseFloat(degreeInput.value);
    if(!isNaN(inputValue)){
        convertTemperature();
    }else{
        resultText.innerText = "Please enter a valid Number";
    }
}

convertButton.addEventListener("click",handleConversion);