"use client";

import React, { useState } from "react";
import { X, Download, ChevronLeft, ChevronRight, FileText, ExternalLink } from "lucide-react";
import { PRODUCTS } from "@/data/products";

interface PdfCatalogueViewerModalProps {
  isOpen: boolean;
  initialPage?: number;
  onClose: () => void;
}

export default function PdfCatalogueViewerModal({
  isOpen,
  initialPage = 1,
  onClose
}: PdfCatalogueViewerModalProps) {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  if (!isOpen) return null;

  const totalPages = 9;

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const pageProduct = PRODUCTS.find((p) => p.pdfPage === currentPage);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-5xl h-[92vh] bg-white border border-slate-200 rounded-2xl shadow-2xl text-slate-900 flex flex-col overflow-hidden">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-200 bg-slate-50 shrink-0">
          <div className="flex items-center space-x-3">
            <FileText className="w-5 h-5 text-amber-700" />
            <div>
              <h3 className="text-sm font-extrabold text-slate-900 flex items-center space-x-2">
                <span>Official Product Catalogue PDF</span>
                <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-full">
                  Page {currentPage} of {totalPages}
                </span>
              </h3>
              <p className="text-[11px] text-slate-500 font-medium">
                Siddhivinayak Enterprises • Industrial Components Manufacturer
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href="/siddhivinayak_catalogue.pdf"
              download="Siddhivinayak_Enterprises_Catalogue.pdf"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold transition-colors shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Page Viewer Body */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-slate-100">
          
          {/* Main Document Display */}
          <div className="flex-1 relative flex items-center justify-center p-4 overflow-auto">
            
            {/* Previous Page Button */}
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-white/90 border border-slate-300 text-slate-800 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Page Image */}
            <div className="max-h-full max-w-full flex items-center justify-center p-2">
              <img
                src={`/products/page_${currentPage}.png`}
                alt={`Catalogue Page ${currentPage}`}
                className="max-h-[75vh] w-auto object-contain rounded-xl shadow-xl border border-slate-300 bg-white"
              />
            </div>

            {/* Next Page Button */}
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-white/90 border border-slate-300 text-slate-800 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Sidebar Thumbnail Selector */}
          <div className="w-full md:w-64 border-t md:border-t-0 md:border-l border-slate-200 bg-white p-3 overflow-y-auto shrink-0 space-y-2">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-1">
              Catalogue Navigation
            </h4>
            
            <div className="grid grid-cols-3 md:grid-cols-1 gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                const isSelected = pageNum === currentPage;
                const prod = PRODUCTS.find((p) => p.pdfPage === pageNum);

                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`p-2 rounded-xl text-left border transition-all flex items-center space-x-2 ${
                      isSelected
                        ? "bg-blue-50 border-blue-600 ring-1 ring-blue-600"
                        : "bg-slate-50 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                      isSelected ? "bg-blue-700 text-white" : "bg-slate-200 text-slate-700"
                    }`}>
                      {pageNum}
                    </span>
                    <div className="line-clamp-1 text-xs font-bold text-slate-800">
                      {pageNum === 1 ? "Cover Page" : pageNum === 9 ? "Contact Us" : prod?.name || `Page 0${pageNum}`}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="px-6 py-3 border-t border-slate-200 bg-white flex items-center justify-between text-xs text-slate-600 shrink-0">
          <div>
            {pageProduct ? (
              <span className="text-blue-900 font-semibold">
                Currently Viewing: <strong className="text-slate-900">{pageProduct.name}</strong>
              </span>
            ) : (
              <span>Siddhivinayak Enterprises • Surajpur Industrial Area Greater Noida</span>
            )}
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="/siddhivinayak_catalogue.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline font-bold flex items-center space-x-1"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open raw PDF</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
