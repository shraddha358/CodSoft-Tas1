let display = document.getElementById("display");
let currentInput = "";

function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

function appendInput(value) {
  currentInput += value;
  updateDisplay();
}

function calculate() {
  try {
    let result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
  } catch (error) {
    currentInput = "Error";
    updateDisplay();
  }
}

function updateDisplay() {
  display.innerText = currentInput;
}
