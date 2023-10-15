import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { RiAccountCircleFill } from "react-icons/ri";
import { useState } from "react";

const Navbar = ({ user }) => {
  const [isNavShowing, setisNavShowing] = useState(false);
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  console.log(user);
  const handleLogIn = () => setIsLoggedIn(true);
  const handleLogOut = () => {
    return setIsLoggedIn(false), setOpenProfile(false);
  };

  return (
    <nav className="circle">
      <div className="container nav__container">
        <Link to="/" className="logo">
          <img
            src={Logo}
            className="logo"
            alt="logo"
            onClick={() => setisNavShowing(false)}
          />
        </Link>
        <ul className={`nav__links ${isNavShowing ? "show_nav" : "hide_nav"}`}>
          <li>
            <NavLink to="/" onClick={() => setisNavShowing((prev) => !prev)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setisNavShowing((prev) => !prev)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allngos"
              onClick={() => setisNavShowing((prev) => !prev)}
            >
              AllNGO's
            </NavLink>
          </li>

          <NavLink to="/addngo">
            <button className="account">Add NGO</button>
          </NavLink>

          {isLoggedIn ? (
            <>
              {/* <NavLink className="my-profile">
                <RiAccountCircleFill />
                <p onClick={() => setOpenProfile((prev) => !prev)}>Account</p>
              </NavLink> */}
            </>
          ) : (
            <>
              <NavLink to="/login">
                <button className="account" onClick={handleLogIn}>
                  Log in
                </button>
              </NavLink>

              <NavLink to="/signup">
                <button className="account">Sign up</button>
              </NavLink>

              {/* <NavLink className="my-profile">
                <RiAccountCircleFill />
                <p onClick={() => setOpenProfile((prev) => !prev)}>Account</p>
              </NavLink> */}
            </>
          )}

          {openProfile && (
            <div className="profile__dropdown">
              <ul className="dropdown__list">
                <li>Profile</li>
                <li onClick={handleLogOut}>LogOut</li>
              </ul>
            </div>
          )}
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => setisNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
