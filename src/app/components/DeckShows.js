"use client";

import { motion } from "framer-motion";


const DeckShows = () => {
        return(
          <div className="group bg-black rounded-2xl border border-transparent px-5 py-4 transition-all hover:scale-110 whitespace-normal text-center h-[600px] cursor-pointer">
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Improv Shows
            </h2>
            <p className={`m-auto max-w-[30ch] text-sm opacity-50 overflow-auto`}>
              Yeah sometimes Sometimes, it's always me!
            </p>
          </a>
          </div>
        );
};

export default DeckShows;