"use strict";
const choose = document.querySelectorAll(".choose-img");
const show = document.querySelectorAll(".show-img");
const win = document.querySelector(".count-win");
const lose = document.querySelector(".count-lose");
const draw = document.querySelector(".count-draw");
const displayHead = document.querySelector(".txt");
let [rock, paper, scissor] = choose;
let [img1, img2] = show;
let userValue;
let computerValue;
let winner = "draw";
let counter;
function gamePlay(element) {
  userValue = element.getAttribute("alt");
}
function randomCompValue() {
  let num = Math.trunc(Math.random() * 3) + 1;
  switch (num) {
    case 1:
      computerValue = "rock";
      break;
    case 2:
      computerValue = "paper";
      break;
    case 3:
      computerValue = "scissor";
      break;
  }
}
function showResult() {
  img1.setAttribute("src", `images/${userValue}1.png`);
  img2.setAttribute("src", `images/${computerValue}2.png`);
}
function chooseWinner() {
  if (computerValue === userValue) {
    winner = "draw";
  } else if (computerValue === "rock" && userValue === "scissor") {
    winner = "computer";
  } else if (computerValue === "rock" && userValue === "paper") {
    winner = "user";
  } else if (computerValue === "paper" && userValue === "scissor") {
    winner = "user";
  } else if (computerValue === "paper" && userValue === "rock") {
    winner = "computer";
  } else if (computerValue === "scissor" && userValue === "paper") {
    winner = "computer";
  } else if (computerValue === "scissor" && userValue === "rock") {
    winner = "user";
  }
}
function displayScore() {
  if (winner === "user") {
    counter = +win.textContent;
    win.textContent = `${counter + 1}`;
    displayHead.textContent = "Won!";
  } else if (winner === "computer") {
    counter = +lose.textContent;
    lose.textContent = `${counter + 1}`;
    displayHead.textContent = "Lost!";
  } else {
    counter = +draw.textContent;
    draw.textContent = `${counter + 1}`;
    displayHead.textContent = "Draw!";
  }
}
function reset() {
  setTimeout(() => {
    document.querySelector(".game-play").classList.add("hidden");
  }, 3000);
}
rock.addEventListener("click", () => {
  gamePlay(rock);
  randomCompValue();
  chooseWinner();
  showResult();
  displayScore();
  reset();
});
paper.addEventListener("click", () => {
  gamePlay(paper);
  randomCompValue();
  chooseWinner();
  showResult();
  displayScore();
  reset();
});
scissor.addEventListener("click", () => {
  gamePlay(scissor);
  randomCompValue();
  chooseWinner();
  showResult();
  displayScore();
  reset();
});
