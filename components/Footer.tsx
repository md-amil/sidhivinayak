"use client";

import React from "react";
import { COMPANY_INFO } from "@/data/products";
import { FileText, ArrowUp, ShieldCheck } from "lucide-react";

interface FooterProps {
  onOpenPdfViewer: () => void;
  onOpenRfq: () => void;
}

export default function Footer({ onOpenPdfViewer, onOpenRfq }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-500 to-amber-400 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center font-bold text-white text-base">
                  SE
                </div>
              </div>
              <div>
                <span className="font-extrabold text-lg text-white block">
                  SIDDHIVINAYAK ENTERPRISES
                </span>
                <span className="text-[11px] text-amber-400 font-semibold">
                  Industrial Components Manufacturer • Since 2022
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-md font-normal">
              Specialized manufacturer of EVA Gaskets, Silicon Gaskets, Plastic Injection Moulds, EPE Foam Fitments, Nomex® Paper Insulation, Rubber Buttons, & PE Bubble Pouches.
            </p>

            <div className="flex items-center space-x-2 text-amber-400 font-semibold text-[11px]">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Quality • Reliability • Innovation</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Product Divisions
            </h4>
            <ul className="space-y-2 text-slate-300 font-medium">
              <li>
                <a href="#products" className="hover:text-blue-400 transition-colors">
                  EVA & Silicone Gaskets
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-blue-400 transition-colors">
                  Plastic Injection Moulding
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-blue-400 transition-colors">
                  EPE Foam Fitments
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-blue-400 transition-colors">
                  Paper Electrical Insulation
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-blue-400 transition-colors">
                  Rubber Tactile Keypads
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-blue-400 transition-colors">
                  Bubble Packaging Pouches
                </a>
              </li>
            </ul>
          </div>

          {/* Plant & Contact Summary */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Plant Location & Contact
            </h4>
            <p className="leading-relaxed text-slate-300">
              <strong className="text-white block font-semibold">Surajpur Plant:</strong>
              {COMPANY_INFO.address}
            </p>
            <p className="text-slate-300">
              <strong className="text-white block font-semibold">Sales Helpline:</strong>
              Mob: {COMPANY_INFO.phoneDisplay}
            </p>
            <p className="text-slate-300">
              <strong className="text-white block font-semibold">Official Email:</strong>
              {COMPANY_INFO.email}
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <button
                onClick={onOpenPdfViewer}
                className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-amber-300 font-semibold hover:bg-slate-700 flex items-center space-x-1"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>PDF Catalogue</span>
              </button>
              <button
                onClick={onOpenRfq}
                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold"
              >
                Request Quote
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. Catalogue Valid | For enquiries & bulk orders.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white flex items-center space-x-1 transition-colors font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
