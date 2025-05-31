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
      style={{
        background: '#000',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        padding: '16px 0',
        display: 'flex',
        justifyContent: 'center'
      }}
      aria-label="Main Navigation"
    >
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          gap: '48px',
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <a
            href="#"
            style={{
              color: '#fff',
              fontSize: '1.15rem',
              textDecoration: 'none',
              fontWeight: 500,
              letterSpacing: '0.5px'
            }}
            tabIndex={0}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            style={{
              color: '#fff',
              fontSize: '1.15rem',
              textDecoration: 'none',
              fontWeight: 500,
              letterSpacing: '0.5px'
            }}
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
