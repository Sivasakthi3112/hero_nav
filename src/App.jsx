import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function App(){
  return (
    <div className="antialiased text-gray-900">
      <Navbar />
      <main className="pt-20">
        <Hero />

        {/* Bonus Section 1 - Services */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
            <h2 className="text-2xl font-bold">Services</h2>
            <p className="mt-4 text-gray-600 max-w-2xl">Strategy, product design, and engineering to help companies ship fast with quality.</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg shadow">Design Systems</div>
              <div className="p-6 bg-white rounded-lg shadow">Web Applications</div>
              <div className="p-6 bg-white rounded-lg shadow">Brand Identity</div>
            </div>
          </div>
        </section>

        {/* Bonus Section 2 - Work */}
        <section id="work" className="py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
            <h2 className="text-2xl font-bold">Selected work</h2>
            <p className="mt-4 text-gray-600 max-w-2xl">Projects spanning e-commerce, B2B dashboards, and product design.</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-lg overflow-hidden shadow">
                <img src="/src/assets/placeholder.jpg" alt="proj" className="w-full h-44 object-cover" />
                <div className="p-4">Project A — E-comm</div>
              </div>
              <div className="rounded-lg overflow-hidden shadow">
                <img src="/src/assets/placeholder.jpg" alt="proj" className="w-full h-44 object-cover" />
                <div className="p-4">Project B — SaaS</div>
              </div>
              <div className="rounded-lg overflow-hidden shadow">
                <img src="/src/assets/placeholder.jpg" alt="proj" className="w-full h-44 object-cover" />
                <div className="p-4">Project C — Brand</div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 text-center text-sm text-gray-500">© {new Date().getFullYear()} LEO9 — Demo build</footer>
      </main>
    </div>
  )
}