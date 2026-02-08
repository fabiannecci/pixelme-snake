// ===================================
// LESSON 3: KEYBOARD CONTROLS
// ===================================

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const GRID_SIZE = 20;
const CELL_SIZE = 10;
const PIXEL_COLOR = '#4da6ff';

function renderPixel(x, y) {
  const canvasX = x * CELL_SIZE;
  const canvasY = y * CELL_SIZE;
  ctx.fillStyle = PIXEL_COLOR;
  ctx.fillRect(canvasX, canvasY, CELL_SIZE, CELL_SIZE);
}

function clearCanvas() {
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, GRID_SIZE * CELL_SIZE, GRID_SIZE * CELL_SIZE);
}

// ===================================
// YOUR CODE STARTS HERE
// ===================================

// TODO: Create variables for pixel position
// let x = 10;
// let y = 10;


// TODO: Create a function to draw the current state
function draw() {
  clearCanvas();
  // TODO: render the pixel at (x, y)
  
}

// TODO: Add event listener for keyboard input
// document.addEventListener('keydown', function(event) {
//   // Check which arrow key was pressed
//   if (event.key === 'ArrowUp') {
//     // Move up (decrease y)
//   }
//   // Add other directions...
//   
//   // Redraw after moving
//   draw();
// });


// Draw initial state
draw();
