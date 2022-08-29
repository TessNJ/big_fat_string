"use strict";
let inputText;
let dropId;
let dropResult;
let outputId;
let outputNew;

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
  if (dropResult == 1) {
    console.log("nice");
  } else {
    console.log("Error: Not Coded yet");
  }
  appendOut();
}

function appendOut() {
  document.getElementById("newOutput").value = inputText;
}
