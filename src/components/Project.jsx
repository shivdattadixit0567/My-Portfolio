import React from "react";

function Project() {
  return (
    <div
      id="project"
      className="flex justify-center items-center drop-shadow-2xl h-auto mb-16"
    >
      <div className="w-[80%]">
        <h1 className="text-3xl font-bold text-indigo-500 mt-20">Projects</h1>
        <div className="md:flex md:justify-between">
          <div className="mt-10 flex justify-between">
            <div className="w-80 h-21rem hover:drop-shadow-2xl bg-slate-50 pl-4 pr-4">
              <img
                className="w-72 h-60 rounded-3xl p-1"
                src="https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Project 1"
              />
              <h1 className="font-bold p-1">Mern-Expense Tracker Platform</h1>
              <p className="p-1">
                A full-stack expense solution built with MERN stack
              </p>
              <div className="p-1 flex justify-between">
                <a
                  className="inline-block"
                  href="https://github.com/shivdattadixit0567/Expense-Tracker"
                  target="_blank"
                >
                  View
                </a>
                <a
                  href="https://expense-tracker-hr7a.onrender.com/"
                  target="_blank"
                >
                  {" "}
                  Live
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-between">
            <div className="w-80 h-21rem hover:drop-shadow-2xl bg-slate-50 pl-4 pr-4">
              <img
                className="w-72 h-60 rounded-3xl p-1"
                src="https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Project 1"
              />
              <h1 className="font-bold p-1">Blog App</h1>
              <p className="p-1">
                A Blog application with user authentication and CRUD operations
              </p>
              <div className="p-1 flex justify-between">
                <a
                  className="inline-block"
                  href="https://github.com/shivdattadixit0567/FullStack-Blog-App"
                  target="_blank"
                >
                  View
                </a>
                <a
                  href="https://fullstack-blog-app-v8ng.onrender.com/"
                  target="_blank"
                >
                  {" "}
                  Live
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-between">
            <div className="w-80 h-21rem hover:drop-shadow-2xl bg-slate-50 pl-4 pr-4">
              <img
                className="w-72 h-60 rounded-3xl p-1"
                src="https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Project 1"
              />
              <h1 className="font-bold p-1">My Portfolio</h1>
              <p className="p-1">
                A portfolio website built with HTML, CSS, and JavaScript
              </p>
              <div className="p-1 flex justify-between">
                <a
                  className="inline-block"
                  href="https://github.com/shivdattadixit0567/My-Portfolio"
                  target="_blank"
                >
                  View
                </a>
                <a
                  href="https://my-portfolio-pi-teal-48.vercel.app/"
                  target="_blank"
                >
                  {" "}
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
