# PixelMe Instructor Guide

## Course Overview

**PixelMe** is a 7-lesson JavaScript programming course for kids aged 10-14 with no prior coding experience. Students build a Snake game incrementally, learning fundamental CS concepts through hands-on coding in CodePen.

**Target Age:** 10-14 years old  
**Prerequisites:** None (designed for complete beginners)  
**Platform:** CodePen (free, browser-based, no installation required)  
**Duration:** 7 lessons (approximately 45-60 minutes each)

---

## Teaching Philosophy

### Progressive Disclosure
Each lesson introduces **one or two new concepts** and builds on previous lessons. Students never face overwhelming complexity - they always have working code from the previous lesson to start with.

### Immediate Visual Feedback
Every concept is tied to visible results on the canvas. This keeps students engaged and helps them understand abstract concepts (variables, loops, arrays) through concrete visual outcomes.

### Scaffolded Learning
Starter code includes:
- Working functions from previous lessons
- TODO comments showing where to add code
- Hints about what to implement
- Example code patterns in instructions

---

## Lesson-by-Lesson Teaching Notes

### Lesson 1: Bits and Pixel Rendering

**Concepts:** Bits, Cartesian coordinates, function calls  
**Goal:** Render a single pixel at position (10, 10)

**Teaching Tips:**
- Start by explaining bits as the simplest form of data (on/off, 1/0, black/white)
- Use physical analogies: light switch, yes/no question
- Draw the Cartesian grid on a whiteboard to explain (x, y) coordinates
- Emphasize: x = horizontal, y = vertical, both start at 0
- Show how to call `renderPixel()` - this is their first function call!

**Common Issues:**
- Students may confuse x and y → Remind: "x goes across, y goes down"
- Off-by-one errors → Explain: grid is 0-19, not 1-20

**Extensions for Fast Learners:**
- Render multiple pixels to make a pattern (smiley face, initials)
- Change the pixel color by modifying `PIXEL_COLOR`

---

### Lesson 2: Variables and Animation

**Concepts:** Variables, assignment, arithmetic operations, loops, `requestAnimationFrame`  
**Goal:** Animate a pixel moving across the screen

**Teaching Tips:**
- Explain variables as "labeled boxes" that hold values
- Show `x = x + 1` step-by-step: "Take current x, add 1, put result back in x"
- Explain loops as "do this over and over"
- Compare `requestAnimationFrame` to a flipbook - many frames create motion

**Common Issues:**
- Forgetting to clear canvas → Pixel leaves a trail (can be fun to show!)
- Loop resets missing → Pixel disappears after reaching edge
- Students may struggle with `x = x + 1` notation → Use real numbers: "if x is 5, then x = 5 + 1, so x becomes 6"

**Extensions:**
- Change speed by modifying the increment (x = x + 2)
- Make pixel bounce back when it hits edge
- Diagonal movement (update both x and y)

---

### Lesson 3: Keyboard Controls

**Concepts:** Event listeners, conditionals (`if`), user input  
**Goal:** Control pixel with arrow keys

**Teaching Tips:**
- Explain events as "things that happen" - key presses, mouse clicks, etc.
- Show `addEventListener` as "tell the computer to listen for something"
- Introduce `if` statements as "check if something is true, then do something"
- Emphasize the difference between `=` (assignment) and `===` (comparison)

**Common Issues:**
- Arrow keys scroll the page → Use `event.preventDefault()`
- Students may use wrong comparison (`=` instead of `===`)
- Pixel moves off-screen → Add boundary checks

**Extensions:**
- Add boundary collision (pixel stops at edges)
- Add WASD keys as alternative controls
- Change pixel color when moving different directions

---

### Lesson 4: Arrays and Matrices

**Concepts:** Arrays, nested arrays (2D arrays), nested loops  
**Goal:** Render a grid pattern from a 2D array

**Teaching Tips:**
- Start with simple 1D array: `[1, 2, 3]`
- Explain indexing: "first item is [0], not [1]"
- Show 2D array as "array of arrays" - like rows in a spreadsheet
- Draw a grid on paper and number the rows/columns
- Explain nested loops: "for each row, go through each column"

