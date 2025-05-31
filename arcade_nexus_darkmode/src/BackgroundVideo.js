import React from 'react';

// PUBLIC_INTERFACE
/**
 * BackgroundVideo component for Arcade Nexus.
 * Renders a fixed, full viewport, looping, muted, auto-playing background video using public/controllervid.mp4.
 * The video sits visually behind all other app content via z-index and pointer-events: none.
 * 
 * NOTE: 'controllervid.mp4' must be placed in the 'public' directory for proper referencing.
 */
function BackgroundVideo() {
  return (
    <video
      className="arcade-bg-video"
      autoPlay
      muted
      loop
      playsInline
      tabIndex={-1}
      aria-hidden="true"
      /* 
        Key style props are set here, but base z-index and full coverage are also managed in App.css.
        Changes here ensure full viewport, fixed positioning, and visual stacking correctness.
      */
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        zIndex: 0,
        pointerEvents: 'none',
        background: '#000',
      }}
    >
      {/* Reference video in public directory */}
      <source src="/controllervid.mp4" type="video/mp4" />
      {/* Fallback for browsers without video support */}
      Your browser does not support the video tag.
    </video>
  );
}

export default BackgroundVideo;
