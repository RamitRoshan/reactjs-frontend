# Tailwind React Practice

## 🚀 Project Overview
This project is a **practice workspace for Tailwind CSS** integrated with **React**.  
The goal of this project is to build **responsive, modern, and reusable UI components** using Tailwind CSS in a React environment.  

It demonstrates my ability to:
- Build **component-based UIs** with React
- Apply **Tailwind CSS utility classes** efficiently
- Create **mobile-first and responsive designs**
- Structure projects in a clean and professional manner

---

## 🎨 Technologies Used
- **React** - JavaScript library for building interactive UIs
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Vite** - Fast development build tool
- **PostCSS & Autoprefixer** - For Tailwind CSS compilation

---

## 📐 Tailwind CSS Theory & Usage

Tailwind CSS is a **utility-first CSS framework** where you use pre-defined classes instead of writing custom CSS.  
It is **highly customizable**, **mobile-first**, and ideal for rapid development.

### Key Concepts
1. **Utility Classes** – Small, single-purpose classes like:
   - `bg-blue-500` → background color
   - `text-xl` → font size
   - `p-4` → padding
   - `m-2` → margin
2. **Responsive Design** – Tailwind uses **breakpoint prefixes**:
   - `sm:` → Small devices (≥640px)
   - `md:` → Medium devices (≥768px)
   - `lg:` → Large devices (≥1024px)
   - `xl:` → Extra large devices (≥1280px)
   - Example:
     ```html
     <div class="text-sm md:text-lg lg:text-xl">
       Responsive Text
     </div>
     ```
3. **Flexbox & Grid Utilities**
   - Flex: `flex`, `flex-col`, `items-center`, `justify-between`
   - Grid: `grid`, `grid-cols-3`, `gap-4`
4. **Hover, Focus, & State Variants**
   - Example: `hover:bg-blue-700` or `focus:ring-2`
5. **Dark Mode**
   - Example: `dark:bg-gray-800 dark:text-white`
6. **Mobile-First Approach**
   - Tailwind applies **default styles to mobile devices**, then overrides for larger screens:
     ```html
     <div class="bg-white p-4 sm:bg-gray-100 md:bg-gray-200 lg:bg-gray-300">
       Responsive Box
     </div>
     ```

7. **grid and flex set the display type**

   - grid → display: grid
   - flex → display: flex

   - Utilities like:

      - grid-cols-2
      - gap-4
      - justify-between
      - items-center
  
   **only work if the element is already grid or flex**

   - Without grid or flex, the element stays display: block, so layout utilities are ignored.

> First tell the browser how to layout (grid / flex), then tell it what to do (cols, gap, align)

<br>

>Tailwind layout utilities depend on display: grid or display: flex, so we must enable the layout first.

<br>

**❌ Wrong**
       
      
        <div className="grid-cols-2">

      
**✅ Right**
        
        <div className="grid grid-cols-2">

---


## To implement dark mode - go to `index.css`
- It will do dark, where-ever we use this
  
```
@custom-variant dark (&:where(.dark, .dark *));
```


<br>


## **Installation process:**

1. Install Tailwind CSS 

```
npm install tailwindcss @tailwindcss/vite
```
2. come to `vite.config.js`

- here Import `@tailwindcss/vite` and `tailwindcss` in the plugins.

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

```

3. Go to `index.css` file
- import the tailwind css inside this files 

```
@import "tailwindcss";
```


---
## 📂 Folder Structure

```
tailwind-react/
├─ public/
├─ src/
│ ├─ components/ # Reusable React components
│ ├─ pages/ # Page-level components
│ ├─ App.jsx # Main React component
│ └─ index.css # Tailwind input CSS
├─ .gitignore
├─ package.json
└─ README.md

```

---

## ⚡ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/ramitroshan/tailwind-react.git
cd tailwind-react
2. Install dependencies
npm install
3. Start the development server
npm run dev