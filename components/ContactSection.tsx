"use client";

import React, { useState } from "react";
import { COMPANY_INFO, PRODUCTS } from "@/data/products";
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2, Factory } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const formattedText = `Hi Siddhivinayak Enterprises, I am submitting an inquiry from your website:
Name: ${name}
Phone: ${phone}
Email: ${email || "N/A"}
Message: ${message}`;

    const encoded = encodeURIComponent(formattedText);
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encoded}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-2">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact Siddhivinayak Enterprises
          </h2>
          <p className="text-slate-600 text-sm mt-1 font-normal">
            Thank you for your interest in our products. We look forward to partnering with you for your industrial component needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="clean-card p-6 sm:p-7 rounded-2xl border border-slate-200 space-y-6 bg-slate-50">
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-200">
                <div className="p-3 rounded-xl bg-white border border-slate-200 text-blue-700 shadow-2xs">
                  <Factory className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">{COMPANY_INFO.name}</h3>
                  <p className="text-xs text-amber-800 font-bold uppercase tracking-wider">{COMPANY_INFO.tagline}</p>
                </div>
              </div>

              <div className="space-y-4 text-xs">
                
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold text-sm">Factory Address:</strong>
                    <span className="text-slate-700 leading-relaxed block mt-0.5 font-medium">
                      {COMPANY_INFO.address}
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold text-sm">Phone / Mobile:</strong>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                      <a
                        href={`tel:${COMPANY_INFO.phonePrimary}`}
                        className="px-3 py-1 bg-white hover:bg-slate-100 text-blue-700 rounded-lg font-extrabold border border-slate-200 transition-colors"
                      >
                        Mob: {COMPANY_INFO.phonePrimary}
                      </a>
                      <a
                        href={`tel:${COMPANY_INFO.phoneSecondary}`}
                        className="px-3 py-1 bg-white hover:bg-slate-100 text-blue-700 rounded-lg font-extrabold border border-slate-200 transition-colors"
                      >
                        Mob: {COMPANY_INFO.phoneSecondary}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold text-sm">Email Address:</strong>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-emerald-700 hover:underline block font-extrabold mt-0.5 text-sm"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

              </div>

              {/* Product Range Summary List */}
              <div className="pt-4 border-t border-slate-200">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Our Complete Product Range:
                </h4>
                <ol className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700 font-medium">
                  {PRODUCTS.map((p, i) => (
                    <li key={p.id} className="flex items-center space-x-1.5">
                      <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <span className="line-clamp-1">{p.name}</span>
                    </li>
                  ))}
                </ol>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            
            <div className="clean-card p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-xs">
              <h3 className="text-xl font-extrabold text-slate-900 mb-1">Send Us a Direct Message</h3>
              <p className="text-xs text-slate-500 mb-6 font-medium">
                Fill out the form below to connect directly with our Greater Noida sales team.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-900">Inquiry Formatted Successfully!</h4>
                  <p className="text-xs text-emerald-800 font-medium">
                    Your message has been opened in WhatsApp. Our team will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="10-digit Phone Number"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Message / Component Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about the component type, required thickness, density, or estimated quantities..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl text-xs font-bold text-white btn-primary-blue flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Submit Inquiry via WhatsApp / Sales Line</span>
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
