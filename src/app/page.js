"use client";


import Image from 'next/image'
import { useCallback } from "react";
import AnimatedTextWord from './components/AnimatedTextWord';
import AnimatedTextCharacter from './components/AnimatedTextCharacter';
import DeckWorkshops from './components/DeckWorkshops';
import DeckCorporateWorkshops from './components/DeckCorporateWorkshops';
import DeckJamSessions from './components/DeckJamSessions';
import DeckShows from './components/DeckShows';
import { Inter, Cormorant_Unicase, Pirata_One } from 'next/font/google'
import { useEffect } from 'react';

const comic_nueue = Cormorant_Unicase({
  subsets: ['latin'],
  weight: ['700'] // Specify the desired font weights here
});

const pirate_one = Pirata_One({
  subsets: ['latin'],
  weight: ['400'] // Specify the desired font weights here
});

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center">
    <div id='section1' className="flex flex-col min-h-screen items-center p-20">
        <div>
          <AnimatedTextWord text = "Improv Lore"/>
        </div>
        <div className='pb-10 text-white'><p>Experience Bangalore's Finest Improv</p></div>

        <div className="grid grid-cols-4 w-full gap-4 pb-30 text-white">
            <div>
              <DeckWorkshops />
            </div>
            <div className>
              <DeckCorporateWorkshops />
            </div>
            <div className>
              <DeckJamSessions />
            </div>
            <div className>
              <DeckShows />
            </div>
        </div>

        <div className = 'bg-black mt-20 rounded-2xl border border-transparent w-full'>
            <h2 className={`m-10 text-6xl font-bold bg-gradient-to-r from-gray-300 to-gray-300 text-transparent bg-clip-text`}>Experience Improv at it's Finest.</h2>
            <p className='m-10 text-5xl font-bold bg-gradient-to-r from-gray-300 to-gray-300 text-transparent bg-clip-text'>More than Feeling.</p>
            <p className='m-10 text-4xl font-bold bg-gradient-to-r from-gray-300 to-gray-300 text-transparent bg-clip-text'> I think I am dreaming.</p>
            <p className='m-10 text-3xl font-bold bg-gradient-to-r from-gray-300 to-gray-300 text-transparent bg-clip-text'> Somethin to believe in.</p>
        </div>
        <div id='Meet the Team' className = 'bg-black pt-30 mt-20 rounded-2xl border border-transparent w-full'>
            <h2 className={` ${pirate_one.className} m-10 text-6xl font-bold bg-gradient-to-r from-gray-300 to-gray-300 text-transparent bg-clip-text`}>Meet the Pirates</h2>
            <p className={`${pirate_one.className} m-10 text-2xl`}>We are a mix of people from different fields united by our love for Improv</p>
            <div id = "captains" className='text-center'>
              <h2 className={`${pirate_one.className} m-10 text-4xl font-bold bg-gradient-to-r from-gray-300 to-gray-300 text-transparent bg-clip-text`}>Captains</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className='bg-white rounded-full w-64 h-64 mx-auto'>
                    hello
                </div>
                <div className='bg-white rounded-full w-64 h-64 mx-auto'>
                    hello
                </div>
              </div>
            </div>
            <div id = "crew" className='text-center'>
              <h2 className={`${pirate_one.className} m-10 text-4xl font-bold bg-gradient-to-r from-gray-300 to-gray-300 text-transparent bg-clip-text`}>Crew</h2>
              <div className="grid grid-cols-5 items-center gap-4 m-10 text-white">
                <div className='bg-white rounded-full w-48 h-48 mx-auto'>
                    hello
                </div>
                <div className='bg-white rounded-full w-48 h-48 mx-auto'>
                    hello
                </div>
                <div className='bg-white rounded-full w-48 h-48 mx-auto'>
                    hello
                </div>
                <div className='bg-white rounded-full w-48 h-48 mx-auto'>
                    hello
                </div>
                <div className='bg-white rounded-full w-48 h-48 mx-auto'>
                    hello
                </div>
                <div className='bg-white rounded-full w-48 h-48 mx-auto'>
                    hello
                </div>
                <div className='bg-white rounded-full w-48 h-48 mx-auto'>
                    hello
                </div>
                <div className='bg-white rounded-full w-48 h-48 mx-auto'>
                    hello
                </div>
                <div className='bg-white rounded-full w-48 h-48 mx-auto'>
                    hello
                </div>
                <div className='bg-white rounded-full w-48 h-48 mx-auto'>
                    hello
                </div>
              </div>
            </div>
        </div>
        <div id='Contact Card' className = 'bg-black mt-20 rounded-2xl border border-transparent w-full'>
            <h2 className={`m-10 text-6xl font-bold bg-gradient-to-r from-gray-300 to-gray-300 text-transparent bg-clip-text`}>Get in touch with us!</h2>
            <div className="grid grid-cols-10 items-center gap-2 mb-10">
                <div className='bg-white rounded-full w-16 h-16 ml-10 mx-auto text-center'>
                    hello
                </div>
                <div className='bg-white rounded-full w-16 h-16 ml-10 mx-auto text-center'>
                    hello
                </div>
                <div className='bg-white rounded-full w-16 h-16 ml-10 mx-auto text-center'>
                    hello
                </div>
            </div>
            <br/>
            <p className="text-center text-gray-400 mb-10">&copy; {new Date().getFullYear()} Improv Lore Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
      
      

    </main>
  )
}
