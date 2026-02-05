import { useState } from "react";

function App() {

  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  return (

    <div className={`${theme} min-h-screen bg-white dark:bg-slate-900 dark:text-white`}>
      
      {/*Navbar*/}
      <div className="flex items-center justify-between p-4 ">
      <div className="font-bold">Logo</div>

      {/*Desktop Nav*/}
      <div className="hidden sm:flex gap-2">
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
        
        <button 
          className="text-xl cursor-pointer"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>

      <button className="text-xl cursor-pointer sm:hidden"
              onClick={() => setOpen(!open)}
      >
        ☰
      </button>

     </div>

      {/*Mobile Nav*/}
      {open && (
        <div className="flex flex-col items-center gap-2  text-slate-900 dark:bg-slate-900 dark:text-white p-4 sm:hidden">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>

          <button 
              className="text-xl cursor-pointer sm:hidden"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

        </div> 
      )} 

     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-white dark:text-white p-6 gap-6 text-center font-semibold text-2xl sm:text-sm">
      <div className="bg-slate-500 p-4 rounded hover:bg-slate-800 hover:scale-105 transition-all duration-300">Feature One</div>
      <div className="bg-slate-500 p-4 rounded hover:bg-slate-800 hover:scale-105 transition-all duration-300">Feature Two</div>
      <div className="bg-slate-500 p-4 rounded hover:bg-slate-800 hover:scale-105 transition-all duration-300">Feature Three</div>
      <div className="bg-slate-500 p-4 rounded hover:bg-slate-800 hover:scale-105 transition-all duration-300">Feature Four</div>
      <div className="bg-slate-500 p-4 rounded hover:bg-slate-800 hover:scale-105 transition-all duration-300">Feature Five</div>
      <div className="bg-slate-500 p-4 rounded hover:bg-slate-800 hover:scale-105 transition-all duration-300">Feature Six</div>
     </div>

    </div>
  );

}

export default App
