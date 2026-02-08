// ===================================
// LESSON 6: SNAKE GROWTH
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

// TODO: Create snake as an array of segments
// Start with 3 segments
// let snake = [
//   { x: 10, y: 10 },  // Head
//   { x: 9, y: 10 },
//   { x: 8, y: 10 }
// ];


// TODO: Create food and direction
// let food = { x: 15, y: 10 };
// let direction = 'right';


// TODO: Add keyboard listener (same as Lesson 5)


// TODO: Create update function with growth logic
// function update() {
//   // Calculate new head position based on direction
//   let head = { x: snake[0].x, y: snake[0].y };
//   if (direction === 'right') head.x += 1;
//   // ... other directions
//   
//   // Add new head to front
//   snake.unshift(head);
//   
//   // Check if ate food
//   if (head.x === food.x && head.y === food.y) {
//     // Move food, but DON'T remove tail (snake grows!)
//     food.x = Math.floor(Math.random() * GRID_SIZE);
//     food.y = Math.floor(Math.random() * GRID_SIZE);
//   } else {
//     // Didn't eat food, remove tail (normal movement)
//     snake.pop();
//   }
// }


// TODO: Create draw function to render all segments
// function draw() {
//   clearCanvas();
//   // Render each snake segment
//   for (let i = 0; i < snake.length; i++) {
//     renderPixel(snake[i].x, snake[i].y, PIXEL_COLOR);
//   }
//   // Render food
//   renderPixel(food.x, food.y, FOOD_COLOR);
// }


// TODO: Create and start game loop (same as Lesson 5)
