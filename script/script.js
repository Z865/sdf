function addValue(){
    // get the operands value

    // parse to integer. You can use: parseInt(input, 10);

    // perform operation

    // creating the text output

    // (if you want to check) print out in console

    // change the text area
    var inputA = document.getElementById('input_a').value;
    var inputB = document.getElementById('input_b').value;

    var operandA = parseInt(inputA, 10);
    var operandB = parseInt(inputB, 10);

    var result = operandA + operandB;

    var text = operandA + '+' + operandB + '=' + result;


    document.mycalculator.output.value = text;
}


function mulValue(){
    var inputA = document.getElementById('input_a').value;
    var inputB = document.getElementById('input_b').value;

    var operandA = parseInt(inputA, 10);
    var operandB = parseInt(inputB, 10);

    var result = operandA * operandB;

    var text = operandA + '*' + operandB + '=' + result;
    document.mycalculator.output.value = text;
}

function divValue(){
    var inputA = document.getElementById('input_a').value;
    var inputB = document.getElementById('input_b').value;

    var operandA = parseInt(inputA, 10);
    var operandB = parseInt(inputB, 10);

    var result = operandA / operandB;

    var text = operandA + '/' + operandB + '=' + result;
    document.mycalculator.output.value = text;
}
