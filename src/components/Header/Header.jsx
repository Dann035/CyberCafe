import "./Header.css";
import { useState } from "react";

export const Header = () => {
  const [active, setActive] = useState(false);
  //!-----------------------------------------------------------
  function handleIsActive(e) {
    if (e.target.name === "Home") {
      const isHomeActive = active ? "nav-link active" : "nav-link";
      return;
    } else if (e.taget.name === "Menu") {
      const isMenuActive = active ? "nav-link active" : "nav-link";
    }
    setActive(!active);
  }
  //!-----------------------------------------------------------
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            className="me-2 p-0"
            src="/public/mug-hot-solid-full.svg"
            alt="Taza de café"
            height={"35px"}
          />
          Cyber-Cafe
        </a>
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
        <div
          className="collapse navbar-collapse ms-5"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                name="Home"
                aria-current="page"
                onClick={() => handleIsActive()}
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleIsActive()} href="#">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                AboutUs
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Expresso..."
              name="search"
            />
            <button className="btn btn-outline-warning" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
