var input = document.getElementById('input');
var output = document.getElementById('output');
var inputType = document.getElementById('inputType');
var outputType = document.getElementById('outputType');
var inpVal, opVal, inpTyp, opTyp;
inpVal = input.value;
opVal = output.value;
inpTyp = inputType.value;
opTyp = outputType.value;

input.addEventListener('keyup', inpkup);
input.addEventListener('change', inpkup);
inputType.addEventListener('change', inpkup);

function inpkup() {
    if (inputType.value == 'ft' && outputType.value == 'ft') {
        output.value = input.value;
    }
    if (inputType.value == 'ft' && outputType.value == 'in') {
        output.value = input.value * 12;
    }
    if (inputType.value == 'ft' && outputType.value == 'km') {
        output.value = input.value * 0.0003048;
    }
    // /////////
    if (inputType.value == 'in' && outputType.value == 'ft') {
        output.value = input.value * 0.08333333333;
    }
    if (inputType.value == 'in' && outputType.value == 'in') {
        output.value = input.value;
    }
    if (inputType.value == 'in' && outputType.value == 'km') {
        output.value = input.value * 0.0000254;
    }
    //////////////////
    if (inputType.value == 'km' && outputType.value == 'ft') {
        output.value = input.value * 3280.8399;
    }
    if (inputType.value == 'km' && outputType.value == 'in') {
        output.value = input.value * 39370.0787;
    }
    if (inputType.value == 'km' && outputType.value == 'km') {
        output.value = input.value;
    }
}


output.addEventListener('keyup', opkup);
output.addEventListener('change', opkup);
outputType.addEventListener('change', opkup);

function opkup() {
    if (inputType.value == 'ft' && outputType.value == 'ft') {
        input.value = output.value;
    }
    if (inputType.value == 'ft' && outputType.value == 'in') {
        input.value = output.value * 12;
    }
    if (inputType.value == 'ft' && outputType.value == 'km') {
        input.value = output.value * 0.0003048;
    }
    ///////////
    if (inputType.value == 'in' && outputType.value == 'ft') {
        input.value = output.value * 0.08333333333;
    }
    if (inputType.value == 'in' && outputType.value == 'in') {
        input.value = output.value;
    }
    if (inputType.value == 'in' && outputType.value == 'km') {
        input.value = output.value * 0.0000254;
    }
    //////////////////
    if (inputType.value == 'km' && outputType.value == 'ft') {
        input.value = output.value * 3280.8399;
    }
    if (inputType.value == 'km' && outputType.value == 'in') {
        input.value = output.value * 39370.0787;
    }
    if (inputType.value == 'km' && outputType.value == 'km') {
        input.value = output.value;
    }
}


