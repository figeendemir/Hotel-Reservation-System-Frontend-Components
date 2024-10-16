import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBook, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const Navbar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">ReservEase Booking</span>
        <div className="navItems">
          <div className="navList">
            <Link to="/" className="navLink navListItem">
              <FontAwesomeIcon icon={faBed} className="navIcon" />
              <span>Rooms</span>
            </Link>
            <Link to="/about" className="navLink navListItem">
              <FontAwesomeIcon icon={faBook} className="navIcon" />
              <span>About</span>
            </Link>
            <Link to="/contact" className="navLink navListItem">
              <FontAwesomeIcon icon={faPhone} className="navIcon" />
              <span>Contact</span>
            </Link>
          </div>
          {isLoggedIn ? (
            <div className="navButtons">
              <button onClick={() => navigate("/user")} className="navLink navButton">
                <FontAwesomeIcon icon={faUser} className="navIcon" />
                <span>Profile</span>
              </button>
              <button onClick={onLogout} className="navLink navButton">Logout</button>
            </div>
          ) : (
            <div className="navButtons">
              <Link to="/register" className="navLink navButton">Register</Link>
              <Link to="/login" className="navLink navButton">Login</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
