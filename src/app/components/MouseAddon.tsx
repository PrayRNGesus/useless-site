"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MouseFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-full absolute overflow-hidden inset-0 wrapper z-[1]">
      <motion.div
        className="absolute w-5 h-5 bg-transparent rounded-full z-[25] pointer-events-none cursor-none bshad"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          translateX: '-50%',
          translateY: '-50%',
        }}
      ></motion.div>
    </div>
  );
};

export default MouseFollower;
