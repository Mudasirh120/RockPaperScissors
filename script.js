"use strict";
const imgs = document.querySelectorAll(".choose-img");
console.log(imgs);
const win = document.querySelector(".count-win");
const lose = document.querySelector(".count-lose");
const draw = document.querySelector(".count-draw");
const displayHead = document.querySelector(".h1");
let [rock, paper, scissor] = imgs;
let userValue;
let computerValue;
let winner = "draw";
let counter;
function gamePlay(element) {
  //   document.querySelector(".game-play").classList.remove("hidden");
  userValue = element.getAttribute("alt");
  console.log(userValue);
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
  console.log(computerValue);
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
  console.log(winner);
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
rock.addEventListener("click", () => {
  gamePlay(rock);
  randomCompValue();
  chooseWinner();
  displayScore();
});
paper.addEventListener("click", () => {
  gamePlay(paper);
  randomCompValue();
  chooseWinner();
  displayScore();
});
scissor.addEventListener("click", () => {
  gamePlay(scissor);
  randomCompValue();
  chooseWinner();
  displayScore();
});
