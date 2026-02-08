// ===================================
// LESSON 1: BITS AND PIXEL RENDERING
// ===================================

// Get the canvas element
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Grid configuration
const GRID_SIZE = 20;        // 20x20 grid
const CELL_SIZE = 10;        // Each cell is 10 pixels
const PIXEL_COLOR = '#4da6ff';   // Blue pixel

/**
 * renderPixel - Draw a single pixel at grid coordinates
 * @param {number} x - X coordinate (0-19)
 * @param {number} y - Y coordinate (0-19)
 */
function renderPixel(x, y) {
  const canvasX = x * CELL_SIZE;
  const canvasY = y * CELL_SIZE;
  ctx.fillStyle = PIXEL_COLOR;
  ctx.fillRect(canvasX, canvasY, CELL_SIZE, CELL_SIZE);
}

// ===================================
// YOUR CODE STARTS HERE
// ===================================

// TODO: Render a pixel at position (10, 10)
// Use the renderPixel() function like this: renderPixel(10, 10);


