// ===================================
// LESSON 2: VARIABLES AND ANIMATION
// ===================================

// Get the canvas element
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Grid configuration
const GRID_SIZE = 20;
const CELL_SIZE = 10;
const PIXEL_COLOR = '#4da6ff';

/**
 * renderPixel - Draw a single pixel at grid coordinates
 */
function renderPixel(x, y) {
  const canvasX = x * CELL_SIZE;
  const canvasY = y * CELL_SIZE;
  ctx.fillStyle = PIXEL_COLOR;
  ctx.fillRect(canvasX, canvasY, CELL_SIZE, CELL_SIZE);
}

/**
 * clearCanvas - Clear the entire canvas
 */
function clearCanvas() {
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, GRID_SIZE * CELL_SIZE, GRID_SIZE * CELL_SIZE);
}

// ===================================
// YOUR CODE STARTS HERE
// ===================================

// TODO: Create a variable to track pixel position
// Example: let x = 0;


// TODO: Create an animation loop function
// Steps:
// 1. Clear the canvas with clearCanvas()
// 2. Update x position (x = x + 1)
// 3. If x > 19, reset to 0
// 4. Render the pixel at (x, 10)
// 5. Call requestAnimationFrame to repeat

function gameLoop() {
  // Your animation code here
  
}

// TODO: Start the animation
// Call requestAnimationFrame(gameLoop) to begin

