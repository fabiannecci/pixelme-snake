# PixelMe Customization Guide

This guide shows educators how to adapt the PixelMe course for their specific teaching context.

---

## 🎨 What You Can Customize

### Visual Customization
- Colors and themes
- Canvas size and grid dimensions
- Pixel size and styling
- Font and text styling

### Content Customization
- Lesson instructions and wording
- Difficulty level and pacing
- Example code and hints
- Extension challenges

### Structural Customization
- Number of lessons (add or remove)
- Lesson order and prerequisites
- Platform (beyond CodePen)

---

## 🔧 Quick Customization Recipes

### Change Colors

**Pixel Color:**
In each lesson's `script.js`, modify:
```javascript
const PIXEL_COLOR = '#4da6ff';  // Change to any hex color
```

**Food Color:**
```javascript
const FOOD_COLOR = '#ff6b6b';   // Change to any hex color
```

**Background Color:**
In each lesson's `styles.css`, modify:
```css
#gameCanvas {
  background-color: #000000;  /* Change to any hex color */
}
```

**Theme Colors:**
```css
body {
  background-color: #1a1a1a;  /* Dark background */
  color: #f0f0f0;             /* Light text */
}

.instructions h1 {
  color: #4da6ff;             /* Heading color */
}
```

---

### Change Canvas/Grid Size

In each lesson's `script.js`, modify these constants:

```javascript
const GRID_SIZE = 20;     // Number of cells (try 30 for bigger grid)
const CELL_SIZE = 10;     // Pixels per cell (try 15 for larger pixels)
```

Then update canvas in `index.html`:
```html
<canvas id="gameCanvas" width="300" height="300"></canvas>
<!-- width/height = GRID_SIZE * CELL_SIZE -->
```

**Recommended combinations:**
- Small: 15×15 grid, 12px cells = 180×180 canvas
- Default: 20×20 grid, 10px cells = 200×200 canvas
- Large: 30×30 grid, 8px cells = 240×240 canvas
- Extra large: 40×40 grid, 10px cells = 400×400 canvas

---

### Change Game Speed

In lessons 2, 5, 6, 7, modify the frame interval:

```javascript
const FRAME_INTERVAL = 100;  // milliseconds between updates
```

**Speed guide:**
- 200ms = Slow (beginner-friendly)
- 100ms = Default (moderate)
- 50ms = Fast (challenging!)

Or implement progressive difficulty:
```javascript
let speed = 150;

// In update() when eating food:
if (head.x === food.x && head.y === food.y) {
  // Increase speed (decrease interval)
  speed = Math.max(50, speed - 5);
  // ...
}
```

---

### Simplify for Younger Students (8-9 years)

**Lesson 1:** Already simple ✅

**Lesson 2:** Provide more starter code
```javascript
// Pre-fill the variable
let x = 0;  // <-- Already there

function gameLoop(timestamp) {
  clearCanvas();
  x = x + 1;           // <-- Already filled in
  if (x > 19) x = 0;   // <-- Already filled in
  renderPixel(x, 10);  // TODO: Students add this line only
  requestAnimationFrame(gameLoop);
}
```

**Lessons 3-7:** Break into smaller sub-lessons
- 3a: Detect one arrow key
- 3b: Add all four directions
- 4a: Create a simple array
- 4b: Create a 2D array

---

### Increase Challenge for Advanced Students (15-16 years)

**Reduce scaffolding:**
```javascript
// Instead of providing functions, provide only specs:

// TODO: Create a function renderPixel(x, y)
// - Convert grid coordinates to canvas coordinates
// - Use ctx.fillRect() to draw a square
```

**Add advanced concepts:**
- Object-oriented approach (Snake class)
- Functional programming patterns
- TypeScript type annotations
- Performance optimization

**Extension challenges:**
- Implement A* pathfinding for AI snake
- Add multiplayer with real-time sync
- Create level editor
- Build physics-based movement

---

### Adapt Instructions for Different Contexts

**For Non-English Speakers:**
Translate the instruction text in `index.html`:
```html
<h3>What is a Bit?</h3>
<p>A <strong>bit</strong> is the smallest unit of data...</p>
<!-- Translate to your language -->
```

**For Different Age Groups:**
- **Younger (8-10):** Use more analogies, fewer technical terms
- **Older (13-16):** Add formal definitions, link to documentation

**For Different Teaching Styles:**
- **Project-based:** Show final result first, work backwards
- **Concept-first:** Add more theory before coding
- **Discovery-based:** Remove hints, let students experiment

---

## 📦 How to Create Your Own CodePen Collection

### Step 1: Set Up Collections

1. Log into CodePen
2. Go to Collections → Create Collection
3. Name it: "PixelMe Course - [Your Name]"
4. Create another: "PixelMe Solutions - [Your Name]"
5. Set solutions collection to **Private** or **Unlisted**

### Step 2: Create Pens for Each Lesson

For each lesson (1-7):

**Starter Pen:**
1. Create New Pen
2. Copy HTML from `codepen-lessons/lesson-X/index.html`
3. Copy CSS from `codepen-lessons/lesson-X/styles.css`
4. Copy JS from `codepen-lessons/lesson-X/script.js`
5. Save as "Lesson X: [Title]"
6. Add to your starter collection
7. Customize as desired

**Solution Pen:**
1. Create New Pen
2. Copy from `codepen-solutions/lesson-X/`
3. Save as "Lesson X: [Title] - Solution"
4. Add to solutions collection

### Step 3: Update Navigation Links

In each lesson's HTML, update the navigation:
```html
<a href="https://codepen.io/yourname/pen/lesson-2" class="nav-link next-lesson">
  Next Lesson →
</a>
```

