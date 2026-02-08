// ===================================
// LESSON 5: SNAKE MOVEMENT & COLLISION
// SOLUTION
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
// SOLUTION
// ===================================

// Snake and food positions
let snake = { x: 10, y: 10 };
let food = { x: 15, y: 10 };

// Current direction
let direction = 'right';

// Keyboard input
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowUp' && direction !== 'down') {
    direction = 'up';
  } else if (event.key === 'ArrowDown' && direction !== 'up') {
    direction = 'down';
  } else if (event.key === 'ArrowLeft' && direction !== 'right') {
    direction = 'left';
  } else if (event.key === 'ArrowRight' && direction !== 'left') {
    direction = 'right';
  }
  event.preventDefault();
});

// Update game state
function update() {
  // Move snake based on direction
  if (direction === 'up') {
    snake.y = snake.y - 1;
  } else if (direction === 'down') {
    snake.y = snake.y + 1;
  } else if (direction === 'left') {
    snake.x = snake.x - 1;
  } else if (direction === 'right') {
    snake.x = snake.x + 1;
  }
  
  // Wrap around edges
  if (snake.x < 0) snake.x = GRID_SIZE - 1;
  if (snake.x >= GRID_SIZE) snake.x = 0;
  if (snake.y < 0) snake.y = GRID_SIZE - 1;
  if (snake.y >= GRID_SIZE) snake.y = 0;
  
  // Check collision with food
  if (snake.x === food.x && snake.y === food.y) {
    // Move food to random position
    food.x = Math.floor(Math.random() * GRID_SIZE);
    food.y = Math.floor(Math.random() * GRID_SIZE);
  }
}

// Render game
function draw() {
  clearCanvas();
  renderPixel(snake.x, snake.y, PIXEL_COLOR);
  renderPixel(food.x, food.y, FOOD_COLOR);
}

// Game loop
let lastTime = 0;
function gameLoop(timestamp) {
  if (timestamp - lastTime >= 200) {
    update();
    draw();
    lastTime = timestamp;
  }
  requestAnimationFrame(gameLoop);
}

// Start game
draw();
requestAnimationFrame(gameLoop);
