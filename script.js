let display = document.getElementById("display");
let currentInput = '';
let previousInput = '';
let operator = '';

function appendNumber(number) {
  if (currentInput.length < 10) {
    currentInput += number;
    display.innerText = currentInput;
  }
}

function appendOperator(op) {
  if (currentInput !== '') {
    operator = op;
    previousInput = currentInput;
    currentInput = '';
  }
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  display.innerText = '0';
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  display.innerText = currentInput || '0';
}

function appendDot() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    display.innerText = currentInput;
  }
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = '';
  display.innerText = currentInput;
}
