# 🎮 PixelMe: Learn Programming by Building Snake!

An engaging JavaScript programming course for kids aged 10-14. Students learn fundamental computer science concepts by building a Snake game incrementally across 7 progressive lessons.

**No prior coding experience required!** ✨

---

## 📚 Course Overview

### What Students Build

A complete **Snake game** that runs in the browser! Starting from rendering a single pixel and progressing to a fully playable game with:
- ✅ Continuous snake movement
- ✅ Arrow key controls
- ✅ Food collection and growth
- ✅ Self-collision detection
- ✅ Game over and restart

### What Students Learn

Through building the game, students master these core programming concepts:

| Lesson | Concept | Skill |
|--------|---------|-------|
| **1** | Bits & Pixels | Render a single point on screen |
| **2** | Variables & Animation | Make it move automatically |
| **3** | Keyboard Input | Control with arrow keys |
| **4** | Arrays & Matrices | Display grids of pixels |
| **5** | Game Loops | Continuous movement & collision |
| **6** | Data Structures | Growing snake body |
| **7** | Game State | Game over & restart |

---

## 🎯 Who Is This For?

**Students:**
- Ages 10-14
- No coding experience needed
- Curious minds who like games!

**Educators:**
- Teachers leading coding clubs
- Parents teaching kids at home
- Tutors working with beginners
- Computer science educators

---

## 🚀 Getting Started

### For Students

