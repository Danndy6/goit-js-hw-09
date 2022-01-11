"use strict"

const refs = {
    startBtn: document.querySelector("[data-start]"),
    stopBtn: document.querySelector("[data-stop]"),
    bodyColor: document.querySelector("body"),
};
let timedId = null;
refs.stopBtn.setAttribute("disabled", true);

refs.startBtn.addEventListener("click", onStartBtnClick);
refs.stopBtn.addEventListener("click", onStopBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStartBtnClick() {
    timedId = setInterval(() => {
        refs.bodyColor.style.backgroundColor = getRandomHexColor() 
    }, 1000);
    refs.startBtn.setAttribute("disabled", true);
    refs.stopBtn.removeAttribute("disabled");
}

function onStopBtnClick() {
    clearInterval(timedId);
    refs.startBtn.removeAttribute("disabled");
    refs.stopBtn.setAttribute("disabled", true);
}