import React from 'react';

// PUBLIC_INTERFACE
/**
 * Header component for Arcade Nexus.
 * Displays the brand name centered on a black background.
 */
function Header() {
  return (
    <header
      style={{
        width: '100%',
        background: '#000',
        padding: '32px 0 24px 0',
        textAlign: 'center'
      }}
      role="banner"
    >
      <h1
        style={{
          margin: 0,
          fontSize: '2.5rem',
          fontWeight: 700,
          color: '#fff',
          letterSpacing: '2px'
        }}
      >
        Arcade Nexus
      </h1>
    </header>
  );
}

export default Header;
