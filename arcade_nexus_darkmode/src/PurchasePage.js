import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

// PUBLIC_INTERFACE
/**
 * PurchasePage component for Arcade Nexus.
 * Implements a complete, styled purchase form including: name, DOB, gender, email, address, and a 10-game dropdown.
 * The form is fully controlled with React state.
 * Times New Roman and dark/modern Arcade Nexus theme is enforced throughout.
 * Game dropdown is prefilled based on "game" URL param or defaults to first game.
 * Submitting the form triggers an alert confirmation (demo only).
 */
const GAME_LIST = [
  "Neon Drift",
  "Pixel Samurai",
  "Starlight Odyssey",
  "Cosmo Blaster",
  "Abyss Runner",
  "Synthwave Racer",
  "Galactic Sorcery",
  "Bitverse Quest",
  "Shadow Protocol",
  "Arc Zenith"
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function PurchasePage() {
  const query = useQuery();
  const initialGame = (() => {
    const param = query.get('game');
    // Accept only games in list (case-sensitive, to match StorePage)
    if (param && GAME_LIST.includes(param)) return param;
    return GAME_LIST[0];
  })();

  const [form, setForm] = useState({
    name: '',
    dob: '',
    gender: '',
    email: '',
    address: '',
    game: initialGame,
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    alert(
      `Purchase submitted!

Name: ${form.name}
Date of Birth: ${form.dob}
Gender: ${form.gender}
Email: ${form.email}
Home Address: ${form.address}
Game: ${form.game}`
    );
  }

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '55vh',
        width: '100vw',
        fontFamily: "'Times New Roman', Times, serif",
        padding: '54px 0 22px 0',
        boxSizing: 'border-box'
      }}
    >
      <h2
        style={{
          color: '#fff',
          fontSize: '2.04rem',
          fontWeight: 800,
          margin: '0 0 22px 0',
          letterSpacing: '1.5px'
        }}
      >
        Purchase Game
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{
          background: 'rgba(24,18,27,0.97)',
          border: '2.4px solid #ae36ff90',
          borderRadius: '22px',
          boxShadow: '0 3px 28px rgba(172,36,255,0.15)',
          padding: '37px 26px 30px 26px',
          maxWidth: 455,
          width: '100%',
          color: '#fff',
          fontFamily: "'Times New Roman', Times, serif",
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
        autoComplete="off"
      >
        {/* Name */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <label htmlFor="name" style={labelStyle}>Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Enter your name"
            autoComplete="name"
          />
        </div>
        {/* Date of Birth */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <label htmlFor="dob" style={labelStyle}>Date of Birth</label>
          <input
            id="dob"
            name="dob"
            type="date"
            required
            value={form.dob}
            onChange={handleChange}
            style={inputStyle}
            max={new Date().toISOString().split('T')[0]}
            autoComplete="bday"
          />
        </div>
        {/* Gender */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <label style={labelStyle}>Gender</label>
          <div style={{ display: 'flex', gap: 22, marginTop: 4 }}>
            <label style={radioLabelStyle}>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={form.gender === "Male"}
                onChange={handleChange}
                required
                style={radioInputStyle}
              />
              {' '}Male
            </label>
            <label style={radioLabelStyle}>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={form.gender === "Female"}
                onChange={handleChange}
                required
                style={radioInputStyle}
              />
              {' '}Female
            </label>
            <label style={radioLabelStyle}>
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={form.gender === "Other"}
                onChange={handleChange}
                required
                style={radioInputStyle}
              />
              {' '}Other
            </label>
          </div>
        </div>
        {/* Email */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <label htmlFor="email" style={labelStyle}>Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            style={inputStyle}
            placeholder="your@email.com"
            autoComplete="email"
          />
        </div>
        {/* Home Address */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <label htmlFor="address" style={labelStyle}>Home Address</label>
          <textarea
            id="address"
            name="address"
            required
            value={form.address}
            onChange={handleChange}
            style={{
              ...inputStyle,
              minHeight: 54,
              resize: 'vertical'
            }}
            placeholder="Enter your address"
            autoComplete="street-address"
          />
        </div>
        {/* Game selection */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <label htmlFor="game" style={labelStyle}>Select Game</label>
          <select
            id="game"
            name="game"
            required
            value={form.game}
            onChange={handleChange}
            style={{
              ...inputStyle,
              appearance: 'none',
              backgroundImage: 'linear-gradient(90deg, #24001c 60%, #21134c 90%)'
            }}
          >
            {GAME_LIST.map((g) => (
              <option value={g} key={g}>{g}</option>
            ))}
          </select>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          style={{
            fontFamily: "'Times New Roman', Times, serif",
            fontWeight: 700,
            fontSize: "1.09rem",
            color: "#fff",
            background: "linear-gradient(96deg, #ff3a98 35%, #ae36ff 100%)",
            border: "none",
            borderRadius: "18px",
            padding: "10px 30px",
            marginTop: "14px",
            cursor: "pointer",
            boxShadow: "0 0 7px 0 #fb00ff28",
            letterSpacing: "0.11em",
            outline: "none",
            transition: "background 0.13s, color 0.13s, box-shadow 0.13s"
          }}
          tabIndex={0}
          aria-label="Submit purchase form"
        >
          Submit Purchase
        </button>
        {submitted &&
          <div
            style={{
              marginTop: '13px',
              color: '#ffe133',
              fontWeight: 600,
              fontSize: '1rem',
              textAlign: 'center',
              letterSpacing: '0.05em'
            }}
          >
            Thank you for your purchase submission!
          </div>
        }
      </form>
    </section>
  );
}

// Input/label styles
const inputStyle = {
  fontFamily: "'Times New Roman', Times, serif",
  background: "linear-gradient(90deg, #1e1d2b 65%, #231d39 100%)",
  color: "#fff",
  fontSize: "1.06rem",
  padding: "8px 12px",
  border: "2px solid #aa40ff8c",
  borderRadius: "11px",
  outline: "none",
  fontWeight: 500,
  letterSpacing: "0.04em",
  boxSizing: "border-box",
  transition: "border 0.13s, box-shadow 0.13s",
  marginTop: "1.5px"
};
const labelStyle = {
  color: "#f9f9f9",
  fontFamily: "'Times New Roman', Times, serif",
  fontWeight: 700,
  letterSpacing: "0.06em",
  fontSize: "1.04rem",
  marginBottom: "1px"
};
const radioLabelStyle = {
  fontFamily: "'Times New Roman', Times, serif",
  fontSize: "1.00rem",
  color: "#f2dfff",
  fontWeight: 500,
  cursor: "pointer",
  marginRight: "18px"
};
const radioInputStyle = {
  accentColor: "#ff3a98",
  marginRight: 6,
};

export default PurchasePage;
