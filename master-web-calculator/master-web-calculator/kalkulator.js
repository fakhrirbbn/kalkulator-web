document.addEventListener('DOMContentLoaded', function () {
  // Select the display element
  const display = document.getElementById('displayNumber');

  // Initialize the current operand and operator
  let currentOperand = '';
  let currentOperator = '';
  let result = null;

  // Function to update the display with the current operand
  function updateDisplay() {
    display.textContent = currentOperand || '0';
  }

  // Function to handle number button clicks
  function handleNumberClick(number) {
    if (currentOperand === '0' || currentOperand === '-0') {
      currentOperand = number;
    } else {
      currentOperand += number;
    }
    updateDisplay();
  }

  // Function to handle operator button clicks
  function handleOperatorClick(operator) {
    if (currentOperator) {
      // If there's a pending operator, calculate the result first
      calculateResult();
    }
    currentOperator = operator;
    result = parseFloat(currentOperand);
    currentOperand = '';
    updateDisplay();
  }

  // Function to handle the equal button click
  function handleEqualClick() {
    calculateResult();
    currentOperator = '';
  }

  // Function to calculate the result
  function calculateResult() {
    if (currentOperator && currentOperand) {
      switch (currentOperator) {
        case '+':
          result += parseFloat(currentOperand);
          break;
        case '-':
          result -= parseFloat(currentOperand);
          break;
      }
      currentOperand = result.toString();
      updateDisplay();
    }
  }

  // Function to clear the display
  function handleClearClick() {
    currentOperand = '0';
    currentOperator = '';
    result = null;
    updateDisplay();
  }

  // Add click event listeners to number buttons
  const numberButtons = document.querySelectorAll('.button:not(.operator)');
  numberButtons.forEach((button) => {
    button.addEventListener('click', function () {
      handleNumberClick(button.textContent);
    });
  });

  // Add click event listeners to operator buttons
  const operatorButtons = document.querySelectorAll('.button.operator');
  operatorButtons.forEach((button) => {
    button.addEventListener('click', function () {
      handleOperatorClick(button.textContent);
    });
  });

  // Add click event listener to the equal button
  const equalButton = document.querySelector('.button.equals');
  equalButton.addEventListener('click', handleEqualClick);

  // Add click event listener to the clear button
  const clearButton = document.querySelector('.button.clear');
  clearButton.addEventListener('click', handleClearClick);
});