1. **Create a CodePen account** (free): [codepen.io/accounts/signup](https://codepen.io/accounts/signup)
2. **Access the lesson collection** (see links below)
3. **Fork the first lesson** to your account
4. **Follow the instructions** in each lesson
5. **Check the solution** when you're done or stuck

### For Educators

1. Review the [Instructor Guide](docs/instructor-guide.md)
2. Set up your CodePen collections (see Setup section below)
3. Share lesson links with students
4. Guide students through concepts using teaching notes

---

## 📖 Lesson Structure

Each lesson includes:

### Starter Code
- Working code from previous lesson
- New functions/concepts introduced
- Clear `TODO` comments showing what to add
- Hints and examples

### Instructions
Embedded in the HTML panel:
- Concept explanation with analogies
- Visual examples
- Step-by-step guidance
- Bonus challenges for fast learners

### Solution Code
- Complete working implementation
- Available for comparison
- Instructor reference

---

## 🔗 CodePen Collections

### Student Collection (Starter Code)
*Students fork these and complete the TODOs*

**Collection URL:** [https://codepen.io/collection/bGWgvj](https://codepen.io/collection/bGWgvj)

- [Lesson 1: Bits and Pixels](https://codepen.io/fnecci/pen/emzPKKM) - Render a single pixel
- [Lesson 2: Variables and Animation](https://codepen.io/fnecci/pen/ogLayKK) - Animated pixel
- [Lesson 3: Keyboard Controls](https://codepen.io/fnecci/pen/VYjEBaL) - Arrow key control
- [Lesson 4: Arrays and Matrices](https://codepen.io/fnecci/pen/qENJyNW) - Pixel grids
- [Lesson 5: Snake Movement](https://codepen.io/fnecci/pen/WbxaKGd) - Continuous movement
- [Lesson 6: Snake Growth](https://codepen.io/fnecci/pen/WbxaKod) - Growing snake
- [Lesson 7: Game Over](https://codepen.io/fnecci/pen/myEzjMR) - Complete game!

### Solutions Collection (Reference)
*For instructors and student comparison*

**Collection URL:** `[Add your solutions collection URL here]`

⚠️ **Keep this private or unlisted** to avoid spoiling students!

---

## ⚙️ Setup Instructions for Educators

### 1. Create CodePen Collections

**Option A: Upload from this repository**
1. In CodePen, create a new collection: "PixelMe Course"
2. Create a new pen for each lesson
3. Copy the contents from this repo:
   - HTML from `codepen-lessons/lesson-X/index.html`
   - CSS from `codepen-lessons/lesson-X/styles.css`
   - JS from `codepen-lessons/lesson-X/script.js`
4. Save each pen
5. Repeat to create "PixelMe Solutions" collection with solution code

**Option B: Fork from official collection**
*Coming soon - we'll provide an official collection you can fork*

### 2. Customize (Optional)

Feel free to adapt:
- Canvas size or colors
- Grid dimensions
- Lesson difficulty
- Instructions wording
- Add your own branding

See [Customization Guide](docs/customization-guide.md) for details.

### 3. Share with Students

Provide students with:
- Link to your starter collection
- Instructions to fork lessons to their accounts
- Timeline for completing lessons

---

## 📅 Recommended Schedule

### Option 1: Weekly Sessions (7 weeks)
- **Week 1:** Lesson 1 (30-45 min)
- **Week 2:** Lesson 2 (45-60 min)
- **Week 3:** Lesson 3 (45-60 min)
- **Week 4:** Lesson 4 (60 min)
- **Week 5:** Lesson 5 (60 min)
- **Week 6:** Lesson 6 (60 min)
- **Week 7:** Lesson 7 + Customization (60-90 min)

### Option 2: Workshop Format (2-3 days)
- **Day 1:** Lessons 1-3 (2-3 hours with breaks)
- **Day 2:** Lessons 4-5 (2-3 hours with breaks)
- **Day 3:** Lessons 6-7 + Extensions (2-3 hours)

### Option 3: Self-Paced
Students work through lessons independently with instructor support as needed.

---

## 🛠️ Technical Requirements

**Required:**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection
- Free CodePen account

**Not required:**
- No software installation
- No downloads
- No command line
- No complex setup

---

## 📂 Repository Structure

```
pixelme/
├── codepen-lessons/          # Starter code for students
│   ├── lesson-1-bits-and-pixels/
│   ├── lesson-2-variables-and-animation/
│   └── ... (lessons 3-7)
├── codepen-solutions/        # Solution code for each lesson
│   ├── lesson-1-bits-and-pixels/
│   └── ... (lessons 2-7)
├── templates/                # Reusable HTML/CSS templates
│   ├── base-template.html
│   └── base-styles.css
├── engine/                   # Game engine reference
│   └── pixelme-engine.js    # Full engine with all functions
├── docs/                     # Documentation
│   ├── instructor-guide.md  # Teaching notes for each lesson
│   ├── testing-checklist.md # Course validation checklist
│   └── customization-guide.md # How to adapt the course
└── README.md                 # This file
```

---

## 🎓 Learning Outcomes

By completing this course, students will be able to:

**Programming Fundamentals:**
- ✅ Understand variables and data types
- ✅ Write and call functions
- ✅ Use conditional statements (`if/else`)
- ✅ Implement loops (`for`, `while`, `requestAnimationFrame`)
- ✅ Work with arrays and 2D arrays
- ✅ Handle user input (keyboard events)

**Game Development Concepts:**
- ✅ Implement game loops and frame rate control
- ✅ Create collision detection systems
- ✅ Manage game state
- ✅ Render graphics on HTML Canvas

**Problem-Solving Skills:**
- ✅ Break complex problems into smaller steps
- ✅ Debug code using console and error messages
- ✅ Test and iterate on solutions
- ✅ Read and understand documentation

---

## 🌟 Extensions & Next Steps

After completing the course, students can:

**Enhance Their Snake Game:**
- Add difficulty levels (speed changes)
- Create obstacles on the grid
- Implement high score tracking (localStorage)
- Add sound effects
- Create different game modes

**Build New Games:**
- Tetris (using matrix concepts)
- Pong (using collision detection)
- Pac-Man (using grid navigation)
- Space Invaders (using arrays of enemies)

**Explore Further:**
- Learn about classes and object-oriented programming
- Explore game frameworks (Phaser.js, p5.js)
- Build multiplayer games with real-time data
- Create mobile-responsive games

---

## 📝 Documentation

- **[Instructor Guide](docs/instructor-guide.md)** - Detailed teaching notes for each lesson
- **[Testing Checklist](docs/testing-checklist.md)** - Validate course before deployment
- **[Customization Guide](docs/customization-guide.md)** - Adapt course to your needs *(coming soon)*

---

## 🤝 Contributing

Found a bug? Have a suggestion? Want to add a lesson? Contributions are welcome!

**Ways to contribute:**
- Report issues or suggest improvements
- Share your customized lessons
- Contribute teaching insights from your classroom
- Translate instructions to other languages

---

## 📜 License

This project is open source and available for educational use. Feel free to:
- Use it in your classroom
- Adapt it for your students
- Share it with other educators

**Attribution appreciated but not required.**

---

## ❓ FAQ

**Q: Do students need to install anything?**  
A: No! Everything runs in the browser using CodePen.

**Q: What if a student gets stuck?**  
A: Each lesson has hints, examples, and a solution pen for reference.

**Q: Can younger kids (8-9) do this course?**  
A: Possibly, with more instructor support. The course is optimized for 10-14.

**Q: Can this be used for remote/virtual teaching?**  
A: Yes! CodePen is perfect for remote learning - students work in their browser, teachers can view their pens.

**Q: How much JavaScript knowledge do instructors need?**  
A: Basic JavaScript understanding is helpful. The instructor guide provides all necessary explanations.

**Q: Is there a certificate or assessment?**  
A: Not built-in, but you could create one based on completed lessons.

---

## 💬 Support

Questions? Suggestions? Reach out:
- Open an issue in this repository
- Tag lessons with `#PixelMeCourse` when sharing
- Share your student success stories!

---

**Ready to start?** Create your CodePen account and dive into Lesson 1! 🚀

Happy coding! 💙
