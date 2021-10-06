import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <div className="container">
        <NavLink className="navbar-brand fs-2" to="/Home">
          CRUD
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/ClientList"
                className="nav-link"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Client
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                to="/Login"
                className="nav-link"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Login
              </NavLink> 
            </li>*/}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
