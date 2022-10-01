import React from "react";
import { BrowserRouter, Route, Link, Outlet } from "react-router-dom";
import './home.css';

function Home() {
  return (
    <>
      <nav className="nav-bar">
        <Link to="/" className="link">HOME</Link>
        <Link to="/view-contacts" className="link">VIEW CONTACTS</Link>
        <Link to="/add-contacts" className="link">ADD CONTACTS</Link>
        <span>
          <button className="donate">DONATE</button>
        </span>
      </nav>
      <Outlet />
    </>
  );
}

export default Home;