### Step 4: Share with Students

Provide students with:
- Link to your starter collection
- Instructions to fork each lesson
- Your customized README (see below)

---

## 📄 Customize the README

Copy `README.md` and update:

**1. Replace CodePen Collection URLs:**
```markdown
[Lesson 1: Bits and Pixels](https://codepen.io/YOURNAME/pen/YOURCODE)
```

**2. Add your branding:**
```markdown
# PixelMe: Learn Programming with Ms. Johnson!
*ACME Middle School Coding Club - Fall 2026*
```

**3. Adjust schedule:**
```markdown
## Our Schedule
Week 1 (Sept 10): Lesson 1
Week 2 (Sept 17): Lesson 2
...
```

**4. Add classroom-specific info:**
```markdown
## Class Resources
- Join our Discord: [link]
- Submit questions: [Google Form]
- Share your games: [Padlet]
```

---

## 🎓 Platform Alternatives to CodePen

While the course is designed for CodePen, you can adapt it to:

### JSFiddle
- Similar interface to CodePen
- Free, no account required
- Adjust file structure same as CodePen

### Local Development
**Pros:** No internet dependency, more control  
**Cons:** Requires setup, file management

**Setup:**
1. Students create a folder per lesson
2. Create `index.html`, `styles.css`, `script.js`
3. Link files in HTML:
```html
<link rel="stylesheet" href="styles.css">
<script src="script.js"></script>
```
4. Open `index.html` in browser

### Replit
**Pros:** Full IDE, collaboration features  
**Cons:** More complex interface

**Setup:**
1. Create HTML/CSS/JS Repl
2. Students fork for each lesson
3. Similar file structure to local development

### Glitch
**Pros:** Good for beginners, remix feature  
**Cons:** Requires project structure understanding

---

## 🧩 Add New Lessons

### Example: Lesson 8 - Power-Ups

**Concept:** Random power-ups that change game behavior

**Steps:**
1. Copy Lesson 7 solution as starting point
2. Add new instructions in HTML
3. Create starter code with TODOs:
```javascript
// TODO: Create power-up object
// let powerUp = { x: ?, y: ?, type: 'speed' };

// TODO: Render power-up with different color

// TODO: Check collision with power-up

// TODO: Apply power-up effect
```
4. Create solution with implementation
5. Add to your collection

**New lesson ideas:**
- Lesson 8: Power-ups (speed boost, invincibility)
- Lesson 9: Obstacles (walls, barriers)
- Lesson 10: Levels (progressive difficulty)
- Lesson 11: Multiplayer (two snakes)

---

## 🎨 Complete Theme Examples

### Example 1: Neon Theme
```css
/* Neon colors */
body { background-color: #0a0a0a; }
#gameCanvas { 
  background-color: #000;
  border: 3px solid #ff00ff;
  box-shadow: 0 0 30px #ff00ff;
}
```
```javascript
const PIXEL_COLOR = '#00ff00';  // Neon green
const FOOD_COLOR = '#ff00ff';   // Neon pink
```

### Example 2: Retro Game Boy
```css
body { background-color: '#9bbc0f'; }
#gameCanvas { 
  background-color: #0f380f;
  image-rendering: pixelated;
}
```
```javascript
const PIXEL_COLOR = '#306230';
const FOOD_COLOR = '#8bac0f';
```

### Example 3: Ocean Theme
```css
#gameCanvas { background-color: #003366; }
```
```javascript
const PIXEL_COLOR = '#ff6b35';  // Orange fish
const FOOD_COLOR = '#4ecdc4';   // Teal food
```

---

## 📊 Track Student Progress

### Option 1: CodePen Collections
Ask students to:
1. Create their own collection
2. Add completed lessons
3. Share collection link with you

### Option 2: Submission Form
Create a Google Form:
- Lesson number
- CodePen pen URL
- Reflection question: "What did you learn?"

### Option 3: Live Gallery
Create a shared document/Padlet:
- Students post their pen links
- Peers can view and comment
- Celebrate creative customizations

---

## 🔒 Classroom Management Tips

### Prevent Cheating
- Keep solution links private until lesson complete
- Encourage individual problem-solving first
- Allow peer collaboration after initial attempt

### Handle Different Paces
- Fast students: Provide extension challenges
- Struggling students: Offer more hints, pair programming
- Create "checkpoint" meetings where class reviews together

### Save Student Work
- Remind students to frequently save in CodePen
- Show how to fork their own pens for experimentation
- Backup: Ask students to export code occasionally

---

## 🌍 Share Your Customizations

If you create awesome customizations, consider sharing:
- Post your CodePen collection
- Share lesson modifications
- Contribute back to the project
- Write a blog post about your experience

**Tag:** `#PixelMeCourse` when sharing online!

---

## ✅ Customization Checklist

Before launching your customized course:

- [ ] All CodePen pens created and tested
- [ ] Navigation links between lessons work
- [ ] Colors/styling match your preference
- [ ] Instructions adapted for your students
- [ ] Difficulty appropriate for age group
- [ ] README updated with your info
- [ ] Solutions collection is private/unlisted
- [ ] Testing checklist completed
- [ ] Student access instructions prepared

---

## 💡 Need Help?

Customization not working? Check:
1. **Syntax errors:** Open browser console (F12)
2. **Canvas size mismatch:** Verify GRID_SIZE × CELL_SIZE = canvas dimensions
3. **Colors not showing:** Check hex codes are valid (#RRGGBB)
4. **Navigation broken:** Verify CodePen URLs are correct

---

**Happy customizing!** Make PixelMe your own and inspire your students! 🚀
