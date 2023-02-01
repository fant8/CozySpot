import React from "react";
import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import logo from '../cozyspot_logo.jpg';

const Layout = (props) => {

  const navigate = useNavigate();

  return (
    <div >
      <header class="p-3 text-bg-dark">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <img style={{maxWidth:"3%", borderRadius:"30%", marginRight: "1%"}} src={logo} alt="Logo" />
            <h2 style={{ marginRight: "20%" }}>CozySpot</h2>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <Link to="/home" className="nav-link text-secondary">Home</Link>
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
              <li>
                <Link to="/friends" className="nav-link text-secondary">Friends</Link>
              </li>
             
            </ul>

            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"></input>
            </form>

          </div>
        </div>
      </header>


    </div>
  )

}

export default Layout