const display = document.querySelector(".display-1");
const numKeys = document.querySelectorAll(`.number`);
const operator = document.querySelectorAll(".operation");
const equal = document.querySelector(`.equal`);

const allClear = document.querySelector(`.all-clear`);

const backSpace = document.querySelector(`.decrease`);

const displayModal = document.querySelector(".dialog");
const hideModal = document.querySelector(".close");

// window.addEventListener("DOMContentLoaded", () => {
//   displayModal.showModal();
// });
// hideModal.addEventListener("click", () => {
//   displayModal.close();
// });

let firstValue = ``;
let secondValue = ``;
let result = ``;
let lastOperation = ``;
let dot = false;

numKeys.forEach((btn) => {
  btn.addEventListener(`click`, (e) => {
    if (e.target.innerText === `.` && !dot) {
      dot = true;
    } else if (e.target.innerText === `.` && dot) {
      return;
    }
    secondValue += e.target.innerText;
    display.innerText = secondValue;
  });
});

operator.forEach((opt) => {
  opt.addEventListener(`click`, (e) => {
    dot = false;
    if (!secondValue) return;
    const operationName = e.target.innerText;
    if (firstValue && secondValue && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(secondValue);
    }
    variation(operationName);
    // display.innerText = result;
    lastOperation = operationName;
    console.log(result);
  });
});

function variation(op = ``) {
  firstValue += secondValue + `` + op + ``;
  display.innerText = firstValue;
  secondValue = ``;
}

function mathOperation() {
  if (lastOperation === "x") {
    result = parseFloat(result) * parseFloat(secondValue);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(secondValue);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(secondValue);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(secondValue);
  }
}

equal.addEventListener(`click`, () => {
  if (!secondValue) {
    return;
  }
  mathOperation();
  variation();
  display.innerText = result;
  secondValue = result;
  firstValue = ``;
});

allClear.addEventListener(`click`, () => {
  firstValue = ``;
  secondValue = ``;
  display.innerHTML = `0`;
  result = ``;
  dot = false;
});

backSpace.addEventListener(`click`, () => {
  dot = false;
  display.innerText = display.innerText.slice(0, -1);
  secondValue = display.innerText;
});
