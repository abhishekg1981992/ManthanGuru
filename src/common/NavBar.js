import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);
  const node = useRef();

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  return (
    <div ref={node}>
      <nav>
        <div className="logo">Manthan Guru</div>
        <ul
          className="nav-links"
          style={{ transform: open ? "translateX(0px)" : "" }}
          onClick={() => setOpen(!open)}
        >
          <li>
            <a href="#/">Home</a>
          </li>
          <li>
            <a href="#/healthInsurance">Health Insurance</a>
          </li>
          <li>
            <a href="#/lifeInsurance">Life Insurance</a>
          </li>
          <li>
            <a href="#/contactUs">Contact Us</a>
          </li>
        </ul>
        <FontAwesomeIcon
          onClick={() => setOpen(!open)}
          className="burger"
          icon={faBars}
        />
      </nav>
    </div>
  );
}

export default NavBar;
