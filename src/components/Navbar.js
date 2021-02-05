import React from "react";
import { connect } from "react-redux";
import { Logout } from "../Action/actionUser";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  const handleLogout = (e) => {
    props.Logout(true);
    e.preventDefault();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="#">
          Todo list
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="liste-tache">
                Tâches
              </NavLink>
            </li>
            <li className="nav-item">
              <button className="nav-button" onClick={(e) => handleLogout(e)}>
                Déconnexion
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    Logout: (text) => dispatch(Logout(text)),
  };
};
export default connect(null, mapDispatchToProps)(Navbar);
