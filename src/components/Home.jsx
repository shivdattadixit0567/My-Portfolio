import React from "react";
import { useState, useEffect, useRef } from "react";
function Home() {
  let str = "Hi, I am SHIV DATTA DIXIT . . .";
  const [value, setValue] = useState("");
  const count = useRef(1);

  useEffect(() => {
    setTimeout(() => {
      {
        count.current < str.length
          ? (count.current = count.current + 1)
          : (count.current = 1);
      }
      setValue(str.slice(0, count.current));
    }, 300);
  }, [value, str]);
  return (
    <div id="home" className="mix-blend-multiply bg-white">
      <div className="mix-blend-multiply bg-indigo-500   h-[93vh] flex flex-col items-center justify-center">
        <div>
          <h1 className="text-white font-serif font-bold text-3xl">{value}</h1>
        </div>
        <div>
          <h1 className="text-white font-serif font-bold text-lg">
            A passionate Full Stack Developer crafting beautiful and functional
            web experiences
          </h1>
        </div>
        <div className="mt-5">
          <button className="bg-white text-indigo-500 font-bold py-2 px-4 rounded-3xl">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
