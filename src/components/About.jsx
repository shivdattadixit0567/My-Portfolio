import React from "react";
// import MyImage-min.jpg from "./MyImage-min.jpg";
function About() {
  return (
    <div
      id="about"
      className="flex justify-center items-center h-96 drop-shadow-lg"
    >
      <div className="w-[80%] flex justify-between my-10">
        <div className="w-80 h-72">
          <img
            className="w-full h-full rounded-3xl"
            src="MyImage-min.jpg"
            alt=""
          />
        </div>
        <div className="w-[60%] rounded-2xl bg-white">
          <div className="p-5">
            <h1 className="text-3xl font-bold">About Me</h1>
            <p className="text-lg mt-5">
              I am a Full Stack Developer with a strong experience in building
              scalable web applications. I specialize in JavaScript technologies
              across the entire stack and have a passion for creating elegant
              solutions to complex problems.
            </p>
            <p className="text-lg mt-5">
              When I am not coding, you can find me contributing to open-source
              projects, writing technical articles, or exploring new
              technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
