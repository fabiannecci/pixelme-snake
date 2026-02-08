# PixelMe Course Testing Checklist

## Pre-Launch Testing

This checklist helps validate the course before deploying to students.

### Technical Testing

#### Lesson 1: Bits and Pixel Rendering
- [ ] HTML renders correctly in CodePen
- [ ] CSS styles apply (dark theme, canvas border)
- [ ] Canvas element is visible (200x200)
- [ ] Starter code has clear TODO comments
- [ ] Solution code renders a single pixel at (10, 10)
- [ ] Navigation links are present (Next Lesson)

#### Lesson 2: Variables and Animation
- [ ] Starter code includes Lesson 1 solution
- [ ] Animation loop template is clear
- [ ] Solution shows smooth pixel movement
- [ ] Pixel wraps around at edges
- [ ] Frame rate control works (not too fast)
- [ ] Navigation links work (Previous + Next)

#### Lesson 3: Keyboard Controls
- [ ] Starter code includes rendering functions
- [ ] Event listener example is clear
- [ ] Solution responds to all arrow keys
- [ ] Arrow keys don't scroll the page (preventDefault)
- [ ] Boundary checks prevent out-of-bounds
- [ ] Navigation links work

#### Lesson 4: Arrays and Matrices
- [ ] 2D array example is clear
- [ ] Nested loop template is provided
- [ ] Solution renders a visible pattern
- [ ] Pattern is centered on canvas
- [ ] Array indexing is explained
- [ ] Navigation links work

#### Lesson 5: Snake Movement
- [ ] Game loop with frame rate control works
- [ ] Direction changes smoothly
- [ ] Snake wraps around edges
- [ ] Food appears in random position
- [ ] Food respawns after collision
- [ ] Both colors are visible (snake + food)
- [ ] Navigation links work

#### Lesson 6: Snake Growth
- [ ] Snake starts with 3 segments
- [ ] All segments render
- [ ] Snake grows when eating food
- [ ] Movement looks smooth (add head, remove tail)
- [ ] No duplicate segments
- [ ] Navigation links work

#### Lesson 7: Game Over
- [ ] Self-collision detection works
- [ ] Game stops on collision
- [ ] "Game Over" message displays
- [ ] Restart (R key) resets game
- [ ] Score displays and updates
- [ ] Final game is fully playable
- [ ] Navigation links work

---

## User Testing with Target Age Group (10-14 years)

### Recommended Testing Approach

If possible, test with 3-5 students in the target age range before full deployment:

#### Session 1: Lessons 1-2 (Pilot Test)
**Observe:**
- [ ] Can students navigate CodePen interface?
- [ ] Do they understand the three panels (HTML/CSS/JS)?
- [ ] Can they find and complete the TODO tasks?
- [ ] Time to complete: Lesson 1 ____ min, Lesson 2 ____ min
- [ ] Are instructions clear or confusing?
- [ ] What questions do they ask most frequently?

**Ask Students:**
- "What was confusing?"
- "What was fun?"
- "Was anything too easy or too hard?"

#### Session 2: Lessons 3-4
**Observe:**
- [ ] Do students understand event listeners concept?
- [ ] Can they debug their own keyboard handler?
- [ ] Do they grasp array indexing (0-based)?
- [ ] Time to complete: Lesson 3 ____ min, Lesson 4 ____ min
- [ ] Are students engaged or frustrated?

**Adjust:**
- Add more hints if students are stuck
- Remove scaffolding if it's too easy
- Clarify confusing instructions

#### Session 3: Lessons 5-7
**Observe:**
- [ ] Do students understand the shift from direct control to directional control?
- [ ] Can they conceptualize the snake as an array?
- [ ] Do they celebrate completing the full game?
- [ ] Time to complete: Lesson 5 ____ min, Lesson 6 ____ min, Lesson 7 ____ min
- [ ] What do they want to add/customize?

**Ask Students:**
- "Would you show this game to friends/family?"
- "What would you add to the game?"
- "Did you learn anything new about programming?"

---

## Self-Testing Alternative (If No Test Group Available)

If you can't test with students, do this yourself:

### Code Walkthrough
- [ ] Step through each lesson as if you're a beginner
- [ ] Only look at instructions, not solution
- [ ] Try to complete TODOs without peeking
- [ ] Note any confusing or ambiguous instructions

### Peer Review
- [ ] Have another educator review the lessons
- [ ] Ask: "Is this appropriate for 10-14 year olds?"
- [ ] Get feedback on pacing and difficulty curve

### Automated Checks
- [ ] All CodePen links work
- [ ] No broken images or resources
- [ ] All lessons use consistent styling
- [ ] Code is syntactically correct (no console errors)

---

## Post-Testing Action Items

After testing, update:
- [ ] Lesson instructions based on common questions
- [ ] Starter code TODO comments for clarity
- [ ] Instructor guide with common student issues
- [ ] README with realistic time estimates

---

## Feedback Collection Template

Use this during testing sessions:

```
Lesson: ____
Student Age: ____
Date: ____

What worked well:
- 
- 

What was confusing:
- 
- 

Time to complete: ____ minutes

Suggested improvements:
- 
- 

Student quote:
"______________________________"
```

---

## Success Criteria

The course is ready when:
- [ ] All technical tests pass
- [ ] Instructions are clear (tested with real students OR peer-reviewed)
- [ ] Each lesson builds naturally from the previous
- [ ] Students can complete a lesson in 45-60 minutes
- [ ] Final game is playable and fun
- [ ] Students want to customize and extend the game

---

**Note:** Testing with real students is ideal but not mandatory. If unavailable, thorough self-testing and peer review can validate the course quality.
