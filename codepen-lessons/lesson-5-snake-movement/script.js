// ===================================
// LESSON 5: SNAKE MOVEMENT & COLLISION
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

// TODO: Create snake position object
// let snake = { x: 10, y: 10 };


// TODO: Create food position object  
// let food = { x: 15, y: 10 };


// TODO: Create direction variable
// let direction = 'right';  // Can be: 'up', 'down', 'left', 'right'


// TODO: Add keyboard listener to change direction
// document.addEventListener('keydown', function(event) {
//   if (event.key === 'ArrowUp') direction = 'up';
//   // Add other directions...
// });


// TODO: Create update function
// function update() {
//   // Move snake based on direction
//   if (direction === 'right') snake.x = snake.x + 1;
//   // Add other directions...
//   
//   // Check collision with food
//   if (snake.x === food.x && snake.y === food.y) {
//     // Move food to random position
//     food.x = Math.floor(Math.random() * GRID_SIZE);
//     food.y = Math.floor(Math.random() * GRID_SIZE);
//   }
// }


// TODO: Create draw function
// function draw() {
//   clearCanvas();
//   renderPixel(snake.x, snake.y, PIXEL_COLOR);
//   renderPixel(food.x, food.y, FOOD_COLOR);
// }


// TODO: Create and start game loop
// let lastTime = 0;
// function gameLoop(timestamp) {
//   if (timestamp - lastTime >= 200) {
//     update();
//     draw();
//     lastTime = timestamp;
//   }
//   requestAnimationFrame(gameLoop);
// }
// requestAnimationFrame(gameLoop);
