import React from 'react';
import { useLocation } from 'react-router-dom';

// PUBLIC_INTERFACE
/**
 * PurchasePage component for Arcade Nexus.
 * Reads the game name from the URL (?game=...) and displays the purchasing screen.
 * Provides a user-friendly message if game is not specified.
 */
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function PurchasePage() {
  const query = useQuery();
  const game = query.get('game');

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '45vh',
        width: '100vw',
        fontFamily: "'Times New Roman', Times, serif",
        padding: '64px 10vw 32px 10vw',
        boxSizing: 'border-box'
      }}
    >
      <h2
        style={{
          color: '#fff',
          fontSize: '2.1rem',
          fontWeight: 800,
          margin: '0 0 22px 0',
          letterSpacing: '1.6px',
          fontFamily: "'Times New Roman', Times, serif"
        }}
      >
        Purchase Game
      </h2>
      {game ? (
        <div
          style={{
            background: 'rgba(32,13,48,0.94)',
            border: '2.7px solid #ae36ffb0',
            borderRadius: '22px',
            boxShadow: '0 3px 28px rgba(172,36,255,0.19)',
            padding: '34px 22px',
            maxWidth: 420,
            width: '100%',
            textAlign: 'center'
          }}
        >
          <p
            style={{
              color: 'rgba(255,255,255,0.97)',
              fontSize: '1.19rem',
              fontWeight: 600,
              marginBottom: 16
            }}
          >
            <span style={{ color: '#ffe133', letterSpacing: '0.08em', fontWeight: 700 }}>{game}</span>
            <br />
            is ready for purchase! Complete your checkout below.
          </p>
          {/* Placeholder for future payment form or instructions */}
          <button
            style={{
              fontFamily: "'Times New Roman', Times, serif",
              fontWeight: 700,
              fontSize: "1.07rem",
              color: "#fff",
              background: "linear-gradient(96deg, #ff3a98 35%, #ae36ff 100%)",
              border: "none",
              borderRadius: "18px",
              padding: "8.5px 30px",
              margin: "22px 0 0 0",
              cursor: "pointer",
              boxShadow: "0 0 7px 0 #fb00ff28",
              letterSpacing: "0.11em",
              outline: "none",
              transition: "background 0.13s, color 0.13s, box-shadow 0.13s"
            }}
            tabIndex={0}
            aria-label={`Confirm purchase of ${game}`}
            disabled
          >
            Confirm Purchase (Coming Soon)
          </button>
        </div>
      ) : (
        <div
          style={{
            background: 'rgba(44,19,29,0.86)',
            border: '2.7px solid #ff3a98bb',
            borderRadius: '18px',
            padding: '28px 22px',
            color: '#fff',
            maxWidth: 370,
            width: '100%',
            textAlign: 'center',
            fontWeight: 600,
            letterSpacing: '0.08em',
            fontSize: '1.09rem'
          }}
        >
          No game selected. Please return to the <a href="/store" style={{ color: '#ffe133', textDecoration: 'underline' }}>Store</a>.
        </div>
      )}
    </section>
  );
}

export default PurchasePage;
