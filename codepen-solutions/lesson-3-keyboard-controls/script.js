// ===================================
// LESSON 3: KEYBOARD CONTROLS
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

// Pixel position
let x = 10;
let y = 10;

// Draw function
function draw() {
  clearCanvas();
  renderPixel(x, y);
}

// Keyboard event listener
document.addEventListener('keydown', function(event) {
  // Prevent default scrolling
  if (event.key.startsWith('Arrow')) {
    event.preventDefault();
  }
  
  // Update position based on arrow key
  if (event.key === 'ArrowUp' && y > 0) {
    y = y - 1;
  } else if (event.key === 'ArrowDown' && y < 19) {
    y = y + 1;
  } else if (event.key === 'ArrowLeft' && x > 0) {
    x = x - 1;
  } else if (event.key === 'ArrowRight' && x < 19) {
    x = x + 1;
  }
  
  // Redraw
  draw();
});

// Initial draw
draw();
