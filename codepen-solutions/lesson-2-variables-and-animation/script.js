// ===================================
// LESSON 2: VARIABLES AND ANIMATION
// SOLUTION
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
// SOLUTION
// ===================================

// Variable to track pixel position
let x = 0;

// Animation loop with frame rate control
let lastFrameTime = 0;
const FRAME_INTERVAL = 100; // milliseconds (10 FPS)

function gameLoop(timestamp) {
  // Control frame rate
  if (timestamp - lastFrameTime >= FRAME_INTERVAL) {
    // Clear the canvas
    clearCanvas();
    
    // Update position
    x = x + 1;
    
    // Wrap around when reaching edge
    if (x > 19) {
      x = 0;
    }
    
    // Render pixel at new position (middle row)
    renderPixel(x, 10);
    
    lastFrameTime = timestamp;
  }
  
  // Continue animation
  requestAnimationFrame(gameLoop);
}

// Start the animation
requestAnimationFrame(gameLoop);
