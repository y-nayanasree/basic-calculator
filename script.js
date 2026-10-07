
let currentNumber = "";
let previousNumber = "";
let selectedOperator = null;

const currentDisplay = document.getElementById("current");
const previousDisplay = document.getElementById("previous");

function appendNumber(number) {

    if (number === "." && currentNumber.includes(".")) {
        return;
    }

    if (number === "." && currentNumber === "") {
        currentNumber = "0";
    }

    currentNumber += number;

    updateDisplay();
}


function chooseOperator(operator) {

    if (currentNumber === "" && previousNumber === "") {
        return;
    }

    if (currentNumber === "" && previousNumber !== "") {
        selectedOperator = operator;
        updateDisplay();
        return;
    }

    if (previousNumber !== "" && selectedOperator !== null) {
        calculate();
    }

    selectedOperator = operator;
    previousNumber = currentNumber;
    currentNumber = "";

    updateDisplay();
}


function calculate() {

    if (
        previousNumber === "" ||
        currentNumber === "" ||
        selectedOperator === null
    ) {
        return;
    }

    const firstNumber = parseFloat(previousNumber);
    const secondNumber = parseFloat(currentNumber);

    let result;

    switch (selectedOperator) {

        case "+":
            result = firstNumber + secondNumber;
            break;

        case "-":
            result = firstNumber - secondNumber;
            break;

        case "*":
            result = firstNumber * secondNumber;
            break;

        case "/":

            if (secondNumber === 0) {
                currentDisplay.textContent = "Cannot divide by 0";
                previousDisplay.textContent = "";

                currentNumber = "";
                previousNumber = "";
                selectedOperator = null;

                return;
            }

            result = firstNumber / secondNumber;
            break;

        case "%":

            if (secondNumber === 0) {
                currentDisplay.textContent = "Cannot divide by 0";
                previousDisplay.textContent = "";

                currentNumber = "";
                previousNumber = "";
                selectedOperator = null;

                return;
            }

            result = firstNumber % secondNumber;
            break;

        default:
            return;
    }

    currentNumber = Number(result.toFixed(10)).toString();

    previousNumber = "";
    selectedOperator = null;

    updateDisplay();
}


function clearDisplay() {

    currentNumber = "";
    previousNumber = "";
    selectedOperator = null;

    currentDisplay.textContent = "0";
    previousDisplay.textContent = "";
}


function deleteNumber() {

    currentNumber = currentNumber.slice(0, -1);

    updateDisplay();
}


function updateDisplay() {

    currentDisplay.textContent = currentNumber || "0";

    if (previousNumber && selectedOperator) {

        previousDisplay.textContent =
            `${previousNumber} ${getOperatorSymbol(selectedOperator)}`;

    } else {

        previousDisplay.textContent = "";
    }
}


function getOperatorSymbol(operator) {

    const symbols = {
        "+": "+",
        "-": "−",
        "*": "×",
        "/": "÷",
        "%": "%"
    };

    return symbols[operator] || operator;
}


// Keyboard support

document.addEventListener("keydown", function (event) {

    const key = event.key;

    if ((key >= "0" && key <= "9") || key === ".") {
        appendNumber(key);
    }

    else if (key === "+") {
        chooseOperator("+");
    }

    else if (key === "-") {
        chooseOperator("-");
    }

    else if (key === "*") {
        chooseOperator("*");
    }

    else if (key === "/") {
        chooseOperator("/");
    }

    else if (key === "%") {
        chooseOperator("%");
    }

    else if (key === "Enter" || key === "=") {
        calculate();
    }

    else if (key === "Backspace") {
        deleteNumber();
    }

    else if (key === "Escape" || key === "Delete") {
        clearDisplay();
    }

});
