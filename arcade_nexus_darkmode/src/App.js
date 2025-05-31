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
 * Renders a full-page background image for the app root, but allows the background video to sit below it if both are present.
 * Header area always has solid black background above background image or video.
 * All text uses Times New Roman.
 */
function App() {
  return (
    <>
      <BackgroundVideo />
      <div
        className="app"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/sample_cyberpunk.jpg)`,
          backgroundColor: '#19182B',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          minHeight: '100vh',
          position: 'relative',
          zIndex: 1,
          fontFamily: "'Times New Roman', Times, serif"
        }}
      >
        <Header />
        <NavBar />
        <main style={{
          flex: '1 0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontFamily: "'Times New Roman', Times, serif"
        }}>
          <WelcomeSection />
          <AboutBox />
        </main>
      </div>
    </>
  );
}

export default App;