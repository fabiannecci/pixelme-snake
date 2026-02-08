// ===================================
// LESSON 4: ARRAYS AND MATRICES
// SOLUTION
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
// SOLUTION
// ===================================

// Create a cross pattern (5x5)
let pattern = [
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 1, 1, 1],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0]
];

// Function to render a matrix
function renderMatrix(matrix, offsetX = 7, offsetY = 7) {
  clearCanvas();
  
  // Loop through rows
  for (let y = 0; y < matrix.length; y++) {
    // Loop through columns in each row
    for (let x = 0; x < matrix[y].length; x++) {
      // If cell value is 1, render a pixel
      if (matrix[y][x] === 1) {
        renderPixel(x + offsetX, y + offsetY);
      }
    }
  }
}

// Render the pattern (centered)
renderMatrix(pattern);
