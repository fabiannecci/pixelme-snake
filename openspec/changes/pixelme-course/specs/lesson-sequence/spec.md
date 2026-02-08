## ADDED Requirements

### Requirement: Lesson 1 - Bits and pixel rendering
Lesson 1 SHALL introduce the bit concept and render a single pixel on a Cartesian plane using canvas.

#### Scenario: Single pixel displayed
- **WHEN** student completes Lesson 1
- **THEN** a single pixel renders at a specified (x,y) coordinate on the canvas

#### Scenario: Bit concept explained
- **WHEN** student reads Lesson 1 instructions
- **THEN** lesson explains bits as 0/1, true/false, on/off, black/white pixel

### Requirement: Lesson 2 - Variables and animation
Lesson 2 SHALL introduce variables, operations, and loops to create pixel animation.

#### Scenario: Pixel animates across screen
- **WHEN** student completes Lesson 2
- **THEN** pixel moves continuously across the canvas using a loop

#### Scenario: Variables and operations taught
- **WHEN** student works through Lesson 2
- **THEN** lesson demonstrates variable declaration, arithmetic operations, and coordinate updates

### Requirement: Lesson 3 - Keyboard controls
Lesson 3 SHALL bind pixel movement to keyboard arrow keys.

#### Scenario: Arrow keys control pixel
- **WHEN** student presses arrow keys after completing Lesson 3
- **THEN** pixel moves in the corresponding direction (up/down/left/right)

#### Scenario: Event binding explained
- **WHEN** student reads Lesson 3 materials
- **THEN** lesson explains addEventListener and keydown events

### Requirement: Lesson 4 - Arrays and matrix display
Lesson 4 SHALL introduce arrays and 2D arrays to represent and render a matrix of pixels.

#### Scenario: Grid of pixels displayed
- **WHEN** student completes Lesson 4
- **THEN** a grid/matrix of pixels renders on the canvas based on a 2D array

#### Scenario: Array concepts taught
- **WHEN** student works through Lesson 4
- **THEN** lesson explains array syntax, indexing, and nested arrays for matrices

### Requirement: Lesson 5 - Snake movement and collision
Lesson 5 SHALL implement snake-like movement using arrow keys and detect collision with food pixels.

#### Scenario: Snake moves like Snake game
- **WHEN** student completes Lesson 5
- **THEN** pixel moves in continuous direction controlled by arrows, mimicking Snake game locomotion

#### Scenario: Food collision detected
- **WHEN** snake pixel reaches food position in Lesson 5
- **THEN** collision is detected (console log or visual feedback)

### Requirement: Lesson 6 - Snake growth mechanics
Lesson 6 SHALL implement snake data structure and growth when food is consumed.

#### Scenario: Snake grows when eating food
- **WHEN** snake collides with food in Lesson 6
- **THEN** snake increases length by one segment and food respawns

#### Scenario: Data structure for snake taught
- **WHEN** student works through Lesson 6
- **THEN** lesson explains representing the snake as an array of coordinate objects

### Requirement: Lesson 7 - Self-collision and game over
Lesson 7 SHALL implement self-collision detection and display a game-over screen when the snake hits itself.

#### Scenario: Game ends on self-collision
- **WHEN** snake head collides with any body segment in Lesson 7
- **THEN** game stops and displays "Game Over" message

#### Scenario: Complete Snake game functional
- **WHEN** student completes Lesson 7
- **THEN** a fully playable Snake game runs with movement, growth, and game-over logic
