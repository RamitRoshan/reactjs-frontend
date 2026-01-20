# Frontend Machine Coding Practice (Live Interview Oriented)

This repository contains solutions to **most frequently asked frontend machine coding questions** that companies ask in **live interviews** (CodeSandbox / StackBlitz / CoderPad).

All problems are implemented using **React + JavaScript** and focus on **logic, state management, and component structure** rather than styling.

---

**Environment:**

- Open CodeSandbox / editor
- Time: 30–45 minutes
- React + JS
- No backend (or fake API)

---

## 1. Todo App
**Requirements:**
- Add todo
- Delete todo
- Mark todo as completed
- Show completed and pending todos

**Common Variations:**
- Filter todos
- Edit todo
- Persist data using localStorage

**Concepts Tested:**
- useState
- List rendering
- Controlled components
- Conditional rendering

---

## 2. Search & Filter List
**Requirements:**
- Display a list of items
- Search input filters list in real time

**Common Variations:**
- Case-insensitive search
- Multiple filters (category, price)

**Concepts Tested:**
- Input handling
- Array filtering
- State updates

---

## 3. Counter with Constraints
**Requirements:**
- Increment and decrement counter
- Set minimum and maximum limit
- Disable buttons at limits

**Concepts Tested:**
- State management
- Conditional rendering
- Button control logic

---

## 4. Tabs Component
**Requirements:**
- Create tab navigation
- Show content based on active tab

**Common Variations:**
- Dynamic tabs from array
- Highlight active tab

**Concepts Tested:**
- State-driven UI
- Component reusability

---

## 5. Accordion Component
**Requirements:**
- Expand and collapse sections
- Only one section open at a time

**Concepts Tested:**
- State logic
- Conditional rendering

---

## 6. Modal / Popup Component
**Requirements:**
- Open modal on button click
- Close modal using close button or outside click

**Common Variations:**
- Reusable modal component
- Pass dynamic content via props

**Concepts Tested:**
- Conditional rendering
- Event handling
- Component composition

---

## 7. Form with Validation
**Requirements:**
- Create form with name, email, password
- Validate inputs
- Show error messages

**Concepts Tested:**
- Controlled components
- Validation logic
- Error handling

---

## 8. Pagination Component
**Requirements:**
- Display list with pagination
- Next and previous buttons

**Common Variations:**
- Change page size
- Disable buttons at boundaries

**Concepts Tested:**
- State management
- List slicing
- UI logic

---

## 9. Fetch and Render API Data
**Requirements:**
- Fetch data from public API
- Render list
- Show loading and error states

**Concepts Tested:**
- useEffect
- Async/await
- Conditional rendering

**API usually:**
- Users/products/posts

---

## 10. Star Rating Component
**Requirements:**
- Display star rating
- Highlight stars on click

**Concepts Tested:**
- Event handling
- Conditional UI rendering

---

## 11. Debounced Search Input
**Requirements:**
- Input Trigger search after delay
- Prevent API call on every keystroke

**Concepts Tested:**
- Debouncing
- useEffect cleanup
- JavaScript timing functions

---

## 12. Sort List Component
**Requirements:**
- Sort list by name, price, or date
- Toggle ascending and descending order

**Concepts Tested:**
- Array sorting
- State-driven UI

---

## 13. Checkbox Select All
**Requirements:**
- Select individual items
- Select or deselect all items

**Concepts Tested:**
- State synchronization
- Checkbox logic

---

## 14. Infinite Scroll
**Requirements:**
- Load more data when user scrolls
- Append new data to existing list

**Concepts Tested:**
- Scroll event handling
- State updates
- Performance basics

---

## 15. Countdown Timer
**Requirements:**
- Start, pause, and reset timer

**Concepts Tested:**
- useEffect
- setInterval
- Cleanup logic

---

## Notes
- All problems are practiced in **live coding environment**
- Focus is on **logic, clarity, and interview readiness**
- Styling is kept minimal



##### Folder Structure (Inside machine-coding/)
```
machine-coding/
 ├── README.md
 ├── todo-app/
 ├── search-filter/
 ├── tabs/
 ├── accordion/
 ├── modal/
 ├── form-validation/
 ├── pagination/
 ├── api-fetch/
 ├── star-rating/
 ├── debounce-search/
 ├── select-all-checkbox/
 ├── infinite-scroll/
 └── countdown-timer/
```

# 🔥 FINAL RULE

Practice in CodeSandbox, not VS Code

Why?

Same environment as interview

No comfort shortcuts

Real pressure simulation