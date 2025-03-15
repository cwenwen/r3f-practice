import { useState, useEffect } from 'react';

export default function Instructions() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hideInstructions = () => setVisible(false);

    window.addEventListener('mousedown', hideInstructions);
    window.addEventListener('wheel', hideInstructions);

    const timeout = setTimeout(() => setVisible(false), 5000);

    return () => {
      window.removeEventListener('mousedown', hideInstructions);
      window.removeEventListener('wheel', hideInstructions);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className={`absolute bottom-1/4 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gray-800 px-4 py-2 text-xl text-nowrap text-white transition-opacity duration-1000 md:bottom-1/3 md:text-2xl lg:bottom-1/5 ${visible ? 'opacity-50' : 'opacity-0'}`}
    >
      <p>🎥 Scroll to zoom in/out</p>
      <p>🕹 Drag to look around</p>
    </div>
  );
}
