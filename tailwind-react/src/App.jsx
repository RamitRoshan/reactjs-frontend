import { useState } from "react";

function App() {

  const [open, setOpen] = useState(false);

  return (

    <div>
      {/*Navbar*/}
      <div className="flex items-center justify-between bg-slate-900 text-white p-4 ">
      <div className="font-bold">Logo</div>

      {/*Desktop Nav*/}
      <div className="hidden sm:flex gap-2">
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
      </div>

      <button className="leading-[0.4] text-xl font-bold cursor-pointer sm:hidden"
              onClick={() => setOpen(!open)}
      >
        <span className="block">—</span>
        <span className="block">—</span>
        <span className="block">—</span>
      </button>

     </div>

      {/*Mobile Nav*/}
      {open && (
        <div className="flex flex-col items-center gap-2 bg-slate-900 text-white p-4 sm:hidden">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </div> 
      )} 

     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-white p-6 gap-6 text-center font-semibold text-2xl sm:text-sm">
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
