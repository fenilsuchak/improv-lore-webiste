"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import nexticon from "../../../public/righticon.png"


const DeckWorkshops = () => {
        return(
          <div className="group bg-black rounded-2xl border border-transparent px-5 py-4 transition-all hover:scale-110 whitespace-normal text-center h-[600px] cursor-pointer">
            <h2 className={`mb-3 text-2xl font-semibold overflow-auto`}>
              4 Week-Workshops
            </h2>
            <p className={`m-auto max-w-[30ch] text-sm opacity-50 overflow-auto`}>
              My Cup runneth over, spilled my guts! Ill show you what it must be too real to touch.
            </p>
          </div>
        );
};

export default DeckWorkshops;