import React from 'react';

// PUBLIC_INTERFACE
/**
 * Renders a full-page, fixed, looping, muted background video.
 * The video will cover the entire viewport and sit behind all content.
 */
function BackgroundVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="arcade-bg-video"
      tabIndex={-1}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        objectPosition: 'center center',
        pointerEvents: 'none',
        background: '#000'
      }}
    >
      <source src={`${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : ''}/controllervid.mp4`} type="video/mp4" />
      {/* Fallback message */}
      Your browser does not support the video tag.
    </video>
  );
}

export default BackgroundVideo;
