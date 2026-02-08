// ===================================
// LESSON 6: SNAKE GROWTH
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

// Snake as array of segments
let snake = [
  { x: 10, y: 10 },
  { x: 9, y: 10 },
  { x: 8, y: 10 }
];

let food = { x: 15, y: 10 };
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
  // Calculate new head position
  let head = { x: snake[0].x, y: snake[0].y };
  
  if (direction === 'up') head.y -= 1;
  else if (direction === 'down') head.y += 1;
  else if (direction === 'left') head.x -= 1;
  else if (direction === 'right') head.x += 1;
  
  // Wrap around edges
  if (head.x < 0) head.x = GRID_SIZE - 1;
  if (head.x >= GRID_SIZE) head.x = 0;
  if (head.y < 0) head.y = GRID_SIZE - 1;
  if (head.y >= GRID_SIZE) head.y = 0;
  
  // Add new head
  snake.unshift(head);
  
  // Check collision with food
  if (head.x === food.x && head.y === food.y) {
    // Ate food - move food but don't remove tail (grow!)
    food.x = Math.floor(Math.random() * GRID_SIZE);
    food.y = Math.floor(Math.random() * GRID_SIZE);
  } else {
    // Didn't eat food - remove tail (normal movement)
    snake.pop();
  }
}

// Render game
function draw() {
  clearCanvas();
  
  // Render all snake segments
  for (let i = 0; i < snake.length; i++) {
    renderPixel(snake[i].x, snake[i].y, PIXEL_COLOR);
  }
  
  // Render food
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
