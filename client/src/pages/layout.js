import Header from "../components/header";
import Footer from "../components/footer";
import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {

    return (
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/merge">Merge Playlists</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <h1>CozyZone</h1>
            </ul>
          </nav>
    
          <Outlet />
        </div>
        )

}

export default Layout