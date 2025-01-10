import React from "react";

function Project() {
  return (
    <div
      id="project"
      className="flex justify-center items-center drop-shadow-2xl h-auto mb-16"
    >
      <div className="w-[80%]">
        <h1 className="text-3xl font-bold text-indigo-500 mt-20">Projects</h1>
        <div className="flex justify-between">
          <div className="mt-10 flex justify-between">
            <div className="w-80 h-21rem hover:drop-shadow-2xl bg-slate-50 pl-3 pr-3">
              <img
                className="w-72 h-60 rounded-3xl p-1"
                src="https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Project 1"
              />
              <h1 className="font-bold p-1">Mern-Expense Tracker Platform</h1>
              <p className="p-1">
                A full-stack expense solution built with MERN stack
              </p>
              <div className="flex p-1">
                <img
                  className="w-7 h-7"
                  src="https://cdn-icons-png.flaticon.com/512/6928/6928929.png"
                ></img>
                <a
                  href="https://github.com/shivdattadixit0567/Expense-Tracker"
                  target="_blank"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-between">
            <div className="w-80 h-21rem hover:drop-shadow-2xl bg-slate-50 pl-3 pr-3">
              <img
                className="w-72 h-60 rounded-3xl p-1"
                src="https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Project 1"
              />
              <h1 className="font-bold p-1">Blog App</h1>
              <p className="p-1">
                A Blog application with user authentication and CRUD operations
              </p>
              <div className="flex p-1">
                <img
                  className="w-7 h-7"
                  src="https://cdn-icons-png.flaticon.com/512/6928/6928929.png"
                ></img>
                <a
                  href="https://github.com/shivdattadixit0567/FullStack-Blog-App"
                  target="_blank"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-between">
            <div className="w-80 h-21rem hover:drop-shadow-2xl bg-slate-50 pl-3 pr-3">
              <img
                className="w-72 h-60 rounded-3xl p-1"
                src="https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Project 1"
              />
              <h1 className="font-bold p-1">My Portfolio</h1>
              <p className="p-1">
                A portfolio website built with HTML, CSS, and JavaScript
              </p>
              <div className="flex p-1">
                <img
                  className="w-7 h-7"
                  src="https://cdn-icons-png.flaticon.com/512/6928/6928929.png"
                ></img>
                <a
                  href="https://github.com/shivdattadixit0567/My-Portfolio"
                  target="_blank"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
