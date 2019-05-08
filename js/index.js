const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digits button');
const opers = document.querySelectorAll('.opers button');

digits.forEach(btn => btn.addEventListener('click', digitPressed));
opers.forEach(btn => btn.addEventListener('click', operPressed));

function digitPressed(e) {
    e.preventDefault();
    display.value += e.target.innerText;
    }

function operPressed(e) {
    e.preventDefault();
    display.value += e.target.innerText;
    }
    
    
// function isOperatorChar(str) {
//     return (str == '+' || str == '-' || str == '*' || str == '/')
// }
    
// function operPressed(e) {
//     e.preventDefault();
//     let lastChar = display.value.length - 1;
//     if (isOperatorChar(display.value.charAt(lastChar))) {
//         display.value = display.value;
//     }
//     else {
//         display.value += e.target.innerText;
//     }
// }

document.querySelector('.equal', ).addEventListener('click', equalPressed);

function equalPressed(e) {
    e.preventDefault();
    display.value = eval(display.value);
    }

const clearButton = document.createElement('clearButton');
clearButton.textContent = 'C';
clearButton.addEventListener('click', clearOnClick);

function clearOnClick(e) {
    e.preventDefault();
    display.value = '0';
    }

function equalPressed(e) {
        e.preventDefault();
        if (display.value === 'error') {
            return;
        }
        const parsedValue = parseFloat(eval(display.value));
        if (!display.value) {
            display.value = 0;
        }
        else if (!Number.isFinite(parsedValue) || Number.isNaN(parsedValue)) {
            display.value = 'error';
        }
        else {
            display.value = eval(display.value);
        }
    }
