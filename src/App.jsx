import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div className="relative bg-black p-12 flex space-x-9">
        <img src="src/assets/opera.png" alt="logo image" />

        <ul className="flex space-x-8 text-white m-4">
          <li>
            <a
              href="#"
              className="text-white text-center font-bold bg-transparent p-4 m-4 hover:bg-stone-500 rounded-lg hover:px-7 py-5 rounded-m hover:text-rose-700"
            >
              Browsers
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white text-center font-bold bg-transparent p-4 m-4 hover:bg-stone-500 rounded-lg hover:px-7 py-5 rounded-m hover:text-rose-700"
            >
              Privacy & security
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white text-center font-bold bg-transparent p-4 m-4 hover:bg-stone-500 rounded-lg hover:px-7 py-5 rounded-m hover:text-rose-700"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white text-center font-bold bg-transparent p-4 m-4 hover:bg-stone-500 rounded-lg hover:px-7 py-5 rounded-m hover:text-rose-700"
            >
              Help
            </a>
          </li>
        </ul>

        <button className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-rose-600 text-black font-bold rounded-md px-9 py-7 text-xl">
          Download Opera GX
        </button>
      </div>

      <div className="bg-gradient-to-r from-black via-white/2 to-black h-screen py-4 flex flex-col items-center space-y-9 p-6 bg-blend-overlay">
        <h1 className="text-7xl text-center text-rose-600">BREAK FREE WITH OPERA GX</h1>
        <p className="text-white text-center font-bold text-2xl">
          Unlock more ways to make your browser yours with deeper personalization and an expanded modding universe.
          <a href="http:/https://www.youtube.com/watch?v=17vC8qZILJE/"> See more</a>
        </p>

        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-rose-600 text-black font-bold rounded-sm px-12 py-7 text-xl">
          Download Opera GX
        </button>
        <img src="src/assets/guru.png" alt="logo image" />
      </div>

      <div className="bg-black min-h-80"></div>

      <div className="flex justify-end bg-black w-full h-auto overflow-hidden rounded-l">
        <div className="bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-center min-h-screen px-40 py-20 space-y-14">
          <img src="src/assets/logo.png" alt="logo image" className="mb-2" />
          <h1 className="text-5xl font-bold text-white">
            Make every
            <br />
            pixel personal
          </h1>
          <p className="text-rose-200">
            Match your browser to your setup, your mood or whatever you’re playing with Opera GX
          </p>
        </div>

        <div className="w-1/2 bg-gradient-to-b from-black to-gray-900">
          <img
            src="src/assets/extra.png"
            alt="logo image"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className="flex justify-end bg-black w-full h-auto overflow-hidden rounded-l">
      <div className="bg-gradient from-black to-gray-900 flex items-center justify-center min-h-screen px-20 space-x-14">

          <h1 className="text-xl font-bold text-white">
           FRESH AF FEATURES
          </h1>
          <p className="text-rose-200 text-8xl">

          Enjoy the internet <br />
          from your own POV
          </p>

        </div>

        <div className="w-1/2 bg-gradient-to-b from-black to-gray-900">
          <img
            src="src/assets/solo.png"
            alt="logo image"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      

      <div className="flex flex-cols">
        <h2>FRESH AF FEATURES</h2>
        <p>Enjoy the internet from your own POV</p>
        <img src="src/assets/solo.png" alt="chat image" />
      </div>

      <div>
        <p>
          Rein in your system resources or burn through them in our expanded modding universe. The choice is yours
        </p>
      </div>

      <div>
        <h1>EVERYTHING YOU Want IN A BROWSER</h1>
        <img src="src/assets/solo.png" alt="maso image" />
      </div>
    </>
  )
}

export default App

