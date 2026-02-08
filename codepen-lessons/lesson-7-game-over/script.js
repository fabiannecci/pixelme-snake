// ===================================
// LESSON 7: GAME OVER & SELF-COLLISION
// ===================================

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const GRID_SIZE = 20;
const CELL_SIZE = 10;
const PIXEL_COLOR = '#4da6ff';
const FOOD_COLOR = '#ff6b6b';

function renderPixel(x, y, color = PIXEL_COLOR) {
  ctx.fillStyle = color;
  ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
}

function clearCanvas() {
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, GRID_SIZE * CELL_SIZE, GRID_SIZE * CELL_SIZE);
}

// ===================================
// YOUR CODE STARTS HERE
// ===================================

// (Start with Lesson 6 code)

let snake = [
  { x: 10, y: 10 },
  { x: 9, y: 10 },
  { x: 8, y: 10 }
];

let food = { x: 15, y: 10 };
let direction = 'right';

// TODO: Add game over variable
// let gameOver = false;


// Keyboard input
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowUp' && direction !== 'down') direction = 'up';
  else if (event.key === 'ArrowDown' && direction !== 'up') direction = 'down';
  else if (event.key === 'ArrowLeft' && direction !== 'right') direction = 'left';
  else if (event.key === 'ArrowRight' && direction !== 'left') direction = 'right';
  
  // TODO: Add restart on 'r' key
  // else if (event.key === 'r' && gameOver) {
  //   // Reset game
  // }
  
  event.preventDefault();
});

// TODO: Create self-collision check function
// function checkSelfCollision() {
//   let head = snake[0];
//   for (let i = 1; i < snake.length; i++) {
//     if (head.x === snake[i].x && head.y === snake[i].y) {
//       return true;
//     }
//   }
//   return false;
// }


function update() {
  // TODO: Add check for game over
  // if (gameOver) return;
  
  let head = { x: snake[0].x, y: snake[0].y };
  
  if (direction === 'up') head.y -= 1;
  else if (direction === 'down') head.y += 1;
  else if (direction === 'left') head.x -= 1;
  else if (direction === 'right') head.x += 1;
  
  if (head.x < 0) head.x = GRID_SIZE - 1;
  if (head.x >= GRID_SIZE) head.x = 0;
  if (head.y < 0) head.y = GRID_SIZE - 1;
  if (head.y >= GRID_SIZE) head.y = 0;
  
  snake.unshift(head);
  
  // TODO: Add self-collision check
  // if (checkSelfCollision()) {
  //   gameOver = true;
  //   return;
  // }
  
  if (head.x === food.x && head.y === food.y) {
    food.x = Math.floor(Math.random() * GRID_SIZE);
    food.y = Math.floor(Math.random() * GRID_SIZE);
  } else {
    snake.pop();
  }
}

function draw() {
  clearCanvas();
  
  for (let i = 0; i < snake.length; i++) {
    renderPixel(snake[i].x, snake[i].y, PIXEL_COLOR);
  }
  
  renderPixel(food.x, food.y, FOOD_COLOR);
  
  // TODO: Display game over message
  // if (gameOver) {
  //   ctx.fillStyle = '#ff6b6b';
  //   ctx.font = '20px Courier';
  //   ctx.textAlign = 'center';
  //   ctx.fillText('GAME OVER', 100, 90);
  //   ctx.font = '12px Courier';
  //   ctx.fillText('Press R to Restart', 100, 110);
  // }
  
  // TODO: Update score display
  // document.getElementById('score').textContent = 'Score: ' + snake.length;
}

let lastTime = 0;
function gameLoop(timestamp) {
  if (timestamp - lastTime >= 200) {
    update();
    draw();
    lastTime = timestamp;
  }
  requestAnimationFrame(gameLoop);
}

draw();
requestAnimationFrame(gameLoop);
