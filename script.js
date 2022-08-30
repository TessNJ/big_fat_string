"use strict";
let inputText;
let dropId;
let dropResult;
let outputId;
let outputNew;
let dropChange;
let textArray;
let outputText;
let startIndex;
let endIndex;
let lowerCase;
let upperCase;

function readInput() {
  inputText = document.getElementById("newInput").value;
  //   console.log(inputText);
  dropDownF();
}
function dropDownF() {
  dropId = document.getElementById("dropDown");
  dropResult = dropId.options[dropId.selectedIndex].value;
  //   console.log("dropValue:" + dropResult);
  dropHandle();
}

function dropHandle() {
  console.log("here: " + inputText + " and " + dropResult);
  if (dropResult == 1 && inputText.split(" ").length == 1) {
    drop1();
  } else if (dropResult == 2 && inputText.split(" ").length >= 3) {
    drop2();
  } else if (dropResult == 3 && inputText.split(" ").length >= 3) {
    drop3();
  } else if (dropResult == 4 && inputText.split(" ").length >= 3) {
    drop4();
  } else if (
    dropResult == 5 &&
    inputText
      .split(/(\\|\/)/g)
      .pop()
      .includes(".")
  ) {
    drop5();
  } else if (dropResult == 6 && !inputText.includes(" ")) {
    drop6();
  } else if (dropResult == 7) {
    console.log("hi");
    drop7();
  } else if (dropResult == 8) {
    drop8();
  } else {
    console.log("Error: Not Coded yet");
  }
  //   appendOut();
}
//Append
function appendOut() {
  document.getElementById("newOutput").value = outputText;
}

//Drop 1 section

function drop1() {
  outputText = inputText.charAt(0).toUpperCase() + inputText.slice(1);
  console.log(outputText);
  appendOut();
}

//Drop 2
function drop2() {
  textArray = inputText.split(" ");
  outputText = textArray[0];
  console.log(outputText);
  appendOut();
}

//Drop 3
function drop3() {
  textArray = inputText.split(" ");
  outputText = textArray[0].length;
  appendOut();
}

//Drop 4 ///NEED HELP///
function drop4() {
  textArray = inputText.split(" ");
  outputText = textArray[1];
  startIndex = inputText.indexOf(textArray[1]);
  endIndex = startIndex + outputText.length;
  outputText = `"${outputText}" starts at ${startIndex} and ends at ${endIndex}`;
  appendOut();
}

//Drop 5
function drop5() {
  outputText = inputText.split(/(\\|\/)/g).pop();
  if (outputText.includes(".png")) {
    outputText = `"${outputText}" includes .png`;
  } else if (outputText.includes(".jpg")) {
    outputText = `"${outputText}" includes .jpg`;
  } else {
    outputText = `"${outputText}" includes neither .png or .jpg`;
  }
  appendOut();
}

//Drop 6
function drop6() {
  // outputText = inputText.padEnd(inputText.length, "*");
  outputText = inputText.replace(/./g, "*");
  console.log(outputText);
  appendOut();
}

//Drop 7
function drop7() {
  lowerCase = inputText.toLowerCase();
  outputText =
    lowerCase.substring(0, 2) +
    lowerCase[2].toUpperCase() +
    lowerCase.substring(3);
  console.log(outputText);
  appendOut();
}

//Drop 8
function drop8() {}
