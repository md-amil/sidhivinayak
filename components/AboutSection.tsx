"use client";

import React from "react";
import { COMPANY_INFO } from "@/data/products";
import { Factory, MapPin, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Story & Credentials */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-700">
              <Factory className="w-4 h-4" />
              <span>About Siddhivinayak Enterprises</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Leading Industrial Components Manufacturer in NCR
            </h2>

            <p className="text-sm text-slate-700 leading-relaxed">
              Established in <strong className="text-slate-900 font-bold">2022</strong> at <strong className="text-amber-800 font-bold">Plot No G-89, Site-B, Surajpur Industrial Area, Greater Noida</strong>, Siddhivinayak Enterprises is a premier manufacturer specializing in precision-engineered industrial gaskets, plastic injection moulding, protective foam fitments, electrical insulation papers, and tactile rubber controls.
            </p>

            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              Our state-of-the-art manufacturing facility caters to leading original equipment manufacturers (OEMs) across solar energy, automotive, electrical switchgear, electronics, and heavy industrial packaging sectors.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="clean-card p-4 rounded-2xl text-center">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 mx-auto flex items-center justify-center font-extrabold text-sm mb-2">
                  Q
                </div>
                <h4 className="text-sm font-extrabold text-slate-900">Quality</h4>
                <p className="text-xs text-slate-500 mt-1">Strict dimensional tolerances & testing</p>
              </div>

              <div className="clean-card p-4 rounded-2xl text-center">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 mx-auto flex items-center justify-center font-extrabold text-sm mb-2">
                  R
                </div>
                <h4 className="text-sm font-extrabold text-slate-900">Reliability</h4>
                <p className="text-xs text-slate-500 mt-1">Dependable supply chain & fast dispatch</p>
              </div>

              <div className="clean-card p-4 rounded-2xl text-center">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center font-extrabold text-sm mb-2">
                  I
                </div>
                <h4 className="text-sm font-extrabold text-slate-900">Innovation</h4>
                <p className="text-xs text-slate-500 mt-1">Custom compounding & CAD tooling</p>
              </div>
            </div>

            {/* Manufacturing Capabilities */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Key Manufacturing Capabilities:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800 font-semibold">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                  <span>Die-Cut EVA & Silicone Gasket Fabrication</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                  <span>Plastic Injection Moulding (Nylon66, ABS, PC)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                  <span>Precision Contour Cut EPE Foam Packaging</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                  <span>High Dielectric Nomex® Paper Slitting</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Plant Location Card */}
          <div className="lg:col-span-5">
            <div className="clean-card rounded-2xl p-6 bg-white border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 border border-amber-200">
                  <MapPin className="w-6 h-6 shrink-0" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-slate-900">Manufacturing Plant Location</h4>
                  <p className="text-xs text-slate-500 font-medium">Surajpur Site-B Industrial Hub</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs text-slate-700">
                <p>
                  <strong className="text-slate-900 block font-bold">Factory Address:</strong>
                  {COMPANY_INFO.address}
                </p>

                <p>
                  <strong className="text-slate-900 block font-bold">Mobile Helpline:</strong>
                  {COMPANY_INFO.phoneDisplay}
                </p>

                <p>
                  <strong className="text-slate-900 block font-bold">Official Email:</strong>
                  {COMPANY_INFO.email}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-semibold">Serving NCR & All India</span>
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-800 font-extrabold underline underline-offset-2"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
