import React from 'react';

// PUBLIC_INTERFACE
/**
 * WelcomeSection component for Arcade Nexus.
 * Displays a bold welcome message and a subheading, centered.
 */
function WelcomeSection() {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '56px 0 32px 0',
        textAlign: 'center'
      }}
    >
      <h2
        style={{
          color: '#fff',
          fontSize: '2.2rem',
          fontWeight: 800,
          margin: '0 0 20px 0',
          letterSpacing: '1.5px',
          fontFamily: "'Times New Roman', Times, serif"
        }}
      >
        Welcome to Arcade Nexus
      </h2>
      <p
        style={{
          color: 'rgba(255,255,255,0.9)',
          fontSize: '1.25rem',
          fontWeight: 400,
          maxWidth: 600,
          margin: 0,
          fontFamily: "'Times New Roman', Times, serif"
        }}
      >
        Your digital home for classic and modern games. Explore a universe of arcade excitement and nostalgia.
      </p>
    </section>
  );
}

export default WelcomeSection;
