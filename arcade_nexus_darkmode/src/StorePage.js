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
    name: "Call of Duty: Black Ops 6",
    price: 3999,
    img: "https://staticg.sportskeeda.com/editor/2023/11/74a7a-17014556043360-1920.jpg"
  },
  {
    name: "FIFA 23",
    price: 2999,
    img: "https://cdn1.epicgames.com/638faef43b624d97b8202d274187318f/offer/EGS_FIFA23StandardEdition_EACanada_S1_2560x1440-c759c80d2ab9429d4f295dfba4bb57e1.jpg"
  },
  {
    name: "Fortnite",
    price: 0,
    img: "https://cdn2.unrealengine.com/Fortnite%2Fblog%2Fseason-x-is-here%2F10BR_Launch_Cinematic_Still_3-1920x1080-a0726c6e6c2d5c960c5cd3b63c03a3b7fb836ecc.jpg"
  },
  {
    name: "Froza Horizon 6",
    price: 4999,
    img: "https://assets-prd.ignimgs.com/2023/06/11/forzahorizon6-1686500179107.jpg"
  },
  {
    name: "Genshin Impact",
    price: 0,
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1677740/header.jpg"
  },
  {
    name: "Gta V",
    price: 1999,
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg"
  },
  {
    name: "MINECRAFT",
    price: 1699,
    img: "https://www.minecraft.net/content/dam/archive/92db31d89d662c6c3a3ed7ac860551fa-Minecraft-Key-Art.jpg"
  },
  {
    name: "Mortal Kombat",
    price: 3499,
    img: "https://assets-prd.ignimgs.com/2023/05/18/mortalkombat1-1684418362870.jpg"
  },
  {
    name: "Roblox",
    price: 0,
    img: "https://static-cdn.jtvnw.net/ttv-boxart/roblox-285x380.jpg"
  },
  {
    name: "Black Myth: Wukong",
    price: 4999,
    img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1594920/header.jpg"
  },
];

function StorePage() {
  const navigate = useNavigate();

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
                onClick={() => {
                  // Navigates to purchase route with game name param
                  const paramName = encodeURIComponent(name);
                  navigate(`/purchase?game=${paramName}`);
                }}
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
