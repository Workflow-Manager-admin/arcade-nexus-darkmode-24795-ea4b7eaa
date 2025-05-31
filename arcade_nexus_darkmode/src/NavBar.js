import React from 'react';

// PUBLIC_INTERFACE
/**
 * NavBar component for Arcade Nexus.
 * Renders a centered navigation bar below the header.
 * Links are placeholders (no routing).
 */
function NavBar() {
  return (
    <nav
      className="arcade-nav"
      aria-label="Main Navigation"
    >
      <ul className="arcade-nav-list">
        <li>
          <a
            href="#"
            className="nav-btn"
            tabIndex={0}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-btn"
            tabIndex={0}
          >
            Store
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
