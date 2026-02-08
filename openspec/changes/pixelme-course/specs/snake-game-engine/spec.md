## ADDED Requirements

### Requirement: Pixel rendering
The game engine SHALL provide a function to render a single pixel at given x,y coordinates on a canvas.

#### Scenario: Render pixel at coordinate
- **WHEN** renderPixel(5, 5) is called
- **THEN** a filled square appears at grid position (5,5) on the canvas

### Requirement: Animation loop
The game engine SHALL support an animation loop that updates and renders the game state at regular intervals.

#### Scenario: Pixel moves across screen
- **WHEN** animation loop runs with pixel x-coordinate incrementing
- **THEN** pixel appears to move smoothly across the canvas

### Requirement: Keyboard input handling
The game engine SHALL capture arrow key presses and make them available to game logic.

#### Scenario: Arrow key changes direction
- **WHEN** user presses the right arrow key
- **THEN** the direction variable updates to "right"

### Requirement: Grid coordinate system
The game engine SHALL use a grid-based coordinate system where each cell represents one pixel-sized unit.

#### Scenario: Grid boundaries defined
- **WHEN** grid is 20x20 cells
- **THEN** valid coordinates range from (0,0) to (19,19)

### Requirement: Matrix rendering
The game engine SHALL render a 2D array of bits as a grid of pixels on the canvas.

#### Scenario: Matrix with multiple pixels displayed
- **WHEN** matrix has cells set to 1 at positions (2,2) and (5,5)
- **THEN** pixels appear at both grid positions on the canvas

### Requirement: Snake data structure
The game engine SHALL represent the snake as an ordered collection of coordinate pairs.

#### Scenario: Snake with multiple segments
- **WHEN** snake array contains [(5,5), (4,5), (3,5)]
- **THEN** three connected pixels render representing the snake body

### Requirement: Snake movement
The game engine SHALL move the snake by adding a new head position and removing the tail, unless growing.

#### Scenario: Snake moves right without growing
- **WHEN** snake is [(5,5), (4,5)] moving right
- **THEN** snake becomes [(6,5), (5,5)] after one step

### Requirement: Food collision detection
The game engine SHALL detect when the snake's head occupies the same cell as food.

#### Scenario: Snake eats food
- **WHEN** snake head moves to food position
- **THEN** collision is detected and food disappears

### Requirement: Snake growth
The game engine SHALL increase snake length when food is consumed by not removing the tail on the next move.

#### Scenario: Snake grows after eating food
- **WHEN** snake eats food at step N
- **THEN** snake has one additional segment at step N+1

### Requirement: Self-collision detection
The game engine SHALL detect when the snake's head occupies the same cell as any body segment.

#### Scenario: Snake collides with itself
- **WHEN** snake head position matches any body segment position
- **THEN** self-collision is detected

### Requirement: Game-over state
The game engine SHALL transition to game-over state when collision occurs and stop the animation loop.

#### Scenario: Game ends on self-collision
- **WHEN** self-collision is detected
- **THEN** animation stops and game-over message displays
