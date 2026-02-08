## Context

PixelMe is an educational project targeting kids aged 10-14 with zero programming experience. The course uses CodePen as the collaborative JavaScript platform, allowing students to see immediate visual results as they learn. Each lesson builds incrementally on the previous lesson's code, culminating in a fully functional Snake game by Lesson 7.

## Goals / Non-Goals

**Goals:**
- Create modular, reusable lesson structure that works in CodePen
- Build a simple game engine that reveals concepts progressively (no upfront complexity)
- Ensure each lesson's solution code becomes the next lesson's starter code
- Keep code beginner-friendly (simple functions, clear variable names, minimal abstraction)
- Make pixel rendering visual and immediate for engagement

**Non-Goals:**
- Build a production-ready game engine (pedagogical clarity over performance)
- Support platforms beyond CodePen (design is CodePen-specific)
- Create automated grading or validation system
- Implement advanced Snake features (powerups, levels, AI) unless they serve learning objectives

## Decisions

**CodePen Structure:**
- Use a single CodePen collection with 7 separate pens (one per lesson)
- Each pen has three sections:
  - HTML: Canvas element + lesson instructions
  - CSS: Pixel/grid styling
  - JS: Starter code (students modify this)
- Maintain a "solutions" fork collection for instructors

**Game Engine Architecture:**
- No classes or OOP (too advanced for beginners)
- Pure functions where possible
- Global state object for game state (simple, inspectable in console)
- Progressive feature unlock: Lesson N only uses concepts taught up to Lesson N

**Code Progression Strategy:**
- Lesson N solution = Lesson N+1 starter (with minor scaffolding additions)
- Comments mark "TODO" sections where students add code
- Instructor guide explains what to add and why

**Rendering Approach:**
- Use HTML Canvas API (immediate visual feedback)
- Each pixel = filled rectangle on canvas
- Grid system in pixels (e.g., 20x20 grid, 10px per cell = 200x200 canvas)

## Risks / Trade-offs

- **CodePen limitations (no file imports)** → Mitigation: Keep all code in single JS file per lesson
- **Students diverge from solution path** → Mitigation: Provide clear incremental steps, solution code for reference
- **Lesson complexity escalation too steep** → Mitigation: Test with target age group, adjust pacing
- **Canvas API unfamiliar to educators** → Mitigation: Include instructor guide with Canvas basics
