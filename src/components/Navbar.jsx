import { useState } from "react";

function Navbar({
  darkMode,
  setDarkMode,
}) {

  const [menuOpen, setMenuOpen] =
    useState(false);

  return (
    <nav className="navbar">

      <div className="navbar-logo">
        Dynamic Catalog
      </div>

      {/* DESKTOP LINKS */}

      <div className="navbar-links">

        <a href="#cars">Cars</a>

        <a href="#phones">Phones</a>

        <a href="#bikes">Bikes</a>

        <a href="#computers">
          Computers
        </a>

      </div>

      {/* RIGHT SIDE */}

      <div className="navbar-actions">

        <button
          className="theme-toggle"
          onClick={() =>
            setDarkMode(!darkMode)
          }
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* HAMBURGER */}

        <button
          className="hamburger"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}

      {menuOpen && (

        <div className="mobile-menu">

          <a href="#cars">Cars</a>

          <a href="#phones">Phones</a>

          <a href="#bikes">Bikes</a>

          <a href="#computers">
            Computers
          </a>

        </div>

      )}

    </nav>
  );
}

export default Navbar;