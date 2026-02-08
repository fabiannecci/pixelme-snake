/**
 * PixelMe Game Engine
 * Core functions for rendering pixels, handling input, and managing game state
 * Designed for educational use - prioritizes clarity over optimization
 */

// =======================
// CANVAS SETUP
// =======================

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Grid configuration
const GRID_SIZE = 20;        // 20x20 grid
const CELL_SIZE = 10;        // Each cell is 10 pixels
const CANVAS_SIZE = GRID_SIZE * CELL_SIZE; // 200x200 total

// Set canvas size
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

// Colors
const PIXEL_COLOR = '#4da6ff';   // Blue pixel
const BG_COLOR = '#000000';       // Black background
const FOOD_COLOR = '#ff6b6b';     // Red food

// =======================
// CORE RENDERING FUNCTIONS
// =======================

/**
 * renderPixel - Render a single pixel at grid coordinates
 * @param {number} x - X coordinate (0 to GRID_SIZE-1)
 * @param {number} y - Y coordinate (0 to GRID_SIZE-1)
 * @param {string} color - Optional color (defaults to PIXEL_COLOR)
 */
function renderPixel(x, y, color = PIXEL_COLOR) {
  // Convert grid coordinates to canvas coordinates
  const canvasX = x * CELL_SIZE;
  const canvasY = y * CELL_SIZE;
  
  // Set fill color
  ctx.fillStyle = color;
  
  // Draw filled rectangle
  ctx.fillRect(canvasX, canvasY, CELL_SIZE, CELL_SIZE);
}

/**
 * clearCanvas - Clear the entire canvas (fill with background color)
 */
function clearCanvas() {
  ctx.fillStyle = BG_COLOR;
  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
}

// =======================
// ANIMATION LOOP
// =======================

// Game state
let isRunning = false;
let lastFrameTime = 0;
const FRAME_INTERVAL = 100; // milliseconds between updates (10 FPS for Snake)

/**
 * gameLoop - Main animation loop using requestAnimationFrame
 * @param {number} timestamp - Current timestamp from requestAnimationFrame
 */
function gameLoop(timestamp) {
  // Continue loop if game is running
  if (!isRunning) return;
  
  // Calculate time since last frame
  const deltaTime = timestamp - lastFrameTime;
  
  // Only update at specific intervals (for frame-rate control)
  if (deltaTime >= FRAME_INTERVAL) {
    // Call update function (defined in game code)
    if (typeof update === 'function') {
      update();
    }
    
    // Call render function (defined in game code)
    if (typeof render === 'function') {
      render();
    }
    
    lastFrameTime = timestamp;
  }
  
  // Request next frame
  requestAnimationFrame(gameLoop);
}

/**
 * startGame - Start the animation loop
 */
function startGame() {
  isRunning = true;
  lastFrameTime = 0;
  requestAnimationFrame(gameLoop);
}

/**
 * stopGame - Stop the animation loop
 */
function stopGame() {
  isRunning = false;
}

// =======================
// KEYBOARD INPUT HANDLING
// =======================

// Current direction
let currentDirection = null;

// Arrow key codes
const KEYS = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right'
};

/**
 * handleKeyPress - Handle keyboard input
 * @param {KeyboardEvent} event - Keyboard event
 */
function handleKeyPress(event) {
  // Check if it's an arrow key
  if (KEYS[event.key]) {
    // Prevent default scrolling behavior
    event.preventDefault();
    
    // Update current direction
    currentDirection = KEYS[event.key];
    
    // Call custom direction change handler if defined
    if (typeof onDirectionChange === 'function') {
      onDirectionChange(currentDirection);
    }
  }
}

/**
 * initializeInput - Set up keyboard event listeners
 */
function initializeInput() {
  document.addEventListener('keydown', handleKeyPress);
}

/**
 * getDirection - Get the current direction
 * @returns {string} Current direction (up/down/left/right) or null
 */
function getDirection() {
  return currentDirection;
}

/**
 * setDirection - Manually set the current direction
 * @param {string} direction - Direction to set (up/down/left/right)
 */
function setDirection(direction) {
  currentDirection = direction;
}

// =======================
// MATRIX RENDERING
// =======================

/**
 * renderMatrix - Render a 2D array of bits as pixels
 * @param {Array<Array<number>>} matrix - 2D array where 1 = pixel, 0 = empty
 * @param {string} color - Optional color for pixels (defaults to PIXEL_COLOR)
 */
function renderMatrix(matrix, color = PIXEL_COLOR) {
  // Loop through rows
  for (let y = 0; y < matrix.length; y++) {
    // Loop through columns in each row
    for (let x = 0; x < matrix[y].length; x++) {
      // If cell value is 1 (or truthy), render a pixel
      if (matrix[y][x]) {
        renderPixel(x, y, color);
      }
    }
  }
}

/**
 * createEmptyMatrix - Create an empty matrix filled with zeros
 * @param {number} width - Width of matrix
 * @param {number} height - Height of matrix
 * @returns {Array<Array<number>>} Empty matrix
 */
function createEmptyMatrix(width = GRID_SIZE, height = GRID_SIZE) {
  const matrix = [];
  for (let y = 0; y < height; y++) {
    const row = [];
    for (let x = 0; x < width; x++) {
      row.push(0);
    }
    matrix.push(row);
  }
  return matrix;
}

// =======================
// COLLISION DETECTION
// =======================

/**
 * checkCollision - Check if two positions collide (same coordinates)
 * @param {Object} pos1 - First position {x, y}
 * @param {Object} pos2 - Second position {x, y}
 * @returns {boolean} True if positions match
 */
function checkCollision(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

/**
 * isOutOfBounds - Check if position is outside grid boundaries
 * @param {Object} pos - Position to check {x, y}
 * @returns {boolean} True if out of bounds
 */
function isOutOfBounds(pos) {
  return pos.x < 0 || pos.x >= GRID_SIZE || pos.y < 0 || pos.y >= GRID_SIZE;
}

/**
 * checkSelfCollision - Check if a position collides with any position in an array
 * @param {Object} pos - Position to check {x, y}
 * @param {Array<Object>} positions - Array of positions to check against
 * @returns {boolean} True if collision found
 */
function checkSelfCollision(pos, positions) {
  for (let i = 0; i < positions.length; i++) {
    if (checkCollision(pos, positions[i])) {
      return true;
    }
  }
  return false;
}

/**
 * getRandomPosition - Generate a random grid position
 * @returns {Object} Random position {x, y}
 */
function getRandomPosition() {
  return {
    x: Math.floor(Math.random() * GRID_SIZE),
    y: Math.floor(Math.random() * GRID_SIZE)
  };
}

/**
 * getRandomEmptyPosition - Generate random position not in occupied list
 * @param {Array<Object>} occupiedPositions - Positions to avoid
 * @returns {Object} Random empty position {x, y}
 */
function getRandomEmptyPosition(occupiedPositions = []) {
  let pos;
  let attempts = 0;
  const maxAttempts = 100;
  
  do {
    pos = getRandomPosition();
    attempts++;
  } while (checkSelfCollision(pos, occupiedPositions) && attempts < maxAttempts);
  
  return pos;
}
