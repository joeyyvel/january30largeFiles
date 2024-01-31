import { MenuItem } from "./MenuItem";
import { Link } from "react-router-dom";
import myLogo from "../images/travel.jpg";
import "./NavbarStyles.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [clicked, setCliked] = useState(false);

  const handleClick = () => {
    setCliked(!clicked);
  };

  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div className={`nav ${show && "NavbarItems"}`}>
      <div className="logo">
        <img src={myLogo} alt="myLogo" id="joeyLogo" />
      </div>

      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItem.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.allCName} to={item.url}>
                {/* <i className={item.icon}></i>  */}
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
