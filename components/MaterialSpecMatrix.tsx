"use client";

import React, { useState } from "react";
import { MATERIAL_COMPARISON } from "@/data/products";
import { Layers, ShieldCheck } from "lucide-react";

export default function MaterialSpecMatrix() {
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);

  return (
    <section id="materials" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
            <Layers className="w-4 h-4" />
            <span>Industrial Material Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Raw Material & Performance Matrix
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Compare thermal limits, material densities, dielectric strength, and target applications for our industrial product range.
          </p>
        </div>

        {/* Clean Table */}
        <div className="clean-card rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-4 px-6 text-blue-900">Material Name</th>
                  <th className="py-4 px-6">Density / Grade</th>
                  <th className="py-4 px-6">Temperature Range</th>
                  <th className="py-4 px-6">Key Performance Attribute</th>
                  <th className="py-4 px-6">Primary Industrial Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {MATERIAL_COMPARISON.map((row, idx) => (
                  <tr
                    key={idx}
                    onClick={() => setSelectedMaterial(row.material === selectedMaterial ? null : row.material)}
                    className={`cursor-pointer transition-colors ${
                      selectedMaterial === row.material
                        ? "bg-blue-50 border-l-4 border-l-blue-700"
                        : "hover:bg-slate-50"
                    }`}
                  >
                    <td className="py-4 px-6 font-bold text-slate-900 flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-blue-700 shrink-0" />
                      <span>{row.material}</span>
                    </td>
                    <td className="py-4 px-6 text-slate-700 font-mono text-xs font-medium">
                      {row.density}
                    </td>
                    <td className="py-4 px-6 text-amber-800 font-extrabold text-xs">
                      {row.tempRange}
                    </td>
                    <td className="py-4 px-6 text-slate-800 font-medium">
                      {row.keyFeature}
                    </td>
                    <td className="py-4 px-6 text-slate-600 text-xs">
                      {row.primaryUse}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600">
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>All raw materials comply with international industrial quality & thermal standards.</span>
            </div>
            <span className="text-amber-800 font-bold">Custom composite compounding available upon request</span>
          </div>
        </div>

      </div>
    </section>
  );
}
