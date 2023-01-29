import Header from "../components/header";
import Footer from "../components/footer";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {

  return (
    
    <div >
      <div className="px-3 py-2 text-bg-dark">
        <h1 className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">CozySpot</h1>
        <nav>
          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <Link to="/" className="nav-link text-secondary">Home</Link>
            </li>
            <li>
              <Link to="/profile" className="nav-link text-secondary">Profile</Link>
            </li>
            <li>
              <Link to="/merge" className="nav-link text-secondary">Merge Playlists</Link>
            </li>
            <li>
              <Link to="/blog" className="nav-link text-secondary">Blog</Link>
            </li>
          </ul>
        </nav>
        </div>
        <Outlet />
        <div className="b-example-divider"></div>
    </div>
  )

}

export default Layout