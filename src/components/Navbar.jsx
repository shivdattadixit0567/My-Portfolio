import React from "react";
import { Link } from "react-router";
import AnchorLink from "react-anchor-link-smooth-scroll";
function Navbar() {
  return (
    <div className="sticky top-0 z-10">
      <div className="flex justify-around bg-white h-[3rem] items-center">
        <h1>logo</h1>
        <ul className="flex">
          <li className="mr-14">
            <AnchorLink href="#home">
              <button className="hover:bg-indigo-500 hover:text-white hover:rounded-3xl">
                Home
              </button>
            </AnchorLink>
          </li>
          <li className="mr-14">
            <AnchorLink href="#about">
              <button className="hover:bg-indigo-500 hover:text-white hover:rounded-3xl">
                About
              </button>
            </AnchorLink>
          </li>
          <li className="mr-14">
            <AnchorLink href="#skill">
              <button className="hover:bg-indigo-500 hover:text-white hover:rounded-3xl">
                Skill
              </button>
            </AnchorLink>
          </li>
          <li className="mr-14">
            <AnchorLink href="#project">
              <button className="hover:bg-indigo-500 hover:text-white hover:rounded-3xl">
                Project
              </button>
            </AnchorLink>
          </li>
          <li className="mr-14">
            <AnchorLink href="#contact">
              <button className="hover:bg-indigo-500 hover:text-white hover:rounded-3xl">
                Contact
              </button>
            </AnchorLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
