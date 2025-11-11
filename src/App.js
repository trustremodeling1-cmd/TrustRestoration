import React from 'react';
import './index.css';

export default function TrustRestoration() {
  return (
    <div className="font-sans text-gray-800">
      <header className="bg-blue-900 text-white p-6 text-center shadow-lg">
        <h1 className="text-4xl font-bold">Trust Restoration</h1>
        <p className="text-lg mt-2">24/7 Emergency Water Damage & Restoration Services</p>
        <p className="mt-2 font-semibold">Serving Spring, Houston, Humble, Kingwood, Atascocita & Cypress TX</p>
      </header>
      <section className="bg-cover bg-center py-24" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80)' }}>
        <div className="bg-black bg-opacity-50 text-white text-center py-16 px-6">
          <h2 className="text-3xl font-bold mb-4">When Disaster Strikes, Trust the Experts</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            We provide fast, reliable, and professional water damage restoration services to restore your property and peace of mind.
          </p>
          <a href="tel:2817630034" className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition">
            Call Now: 281-763-0034
          </a>
        </div>
      </section>
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            { title: 'Water Damage Restoration', desc: 'Quick extraction, drying, and repair to prevent mold and structural damage.' },
            { title: 'Mold Remediation', desc: 'Safe removal of mold and prevention of future growth for a healthy environment.' },
            { title: 'Carpet Drying', desc: 'Fast and efficient carpet drying to save your flooring and prevent odor buildup.' },
            { title: 'Sewage Cleanup', desc: 'Thorough and safe cleanup to restore your home after sewage or flood contamination.' },
            { title: 'Home Rebuild', desc: 'Complete reconstruction and remodeling after major damage or disaster.' }
          ].map((service) => (
            <div key={service.title} className="border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 bg-blue-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Why Choose Trust Restoration?</h2>
          <p className="text-lg leading-relaxed">
            At <strong>Trust Restoration</strong>, we understand that emergencies can happen anytime. That’s why we’re available <strong>24/7</strong> with a team of certified professionals ready to restore your property quickly and efficiently. Our mission is simple — to bring your home or business back to life with honesty, quality, and care.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white text-center" id="contact">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Contact Us</h2>
        <p className="text-lg mb-6">Need immediate assistance? We’re just a call away!</p>
        <p className="text-2xl font-semibold text-red-700 mb-2">281-763-0034</p>
        <p className="text-lg mb-6">trustremodeling1@gmail.com</p>
        <a href="mailto:trustremodeling1@gmail.com" className="bg-blue-900 hover:bg-blue-800 text-white py-3 px-8 rounded-lg font-semibold transition">Email Us</a>
      </section>
      <footer className="bg-blue-900 text-white text-center py-6">
        <p className="text-sm">© {new Date().getFullYear()} Trust Restoration. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
