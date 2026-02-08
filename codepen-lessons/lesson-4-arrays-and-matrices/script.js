// ===================================
// LESSON 4: ARRAYS AND MATRICES
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

// TODO: Create a 2D array (matrix) representing your pattern
// 1 = pixel, 0 = empty
// Example: a 5x5 cross pattern
// let pattern = [
//   [0, 0, 1, 0, 0],
//   [0, 0, 1, 0, 0],
//   [1, 1, 1, 1, 1],
//   [0, 0, 1, 0, 0],
//   [0, 0, 1, 0, 0]
// ];


// TODO: Create a function to render the matrix
// function renderMatrix(matrix) {
//   clearCanvas();
//   // Loop through rows
//   for (let y = 0; y < matrix.length; y++) {
//     // Loop through columns
//     for (let x = 0; x < matrix[y].length; x++) {
//       // If cell is 1, render a pixel
//       if (matrix[y][x] === 1) {
//         renderPixel(x, y);
//       }
//     }
//   }
// }


// TODO: Call renderMatrix with your pattern
// renderMatrix(pattern);
