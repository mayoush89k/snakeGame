import { onSnake , expandSnake} from './snake.js'
import { getRandomGridPosition } from './grid.js';

let food = getRandomFoodPosition();
const expansionRate = 1 

export function update() {
    if(onSnake(food)){
        expandSnake(expansionRate)
        food = getRandomFoodPosition()
    }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("section");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition(){
    let newFoodPosition 
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = getRandomGridPosition()
    }
    return newFoodPosition
}

