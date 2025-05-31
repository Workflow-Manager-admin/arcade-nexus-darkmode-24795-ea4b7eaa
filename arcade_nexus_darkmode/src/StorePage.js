import React from 'react';

// PUBLIC_INTERFACE
/**
 * StorePage component for Arcade Nexus.
 * Displays minimalist store info, title, and future-extendable layout.
 * Uses Times New Roman per typographic requirements.
 */
function StorePage() {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '58px 0 36px 0',
        textAlign: 'center',
        minHeight: '55vh',
        width: '100vw',
        boxSizing: 'border-box',
        fontFamily: "'Times New Roman', Times, serif"
      }}
    >
      <h2
        style={{
          color: '#fff',
          fontSize: '2.1rem',
          fontWeight: 800,
          margin: '0 0 24px 0',
          letterSpacing: '1.6px',
          fontFamily: "'Times New Roman', Times, serif"
        }}
      >
        Store
      </h2>
      <p
        style={{
          color: 'rgba(255,255,255,0.91)',
          fontSize: '1.20rem',
          fontWeight: 500,
          maxWidth: 640,
          margin: 0,
          lineHeight: 1.65,
          fontFamily: "'Times New Roman', Times, serif"
        }}
      >
        Browse and discover classic arcades, indie darlings, and blockbuster hits.<br />
        Digital games delivered instantly. Welcome to your nexus for all things gaming!
      </p>
    </section>
  );
}

export default StorePage;
