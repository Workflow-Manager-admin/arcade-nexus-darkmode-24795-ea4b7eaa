import React from 'react';
import './App.css';

import Header from './Header';
import NavBar from './NavBar';
import WelcomeSection from './WelcomeSection';
import AboutBox from './AboutBox';

// PUBLIC_INTERFACE
/**
 * Main container for Arcade Nexus DarkMode.
 * Vertically stacks Header, NavBar, WelcomeSection, and AboutBox, all centered.
 */
function App() {
  return (
    <div className="app" style={{ background: '#000', minHeight: '100vh' }}>
      <Header />
      <NavBar />
      <main style={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <WelcomeSection />
        <AboutBox />
      </main>
    </div>
  );
}

export default App;