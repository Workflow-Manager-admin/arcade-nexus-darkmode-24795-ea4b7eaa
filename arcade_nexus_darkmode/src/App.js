import React from 'react';
import './App.css';

import Header from './Header';
import NavBar from './NavBar';
import WelcomeSection from './WelcomeSection';
import AboutBox from './AboutBox';
import BackgroundVideo from './BackgroundVideo';
import StorePage from './StorePage';
import { Routes, Route } from 'react-router-dom';

// PUBLIC_INTERFACE
/**
 * Main container for Arcade Nexus DarkMode.
 * Always shows background, Header, and NavBar at the top.
 * Content below is swapped via router (Home: WelcomeSection/AboutBox, Store: StorePage).
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
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <WelcomeSection />
                  <AboutBox />
                </>
              }
            />
            <Route path="/store" element={<StorePage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;