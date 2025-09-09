import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const items = ['Work', 'Services', 'About', 'Contact']

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-40 bg-transparent"
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-xl font-bold">LEO9</div>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-800">
            {items.map(i => (
              <a key={i} href={`#${i.toLowerCase()}`} className="hover:underline hover:underline-offset-4">
                {i}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden md:inline-block px-4 py-2 border rounded-md text-sm hover:bg-gray-100">Let's talk</a>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <details className="relative">
              <summary className="cursor-pointer p-2 rounded-md bg-white/80">☰</summary>
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md p-4">
                {items.map(i => (
                  <a key={i} href={`#${i.toLowerCase()}`} className="block py-2">{i}</a>
                ))}
                <a href="#contact" className="block mt-2 font-medium">Let's talk</a>
              </div>
            </details>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}