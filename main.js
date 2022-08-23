let passwordCharacteres = {
  lowerCase: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  upperCase: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  symbol: [
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
  ],
};
const firstPass = document.querySelector("#first-pass");
const secondPass = document.querySelector("#second-pass");

function generatePassword() {
  generateArray();

  let inputValue = document.querySelector("#number-input").value;

  firstPass.textContent = "First Password: ";

  for (let i = 0; i < inputValue; i++) {
    let randomPassword = Math.floor(
      Math.random() * passwordCharacteres.lowerCase.length
    );
    firstPass.textContent += passwordCharacteres.lowerCase[randomPassword];
  }

  secondPass.textContent = "Second Password: ";
  for (let i = 0; i < inputValue; i++) {
    let randomPassword = Math.floor(
      Math.random() * passwordCharacteres.lowerCase.length
    );
    secondPass.textContent += passwordCharacteres.lowerCase[randomPassword];
  }

  resetArray();
}

function generateArray() {
  let checkboxOne = document.querySelector("#checkbox-one");
  let checkboxTwo = document.querySelector("#checkbox-two");
  let checkboxThree = document.querySelector("#checkbox-three");
  if (
    checkboxOne.checked === true &&
    checkboxTwo.checked === true &&
    checkboxThree.checked === true
  ) {
    addArrays(passwordCharacteres.upperCase);
    addArrays(passwordCharacteres.symbol);
    addArrays(passwordCharacteres.numbers);
  } else if (checkboxOne.checked === true && checkboxTwo.checked === true) {
    addArrays(passwordCharacteres.upperCase);
    addArrays(passwordCharacteres.numbers);
  } else if (checkboxTwo.checked === true && checkboxThree.checked === true) {
    addArrays(passwordCharacteres.symbol);
    addArrays(passwordCharacteres.numbers);
  } else if (checkboxOne.checked === true && checkboxThree.checked === true) {
    addArrays(passwordCharacteres.upperCase);
    addArrays(passwordCharacteres.symbol);
  } else if (checkboxOne.checked === true) {
    addArrays(passwordCharacteres.upperCase);
  } else if (checkboxTwo.checked === true) {
    addArrays(passwordCharacteres.numbers);
  } else if (checkboxThree.checked) {
    addArrays(passwordCharacteres.symbol);
  } else {
  }
}

function addArrays(array) {
  currentArray = passwordCharacteres.lowerCase;
  for (let i = 0; i < array.length; i++) {
    currentArray.push(array[i]);
  }
}

function resetArray() {
  passwordCharacteres = {
    lowerCase: [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ],
    upperCase: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ],
    numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    symbol: [
      "~",
      "`",
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "_",
      "-",
      "+",
      "=",
      "{",
      "[",
      "}",
      "]",
      ",",
      "|",
      ":",
      ";",
      "<",
      ">",
      ".",
      "?",
    ],
  };
}
