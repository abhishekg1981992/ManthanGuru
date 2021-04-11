import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
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
            <a href="#/users">Health Insurance</a>
          </li>
          <li>
            <a>Life Insurance</a>
          </li>
          <li>
            <a>Term Insurance</a>
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
