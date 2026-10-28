"use client";

import React from "react";
import { ArrowRight, FileText, CheckCircle2, Factory, MapPin, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/data/products";

interface HeroProps {
  onOpenRfq: () => void;
  onOpenPdfViewer: () => void;
}

export default function Hero({ onOpenRfq, onOpenPdfViewer }: HeroProps) {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 bg-slate-50 border-b border-slate-200/80 grid-pattern-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">

          {/* Trust Badge */}
          {/* <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full gold-badge text-xs font-bold tracking-wide shadow-2xs">
            <Factory className="w-3.5 h-3.5 text-amber-600" />
            <span>INDUSTRIAL COMPONENTS MANUFACTURER</span>
            <span className="w-1 h-1 rounded-full bg-amber-500" />
            <span>SINCE 2022</span>
          </div> */}

          {/* Main Hero Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Precision Engineering & Industrial Components for{" "}
            <span className="blue-gradient-text">NCR & Pan-India</span>
          </h1>

          {/* Clean Subheading */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Direct manufacturer of <strong className="text-slate-900 font-bold">EVA & Silicon Gaskets</strong>,{" "}
            <strong className="text-slate-900 font-bold">Plastic Injection Moulds</strong>,{" "}
            <strong className="text-slate-900 font-bold">EPE Foam Fitments</strong>,{" "}
            <strong className="text-slate-900 font-bold">Nomex® Electrical Insulation</strong>, &{" "}
            <strong className="text-slate-900 font-bold">Protective Packaging</strong>.
          </p>

          {/* Primary CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button
              onClick={onOpenRfq}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs font-bold text-white btn-primary-blue flex items-center justify-center space-x-2 transition-transform active:scale-95"
            >
              <span>Request Custom Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenPdfViewer}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 flex items-center justify-center space-x-2 transition-colors shadow-2xs"
            >
              <FileText className="w-4 h-4 text-amber-600" />
              <span>Inspect Official PDF Catalogue</span>
            </button>
          </div> */}

          {/* Plant Stats & Location Cards */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="clean-card p-4.5 rounded-2xl">
              <p className="text-2xl font-black text-slate-900">2022</p>
              <p className="text-xs font-semibold text-slate-500 mt-0.5">Established Year</p>
              <div className="flex items-center space-x-1 mt-2 text-[11px] font-bold text-blue-700">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Greater Noida Unit</span>
              </div>
            </div>

            <div className="clean-card p-4.5 rounded-2xl">
              <p className="text-2xl font-black text-blue-700">7+</p>
              <p className="text-xs font-semibold text-slate-500 mt-0.5">Product Divisions</p>
              <p className="text-[11px] text-slate-600 mt-2 font-medium">Gaskets, Foams, Moulds & Papers</p>
            </div>

            <div className="clean-card p-4.5 rounded-2xl">
              <p className="text-2xl font-black text-slate-900">100%</p>
              <p className="text-xs font-semibold text-slate-500 mt-0.5">Custom Specifications</p>
              <p className="text-[11px] text-slate-600 mt-2 font-medium">Per CAD Drawing / Sample</p>
            </div>

            <div className="clean-card p-4.5 rounded-2xl">
              <div className="flex items-center space-x-1 text-blue-700">
                <MapPin className="w-4 h-4 shrink-0" />
                <span className="text-sm font-bold text-slate-900">Surajpur Site-B</span>
              </div>
              <p className="text-xs font-semibold text-slate-500 mt-0.5">Industrial Area</p>
              <p className="text-[11px] text-slate-600 mt-2 font-medium">Greater Noida, NCR</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
