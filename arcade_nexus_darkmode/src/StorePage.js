import React from 'react';
import { useNavigate } from 'react-router-dom';

// PUBLIC_INTERFACE
/**
 * StorePage component for Arcade Nexus.
 * Displays a responsive 5x2 grid of 10 game boxes (each with image, name, price in ₹, Buy Now button),
 * using Times New Roman for all text. The grid and cards are styled for cyberpunk/dark theme.
 */
const sampleGames = [
  {
    name: "Neon Drift",
    price: 499,
    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Pixel Samurai",
    price: 349,
    img: "https://images.unsplash.com/photo-1486607306179-71310663aace?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Starlight Odyssey",
    price: 699,
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Cosmo Blaster",
    price: 299,
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Abyss Runner",
    price: 599,
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Synthwave Racer",
    price: 399,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Galactic Sorcery",
    price: 550,
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Bitverse Quest",
    price: 299,
    img: "https://images.unsplash.com/photo-1508766206392-8bd5cf550d1d?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Shadow Protocol",
    price: 499,
    img: "https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Arc Zenith",
    price: 799,
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=400&q=80"
  },
];

function StorePage() {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '48px 0 24px 0',
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
          marginBottom: 34,
          lineHeight: 1.65,
          fontFamily: "'Times New Roman', Times, serif"
        }}
      >
        Browse and discover classic arcades, indie darlings, and blockbuster hits.<br />
        Digital games delivered instantly. Welcome to your nexus for all things gaming!
      </p>
      {/* Store Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gridTemplateRows: "repeat(2, 280px)",
          gap: "30px 38px",
          width: "97vw",
          maxWidth: "1240px",
          margin: "0 auto",
          justifyItems: "center",
          alignItems: "center"
        }}
        aria-label="Game Store Grid"
      >
        {sampleGames.map(({ name, price, img }, idx) => (
          <div
            key={name}
            style={{
              background: "rgba(25,17,43,0.91)",
              border: "2.5px solid #a024ff88",
              borderRadius: "19px",
              boxShadow: "0 3px 25px rgba(64,0,64,0.18)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              maxWidth: "220px",
              height: "260px",
              minHeight: "220px",
              margin: "0 auto",
              justifyContent: "flex-start",
              position: "relative",
              transition: "transform 0.16s, box-shadow 0.16s",
            }}
            tabIndex={0}
          >
            <img
              src={img}
              alt={name + " cover"}
              style={{
                width: '100%',
                height: '120px',
                objectFit: 'cover',
                borderBottom: '2px solid #24203f',
              }}
              loading="lazy"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: 1,
                padding: "13px 9px 6px 9px",
                width: "100%",
                boxSizing: "border-box",
                justifyContent: "space-between"
              }}
            >
              <span
                style={{
                  color: "#fff",
                  fontSize: "1.10rem",
                  fontWeight: 650,
                  textAlign: "center",
                  marginBottom: "10px",
                  fontFamily: "'Times New Roman', Times, serif",
                  letterSpacing: "0.08em",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  width: "100%"
                }}
                title={name}
              >
                {name}
              </span>
              <span
                style={{
                  color: "#ffbb44",
                  fontWeight: 700,
                  fontSize: "1.095rem",
                  fontFamily: "'Times New Roman', Times, serif",
                  marginBottom: "12px"
                }}
              >
                ₹{price}
              </span>
              <button
                style={{
                  fontFamily: "'Times New Roman', Times, serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "#fff",
                  background: "linear-gradient(96deg, #ff3a98 35%, #ae36ff 100%)",
                  border: "none",
                  borderRadius: "19px",
                  padding: "8.5px 26px",
                  margin: 0,
                  marginTop: "0.5em",
                  marginBottom: "2.5px",
                  cursor: "pointer",
                  boxShadow: "0 0 7px 0 #fb00ff28",
                  letterSpacing: "0.12em",
                  outline: "none",
                  transition: "background 0.13s, color 0.13s, box-shadow 0.13s"
                }}
                tabIndex={0}
                aria-label={`Buy ${name} now for ₹${price}`}
                onClick={() => { /* Future: Show purchase form or start checkout */ }}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Responsive tweaks for mobile */}
      <style>
        {`
        @media (max-width: 1090px) {
          [aria-label="Game Store Grid"] {
            grid-template-columns: repeat(auto-fit, minmax(175px, 1fr)) !important;
            gap: 24px 18px !important;
          }
        }
        @media (max-width: 750px) {
          [aria-label="Game Store Grid"] {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px 9px !important;
          }
        }
        @media (max-width: 530px) {
          [aria-label="Game Store Grid"] {
            grid-template-columns: 1fr !important;
            grid-template-rows: none !important;
          }
        }
        `}
      </style>
    </section>
  );
}

export default StorePage;
