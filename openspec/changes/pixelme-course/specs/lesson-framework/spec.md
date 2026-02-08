## ADDED Requirements

### Requirement: CodePen lesson structure
Each lesson SHALL be structured as a CodePen pen with HTML, CSS, and JavaScript sections following consistent conventions.

#### Scenario: Lesson pen created
- **WHEN** a new lesson is created
- **THEN** it contains a canvas element in HTML, pixel rendering CSS, and starter JavaScript with TODO comments

### Requirement: Lesson navigation
Each lesson SHALL include navigation to previous and next lessons via embedded links in the HTML instructions.

#### Scenario: Student navigates between lessons
- **WHEN** student clicks "Next Lesson" link
- **THEN** browser opens the next lesson's CodePen URL

### Requirement: Code progression scaffolding
Each lesson's starter code SHALL be based on the previous lesson's solution code with new TODOs added for the current lesson's objectives.

#### Scenario: Lesson 2 starter code includes Lesson 1 solution
- **WHEN** Lesson 2 is opened
- **THEN** starter code contains all functionality from Lesson 1 solution plus new TODO sections for Lesson 2 concepts

### Requirement: Visual consistency
All lessons SHALL use the same canvas size, grid dimensions, and pixel rendering style for consistency across the course.

#### Scenario: Pixel size consistent across lessons
- **WHEN** student renders a pixel in any lesson
- **THEN** pixel displays with the same size and styling as in other lessons
