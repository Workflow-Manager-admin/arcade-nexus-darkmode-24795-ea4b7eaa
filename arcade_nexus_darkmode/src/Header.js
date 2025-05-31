import React from 'react';

// PUBLIC_INTERFACE
/**
 * Header component for Arcade Nexus.
 * Displays the brand name centered on a black background, always overlays any background image/video.
 * Font is forced to Times New Roman per requirements.
 */
function Header() {
  return (
    <header
      className="arcade-header"
      style={{
        width: '100vw',
        background: '#000',
        padding: '32px 0 24px 0',
        textAlign: 'center',
        position: 'relative',
        boxSizing: 'border-box',
        zIndex: 10,
      }}
      role="banner"
    >
      <h1
        className="arcade-header-title"
        style={{
          margin: 0,
          fontSize: '2.5rem',
          fontWeight: 700,
          color: '#fff',
          letterSpacing: '2px',
          fontFamily: "'Times New Roman', Times, serif"
        }}
      >
        Arcade Nexus
      </h1>
    </header>
  );
}

export default Header;
