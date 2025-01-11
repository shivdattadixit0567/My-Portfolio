import React from "react";
import { Link } from "react-router";
import AnchorLink from "react-anchor-link-smooth-scroll";
function Navbar() {
  const [open, setOpen] = React.useState(false);
  const show = () => {
    setOpen(!open);
  };
  return (
    <div className="sticky top-0 z-10">
      <div className="flex md:justify-around bg-white md:h-[4rem] md:items-center justify-between p-2 h-[3rem]">
        <img src="logo.jpg" className="w-10 h-10 m-10" alt="" />
        <div className="w-28 md:w-auto">
          <button onClick={show} className="md:hidden pl-3">
            <img className="w-5 h-5" src="/menu-burger.png" alt="" />
          </button>
          {!open ? (
            <div className="bg-white flex flex-col md:flex-row md:gap-8">
              <AnchorLink
                className="w-full hover:bg-indigo-500 hover:text-white md:p-1 active:drop-shadow-2xl"
                href="#home"
              >
                <button className="p-2">Home</button>
              </AnchorLink>
              <AnchorLink
                className="w-full hover:bg-indigo-500 hover:text-white md:p-1 active:drop-shadow-2xl"
                href="#about"
              >
                <button className="p-2">About</button>
              </AnchorLink>
              <AnchorLink
                className="w-full hover:bg-indigo-500 hover:text-white md:p-1 active:drop-shadow-2xl"
                href="#skill"
              >
                <button className="p-2">Skill</button>
              </AnchorLink>
              <AnchorLink
                className="w-full hover:bg-indigo-500 hover:text-white md:p-1 active:drop-shadow-2xl"
                href="#project"
              >
                <button className="p-2">Project</button>
              </AnchorLink>
              <AnchorLink
                className="w-full hover:bg-indigo-500 hover:text-white md:p-1 active:drop-shadow-2xl"
                href="#contact"
              >
                <button className="p-2">Contact</button>
              </AnchorLink>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
