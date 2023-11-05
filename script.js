import {
  update as updateSnake,
  draw as drawSnake,
  snakeSpeed,
  getSnakeHead, snakeIntersection
} from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import {outsideGrid} from './grid.js'

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

function main(currentTime) {
  if (gameOver) {
    if(confirm("you lose. Press ok to restart.")){
        window.location = '/'
    }
    return
  }

  // repeat calling this function
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

  // check speed
  if (secondsSinceLastRender < 1 / snakeSpeed) return;

  console.log("render");
  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  gameBoard.innerText = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
