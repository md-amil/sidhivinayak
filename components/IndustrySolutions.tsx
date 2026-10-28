"use client";

import React, { useState } from "react";
import { INDUSTRY_SOLUTIONS } from "@/data/products";
import { Sun, Car, Zap, Package, CheckCircle2, ArrowRight } from "lucide-react";

interface IndustrySolutionsProps {
  onOpenRfq: () => void;
}

export default function IndustrySolutions({ onOpenRfq }: IndustrySolutionsProps) {
  const [activeTab, setActiveTab] = useState<string>("solar");

  const activeSolution = INDUSTRY_SOLUTIONS.find((s) => s.id === activeTab) || INDUSTRY_SOLUTIONS[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Sun":
        return <Sun className="w-6 h-6 text-amber-600" />;
      case "Car":
        return <Car className="w-6 h-6 text-blue-700" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-yellow-600" />;
      case "Package":
        return <Package className="w-6 h-6 text-emerald-600" />;
      default:
        return <Sun className="w-6 h-6 text-blue-700" />;
    }
  };

  return (
    <section id="solutions" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-2">
            Target Industry Applications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tailored Engineering for Specialised Sectors
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Siddhivinayak Enterprises supplies mission-critical industrial components for major manufacturing hubs in Greater Noida, NCR, and across India.
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {INDUSTRY_SOLUTIONS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`p-4 rounded-2xl border text-left flex items-center space-x-3 transition-all ${
                activeTab === item.id
                  ? "bg-blue-50/80 border-blue-600 shadow-md shadow-blue-700/10"
                  : "bg-slate-50 border-slate-200 hover:bg-slate-100"
              }`}
            >
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                {getIcon(item.icon)}
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-slate-900 line-clamp-1">{item.name}</h4>
                <span className="text-[11px] text-slate-500 font-semibold">Custom Solutions</span>
              </div>
            </button>
          ))}
        </div>

        {/* Industry Details Card */}
        <div className="clean-card rounded-2xl p-8 bg-slate-50 border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                {getIcon(activeSolution.icon)}
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                {activeSolution.name}
              </h3>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              {activeSolution.description}
            </p>

            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-3">
                Recommended Component Lines:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeSolution.products.map((prodName, idx) => (
                  <div key={idx} className="flex items-center space-x-2 bg-white p-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>{prodName}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 space-y-4 text-center shadow-xs">
            <h4 className="text-lg font-extrabold text-slate-900">Need Custom Component Development?</h4>
            <p className="text-xs text-slate-600 font-normal">
              We engineer custom sizes, shapes, profiles, and materials tailored to your specific CAD drawings or component samples.
            </p>

            <button
              onClick={onOpenRfq}
              className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white btn-primary-blue flex items-center justify-center space-x-2"
            >
              <span>Submit Industry Spec RFQ</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
