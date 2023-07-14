"use client";

import { motion } from "framer-motion";
import { Inter, Cormorant_Unicase } from 'next/font/google'


const comic_nueue = Cormorant_Unicase({
  subsets: ['latin'],
  weight: ['700'] // Specify the desired font weights here
});


const AnimatedTextWord = ({ text }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.h1
          variants={child}
          style={{ marginRight: "15px" }}
          key={index}
          className = {`${comic_nueue.className} mb-3 text-6xl lg:text-8xl font-bold bg-gradient-to-r from-gray-300 to-gray-300 text-transparent bg-clip-text`}
        >
          {word}
        </motion.h1>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;