import React from 'react';

// PUBLIC_INTERFACE
/**
 * AboutBox component for Arcade Nexus.
 * Renders a visually distinct centered box with information about the store.
 */
function AboutBox() {
  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '36px 0'
      }}
    >
      <div
        style={{
          background: '#18181A',
          border: '2px solid #ff0000',
          borderRadius: '18px',
          maxWidth: 520,
          padding: '36px 32px 32px 32px',
          boxShadow: '0 2px 24px 0 rgba(0,0,0,0.16)',
          textAlign: 'center'
        }}
      >
        <h3
          style={{
            color: '#fff',
            fontWeight: 700,
            fontSize: '1.65rem',
            margin: '0 0 16px 0',
            letterSpacing: '1px',
            fontFamily: "'Times New Roman', Times, serif"
          }}
        >
          About us
        </h3>
        <p
          style={{
            color: 'rgba(255,255,255,0.89)',
            fontSize: '1.09rem',
            fontWeight: 450,
            margin: 0,
            lineHeight: 1.7,
            fontFamily: "'Times New Roman', Times, serif"
          }}
        >
          At Arcade Nexus, we celebrate the spirit of gaming with a curated selection of retro arcades, indie gems, and blockbuster hits. Our mission is to deliver joy and nostalgia to players everywhere — with instant digital delivery, stellar customer support, and a passion for the gaming community.
        </p>
      </div>
    </section>
  );
}

export default AboutBox;
