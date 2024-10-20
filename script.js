let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    if (display.value === '0' && number !== '.') {
        display.value = number;
    } else {
        display.value += number;
    }
}

function appendOperator(op) {
    previousInput = display.value;
    operator = op;
    display.value = '';
}

function clearDisplay() {
    display.value = '0';
    currentInput = '';
    previousInput = '';
    operator = '';
}

function negate() {
    display.value = display.value.startsWith('-') ? display.value.slice(1) : '-' + display.value;
}

function calculate() {
    currentInput = display.value;
    let result;

    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
        case '%':
            result = parseFloat(previousInput) % parseFloat(currentInput);
            break;
    }

    display.value = result;
    operator = '';
}

