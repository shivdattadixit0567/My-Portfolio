import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router"; // from react-router-dom
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
        <div className="m-3">
          <h1 className="text-white font-serif font-bold text-3xl">{value}</h1>
        </div>
        <div className="m-3">
          <h1 className="text-white font-serif font-bold text-lg">
            A passionate Full Stack Developer crafting beautiful and functional
            web experiences
          </h1>
        </div>
        <div className="m-3">
          <a
            className="bg-white text-indigo-500 font-bold py-2 px-4 rounded-3xl active:drop-shadow-2xl"
            href="https://drive.google.com/file/d/1d9kQpfDzV5bRzv_Q-RpaMJ9oDZFNmzlN/view?usp=sharing"
            target="_blank"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
