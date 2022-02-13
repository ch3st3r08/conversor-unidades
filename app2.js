var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue, resultTypeValue;

//agregamos un listener
input.addEventListener("keyup", myResult);
inputType.addEventListener("change",myResult);
inputType.addEventListener("change",myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;
function myResult(){
    //ahora comparamos y agregamos formula
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if(inputTypeValue === "metros" && resultTypeValue==="kilometros"){
        //Esta formula es de metros a kilometros
        result.value = Number(input.value) = 0.001;
    }else if(inputTypeValue === "metros" && resultTypeValue==="centimetros"){
        //esta es la formula de metros a centimetros
        result.value = Number(input.value) = 100;
    }else if(inputTypeValue === "metros" && resultTypeValue==="metros"){
        //esta es la formula de metros a metros
        result.value = input.value
    }

    if(inputTypeValue === "kilometros" && resultTypeValue==="kilometros"){
        //Esta formula es de kilometros a kilometros
        result.value = Number(input.value) = 1000;
    }else if(inputTypeValue === "kilometros" && resultTypeValue==="centimetros"){
        //esta es la formula de kilometros a centimetros
        result.value = Number(input.value) = 100000;
    }else if(inputTypeValue === "kilometros" && resultTypeValue==="metros"){
        //esta es la formula de kilometros a metros
        result.value = input.value
    }
    if(inputTypeValue === "centimetros" && resultTypeValue==="kilometros"){
        //Esta formula es de centimetros a kilometros
        result.value = Number(input.value) = 0.00001;
    }else if(inputTypeValue === "centimetros" && resultTypeValue==="centimetros"){
        //esta es la formula de centimetros a centimetros
        result.value = Number(input.value) = 0.01;
    }else if(inputTypeValue === "centimetros" && resultTypeValue==="metros"){
        //esta es la formula de centimetros a metros
        result.value = input.value
    }

};