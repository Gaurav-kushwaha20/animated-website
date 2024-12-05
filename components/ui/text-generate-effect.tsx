"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TextGenerateEffect = ({
  className,
  filter = true,
  duration = 0.5,
}: {
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const data = [
    "Crafting dynamic and scalable solutions, one line of code at a time",
    "Turning ideas into interactive realities with Next.js and JavaScript",
    "Passionate about creating user-first web applications with Next.js",
    "Empowering the web, one React component at a time",
    "Designing full-stack solutions with Next.js, Express, and MongoDB",
    "Creating robust and scalable applications, one API call at a time",
    "Transforming complex ideas into seamless user experiences with modern web tech",
    "Building the future of web apps with Next.js, Express, and MongoDB",
    "Empowering businesses with dynamic and data-driven web solutions",
    "Where backend meets frontend, delivering perfection every step of the way",
    "Crafting intelligent web solutions with React, Express, and MongoDB",
    "Merging innovation and simplicity, one full-stack application at a time",
    "Building seamless web experience with the power of JavaScript and Next.js",
  ];

  const [words, setWords] = useState<string | null>(null);

  // Select a random quote on mount
  useEffect(() => {
    const randomQuote = data[Math.floor(Math.random() * data.length)];
    console.log("Selected Quote:", randomQuote); // Debug log
    setWords(randomQuote); // Update state with random quote
  }, []);

  // Fallback for loading
  if (!words) {
    return <p>Loading...</p>;
  }

  const wordsArray = words.split(" ");

  return (
    <div className={`font-bold ${className}`}>
      <motion.div
        className="dark:text-white text-black leading-snug tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration }}
      >
        {wordsArray.map((word, idx) => (
          <motion.span
            key={idx}
            className={idx > 5 ? "text-purple" : "dark:text-white text-black"}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: idx * 0.2 }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
