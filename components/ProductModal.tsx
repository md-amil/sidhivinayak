"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Send, FileText, ChevronRight, Layers, Shield, Thermometer, Box } from "lucide-react";
import { Product } from "@/data/products";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenRfq: (productId: string) => void;
  onOpenPdfViewerPage: (page: number) => void;
}

export default function ProductModal({
  product,
  onClose,
  onOpenRfq,
  onOpenPdfViewerPage
}: ProductModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "specs" | "applications">("overview");

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border border-slate-200 rounded-2xl shadow-2xl text-slate-900 flex flex-col">
        
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white/95 backdrop-blur-md">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              {product.categoryLabel} • Page 0{product.pdfPage}
            </span>
            <h2 className="text-2xl font-black text-slate-900">{product.name}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-8">
          
          {/* Main Showcase Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Product Image Column */}
            <div className="md:col-span-5 bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col items-center justify-center relative group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <button
                onClick={() => onOpenPdfViewerPage(product.pdfPage)}
                className="mt-3 inline-flex items-center space-x-1.5 text-xs text-amber-700 hover:text-amber-800 font-bold"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Inspect PDF Catalogue Page 0{product.pdfPage}</span>
              </button>
            </div>

            {/* Quick Details Column */}
            <div className="md:col-span-7 space-y-4">
              <p className="text-base font-semibold text-blue-800 leading-relaxed">
                {product.tagline}
              </p>

              <p className="text-sm text-slate-600 leading-normal font-normal">
                {product.description}
              </p>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 gap-2.5 pt-2">
                {product.specifications.slice(0, 4).map((spec, idx) => (
                  <div key={idx} className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                      {spec.label}
                    </span>
                    <span className="text-xs font-extrabold text-slate-900 block mt-0.5">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quick Action Button */}
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onOpenRfq(product.id);
                  }}
                  className="flex-1 px-5 py-3 rounded-xl text-xs font-bold text-white btn-primary-blue flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Custom Quote for {product.name}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-slate-200 flex space-x-6 text-sm font-bold">
            <button
              onClick={() => setActiveTab("overview")}
              className={`pb-3 border-b-2 transition-colors ${
                activeTab === "overview"
                  ? "border-blue-700 text-blue-700"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              Key Features & Benefits
            </button>
            <button
              onClick={() => setActiveTab("specs")}
              className={`pb-3 border-b-2 transition-colors ${
                activeTab === "specs"
                  ? "border-blue-700 text-blue-700"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              Full Specifications
            </button>
            <button
              onClick={() => setActiveTab("applications")}
              className={`pb-3 border-b-2 transition-colors ${
                activeTab === "applications"
                  ? "border-blue-700 text-blue-700"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              Applications & Industry Uses
            </button>
          </div>

          {/* Tab 1: Overview */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Product Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-800 font-semibold">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {product.benefits && (
                <div>
                  <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-3">
                    Key Product Benefits
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5 bg-amber-50 p-3 rounded-xl border border-amber-200">
                        <Shield className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                        <span className="text-xs text-amber-900 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {product.materialOptions && (
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                    Material Grade Options
                  </h4>
                  <ul className="space-y-2">
                    {product.materialOptions.map((mat, idx) => (
                      <li key={idx} className="text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200 flex items-center space-x-2 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-700" />
                        <span>{mat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Specs */}
          {activeTab === "specs" && (
            <div className="space-y-4">
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4">Parameter</th>
                      <th className="py-3 px-4">Specification Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {product.specifications.map((spec, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="py-3.5 px-4 font-bold text-blue-900 w-1/3">
                          {spec.label}
                        </td>
                        <td className="py-3.5 px-4 text-slate-800 font-medium">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 3: Applications */}
          {activeTab === "applications" && (
            <div className="space-y-4">
              <p className="text-xs text-slate-600">
                {product.name} components manufactured by Siddhivinayak Enterprises are deployed across high-demand industrial sectors:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.applications.map((app, idx) => (
                  <div key={idx} className="flex items-start space-x-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    <Box className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">
                        Application {idx + 1}
                      </span>
                      <span className="text-xs text-slate-700 block mt-0.5 font-medium">
                        {app}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="sticky bottom-0 z-20 flex items-center justify-between px-6 py-4 border-t border-slate-200 bg-slate-50">
          <div className="text-xs text-slate-500 font-medium hidden sm:block">
            Plot No G-89 Site-B Surajpur Industrial Area Greater Noida
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenRfq(product.id);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold text-white btn-primary-blue"
          >
            Get Custom Quote
          </button>
        </div>

      </div>
    </div>
  );
}
