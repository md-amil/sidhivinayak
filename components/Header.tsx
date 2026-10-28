"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, FileText, Send, Menu, X, Search, Factory } from "lucide-react";
import { COMPANY_INFO } from "@/data/products";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOpenRfq: (productId?: string) => void;
  onOpenPdfViewer: () => void;
}

export default function Header({
  searchQuery,
  onSearchChange,
  onOpenRfq,
  onOpenPdfViewer
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchInput = (value: string) => {
    onSearchChange(value);
    // Scroll to products catalog section smoothly
    const catalogEl = document.getElementById("products");
    if (catalogEl && value.trim().length > 0) {
      catalogEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-header shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">

          {/* Logo & Brand Info */}
          <a href="#" className="group shrink-0" aria-label="Siddhivinayak Enterprises home">
            <Image
              src="/logo.png"
              alt="Siddhivinayak Enterprises — Industrial Components Manufacturer"
              width={230}
              height={80}
              priority
              className="h-18 w-[200px] sm:w-[230px] object-contain transition-opacity group-hover:opacity-90"
            />
          </a>

          {/* Integrated Header Search Bar (Desktop & Tablet) */}
          {/* <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchInput(e.target.value)}
                placeholder="Search components (e.g. EVA Gasket, Silicon, Nomex, Mould)..."
                className="w-full bg-slate-100 hover:bg-slate-100/90 focus:bg-white text-slate-900 text-xs rounded-xl pl-9 pr-8 py-2.5 border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 focus:outline-none transition-all placeholder:text-slate-400 font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div> */}

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs font-bold text-slate-700">
            <a href="#products" className="hover:text-blue-700 transition-colors">
              Products
            </a>
            <a href="#materials" className="hover:text-blue-700 transition-colors">
              Materials
            </a>
            <a href="#solutions" className="hover:text-blue-700 transition-colors">
              Industries
            </a>
            <a href="#about" className="hover:text-blue-700 transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-blue-700 transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center space-x-2.5 shrink-0">
            <button
              onClick={onOpenPdfViewer}
              className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-amber-600" />
              <span> Catalogue</span>
            </button>

            <button
              onClick={() => onOpenRfq()}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold btn-primary-blue transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get Quote</span>
            </button>
          </div>

          {/* Mobile Actions & Menu */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => onOpenRfq()}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-blue-700 hover:bg-blue-800"
            >
              RFQ
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchInput(e.target.value)}
              placeholder="Search components (e.g. EVA, Silicon, Nomex)..."
              className="w-full bg-slate-100 text-slate-900 text-xs rounded-xl pl-9 pr-8 py-2 border border-slate-200 focus:outline-none focus:border-blue-600"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            Product Catalogue
          </a>
          <a
            href="#materials"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            Material Specifications
          </a>
          <a
            href="#solutions"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            Industry Solutions
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            About Us
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            Contact Details
          </a>

          <div className="pt-3 border-t border-slate-200 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPdfViewer();
              }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200"
            >
              <FileText className="w-4 h-4 text-amber-600" />
              <span>Inspect Official PDF Catalogue</span>
            </button>
            <a
              href={`tel:${COMPANY_INFO.phonePrimary}`}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-blue-700 text-white"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {COMPANY_INFO.phonePrimary}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