**Common Issues:**
- Confusion about row vs column → Remind: "first index is y (row), second is x (column)"
- Loop indices confused → Use meaningful names: `y` for rows, `x` for columns

**Extensions:**
- Create more complex patterns (checkerboard, diamond, letters)
- Allow students to design their own patterns
- Animate the pattern (shift it Left/right)

---

### Lesson 5: Snake Movement and Collision

**Concepts:** Game loops, continuous movement, collision detection  
**Goal:** Single-pixel snake that moves continuously and eats food

**Teaching Tips:**
- Explain difference: previous lessons had direct control, Snake has directional control
- Emphasize: arrow keys **change direction**, not move directly
- Explain game loop pattern: **update state → render → repeat**
- Show collision as "two objects at same position"

**Common Issues:**
- Students expect immediate movement like Lesson 3 → Explain continuous motion
- Direction changes not working → Check if movement code is in loop
- Food doesn't respawn → Verify random position code

**Extensions:**
- Add walls (game over if hitting edge instead of wrapping)
- Increase speed after eating food
- Add score counter

---

### Lesson 6: Snake Growth

**Concepts:** Data structures, arrays representing entities, array methods (`unshift`, `pop`)  
**Goal:** Multi-segment snake that grows when eating food

**Teaching Tips:**
- This is a **major conceptual shift**: snake becomes an array of segments
- Draw the snake array on board: show head, body, tail
- Explain movement: "add new head, remove tail" = looks like moving forward
- Show growth: "add new head, DON'T remove tail" = snake gets longer

**Common Issues:**
- Confusion about head vs tail → Always clarify: head is `snake[0]`
- Growth not working → Check that `snake.pop()` is only called when NOT eating food
- All segments render same color → This is OK (can enhance with different color for head if desired)

**Extensions:**
- Color the head differently
- Show score as snake length
- Add visual food counter

---

### Lesson 7: Game Over and Self-Collision

**Concepts:** Self-collision detection, game state management, restart logic  
**Goal:** Complete Snake game with game over on self-collision

**Teaching Tips:**
- Explain self-collision: "snake can't run into itself"
- Show the check: "compare head position to every body segment"
- Introduce game state: `gameOver` boolean controls whether game continues
- Explain restart: "reset all variables to starting values"

**Common Issues:**
- Self-collision triggers immediately → Make sure loop starts at index 1, not 0
- Game still runs after game over → Check `if (gameOver) return` at start of update
- Restart doesn't work → Verify all game variables are reset

**Extensions:**
- Add high score tracking (localStorage)
- Add difficulty levels (different speeds)
- Add obstacles on the grid
- Create multiple food items

---

## Course Delivery Tips

### Setup (First Session)
1. Have students create free CodePen accounts
2. Show how to fork a pen
3. Explain the three panels: HTML, CSS, JS
4. Test that everyone can see their canvas

### Pacing
- **Don't rush** - let students experiment
- **Expect questions** - some will want to modify code in creative ways
- **Celebrate bugs** - they're learning opportunities
- **Show solutions only after attempts** - let students struggle productively

### Differentiation
- **Faster learners:** Provide extension challenges, encourage creativity
- **Struggling students:** Pair programming, live coding demonstrations, break down steps further

### Assessment (Informal)
- Can student explain what their code does?
- Can student predict what will happen if they change a value?
- Can student debug simple errors (missing semicolon, typo)?

---

## Technical Requirements

### For Students:
- Web browser (Chrome, Firefox, Safari, Edge)
- Internet connection
- CodePen account (free)

### For Instructor:
- Projector or screen sharing for demonstrations
- Whiteboard for drawing concepts
- Solution pens prepared in advance

---

## Common Debugging Strategies

Teach students to:
1. **Check the console** for error messages (open browser DevTools)
2. **Read error messages** - they often tell you exactly what's wrong
3. **Add `console.log()`** to see variable values
4. **Comment out code** to isolate problems
5. **Compare to solution** when stuck

---

## Additional Resources

- **Canvas API Documentation:** https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
- **JavaScript Basics:** https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps
- **CodePen Tips:** https://blog.codepen.io/documentation/

---

## Contact & Support

For questions about this course, refer to the [README.md](../README.md) for customization options and additional details.

**Happy teaching! 🎓**
