import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center" style={{background: 'linear-gradient(180deg, #f7fafc 0%, #ffffff 40%)'}}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              We build memorable digital products
            </motion.h1>

            <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.7}} className="mt-6 text-lg text-gray-600 max-w-xl">
              Design-driven engineering for ambitious brands — UI, web apps and brand experiences that scale.
            </motion.p>

            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.9}} className="mt-8 flex gap-4">
              <a href="#work" className="px-6 py-3 bg-black text-white rounded-md inline-block shadow-md hover:translate-y-[-2px]">View work</a>
              <a href="#services" className="px-6 py-3 border rounded-md inline-block">Our Services</a>
            </motion.div>

            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.1}} className="mt-8 text-sm text-gray-500">
              Trusted by small teams and big brands.
            </motion.div>
          </div>

          {/* Right illustration / cards */}
          <div className="relative">
            <motion.div initial={{scale:0.95, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:0.8}} className="bg-white rounded-2xl shadow-xl p-6">
              <img src="/src/assets/placeholder.jpg" alt="showcase" className="rounded-lg w-full h-56 object-cover" />
              <div className="mt-4">
                <div className="font-semibold">Design System — Case Study</div>
                <div className="text-sm text-gray-500 mt-1">A compact system that scales for product teams.</div>
              </div>
            </motion.div>

            <motion.div initial={{x:80, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:0.6}} className="absolute -bottom-6 left-8 bg-white border rounded-xl p-4 shadow-md w-64">
              <div className="text-xs text-gray-500">Recent project</div>
              <div className="font-medium mt-1">E-commerce rebuild</div>
              <div className="text-sm text-gray-500 mt-2">Performance improvements & design refresh.</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}