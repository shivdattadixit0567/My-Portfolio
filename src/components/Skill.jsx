import React from "react";

function Skill() {
  return (
    <div
      id="skill"
      className="flex flex-col justify-center items-center h-96 bg-slate-50 drop-shadow-lg"
    >
      <div className="w-[80%] flex flex-col my-10">
        <h1 className="text-3xl font-bold text-indigo-500">My Skills</h1>
        <div className="mt-10 flex justify-between">
          <div className="w-36 h-36 bg-slate-50 drop-shadow-2xl">
            <h1 className="text-xl font-bold m-2">JavaScript</h1>
            <p className="m-2">
              Expert in modern JavaScript, including ES6+ features
            </p>
          </div>
          <div className="w-36 h-36 bg-slate-50 drop-shadow-2xl">
            <h1 className="text-xl font-bold m-2">Nodejs</h1>
            <p className="m-2">
              Server-side development with Node.js and Express
            </p>
          </div>
          <div className="w-36 h-36 bg-slate-50 drop-shadow-2xl">
            <h1 className="text-xl font-bold m-2">Database</h1>
            <p className="m-2">Experience with SQL and NoSQL databases</p>
          </div>
          <div className="w-36 h-36 bg-slate-50 drop-shadow-2xl">
            <h1 className="text-xl font-bold m-2">React</h1>
            <p className="m-2">
              Expert in modern JavaScript, including ES6+ features
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
