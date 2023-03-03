import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  var currentLocation = useLocation().pathname;

  console.log("this is the path: " + currentLocation);
  return (
    <div className="sidebar">
      <div className="profile">
        <img src="./images/company-logo.jpg" alt="profile_picture" />
        <h3>My Company</h3>
      </div>
      <ul>
        <li>
          <Link to="/" className={`${currentLocation === `/` ? `active` : ``}`}>
            <span className="item">Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/page-1"
            className={`${currentLocation === `/page-1` ? `active` : ``}`}
          >
            <span className="item">Page 1</span>
          </Link>
        </li>
        <li>
          <Link
            to="/page-2"
            className={`${currentLocation === `/page-2` ? `active` : ``}`}
          >
            <span className="item">Page 2</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
