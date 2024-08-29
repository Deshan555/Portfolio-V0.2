import React from 'react';

const CircularLinesBackground = () => {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <svg
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <circle cx="50%" cy="50%" r="40%" stroke="black" strokeWidth="2" fill="none" />
        <circle cx="50%" cy="50%" r="30%" stroke="black" strokeWidth="2" fill="none" />
        <circle cx="50%" cy="50%" r="20%" stroke="black" strokeWidth="2" fill="none" />
        <circle cx="50%" cy="50%" r="10%" stroke="black" strokeWidth="2" fill="none" />
      </svg>
      {/* Other content goes here */}
    </div>
  );
};

export default CircularLinesBackground;
