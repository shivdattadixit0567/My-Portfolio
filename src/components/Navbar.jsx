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
              <button>Home</button>
            </AnchorLink>
          </li>
          <li className="mr-14">
            <AnchorLink href="#about">
              <button>About</button>
            </AnchorLink>
          </li>
          <li className="mr-14">
            <AnchorLink href="#skill">
              <button>Skill</button>
            </AnchorLink>
          </li>
          <li className="mr-14">
            <AnchorLink href="#project">
              <button>Project</button>
            </AnchorLink>
          </li>
          <li className="mr-14">
            <AnchorLink href="#contact">
              <button>Contact</button>
            </AnchorLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
