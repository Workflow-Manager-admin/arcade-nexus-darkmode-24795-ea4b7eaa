import React from 'react';
import { NavLink } from 'react-router-dom';

// PUBLIC_INTERFACE
/**
 * NavBar component for Arcade Nexus.
 * Renders a centered navigation bar below the header.
 * Uses NavLink from React Router for SPA navigation with Times New Roman font.
 */
function NavBar() {
  return (
    <nav
      className="arcade-nav"
      aria-label="Main Navigation"
    >
      <ul className="arcade-nav-list">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-btn arcade-nav-link${isActive ? ' active' : ''}`
            }
            tabIndex={0}
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/store"
            className={({ isActive }) =>
              `nav-btn arcade-nav-link${isActive ? ' active' : ''}`
            }
            tabIndex={0}
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            Store
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
