import React from 'react';
import './App.css';

import Header from './Header';
import NavBar from './NavBar';
import WelcomeSection from './WelcomeSection';
import AboutBox from './AboutBox';
import BackgroundVideo from './BackgroundVideo';

// PUBLIC_INTERFACE
/**
 * Main container for Arcade Nexus DarkMode.
 * Vertically stacks Header, NavBar, WelcomeSection, and AboutBox, all centered.
 * Renders a full-page background video behind all content.
 */
function App() {
  return (
    <>
      {/* Renders the universal background video (always underneath app content) */}
      <BackgroundVideo />
      <div
        className="app"
        style={{
          // Inline cyberpunk background using PUBLIC_URL so Create React App resolves it correctly
          backgroundImage: `url(${process.env.PUBLIC_URL}/sample_cyberpunk.jpg)`,
          backgroundColor: '#19182B',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          minHeight: '100vh',
          position: 'relative',
          zIndex: 1 // Ensure main app content is above the video
        }}
      >
        <Header />
        <NavBar />
        <main style={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <WelcomeSection />
          <AboutBox />
        </main>
      </div>
    </>
  );
}

export default App;