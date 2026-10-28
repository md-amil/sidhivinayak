"use client";

import React, { useState, useMemo } from "react";
import { PRODUCTS, Product } from "@/data/products";
import { Search, Eye, Send, CheckCircle2, Filter, ChevronRight } from "lucide-react";

interface ProductCatalogProps {
  searchQuery: string;
  onSelectProduct: (product: Product) => void;
  onOpenRfq: (productId?: string) => void;
  onOpenPdfViewerPage: (page: number) => void;
}

export default function ProductCatalog({
  searchQuery,
  onSelectProduct,
  onOpenRfq,
  onOpenPdfViewerPage
}: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Products" },
    { id: "gaskets", label: "Gaskets & Seals" },
    { id: "moulding", label: "Injection Moulding" },
    { id: "insulation", label: "Electrical Insulation" },
    { id: "packaging", label: "Protective Packaging" },
    { id: "controls", label: "Rubber Controls" }
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(q) ||
        product.tagline.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.features.some((f) => f.toLowerCase().includes(q)) ||
        product.applications.some((a) => a.toLowerCase().includes(q)) ||
        product.specifications.some(
          (s) => s.label.toLowerCase().includes(q) || s.value.toLowerCase().includes(q)
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="products" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 gap-4">
          <div>
            {/* <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Extracted Product Catalogue</span>
            </div> */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Products
            </h2>
            {/* <p className="text-slate-600 text-sm mt-1 max-w-xl font-normal">
              Precision manufactured at Plot No G-89, Site-B, Surajpur Industrial Area, Greater Noida.
            </p> */}
          </div>

          {/* <div className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 self-start md:self-auto">
            Showing <span className="text-blue-700 font-bold">{filteredProducts.length}</span> of{" "}
            <span className="text-slate-900 font-bold">{PRODUCTS.length}</span> Product Lines
          </div> */}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-slate-200 pb-5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedCategory === cat.id
                ? "bg-blue-700 text-white shadow-md shadow-blue-700/20"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="clean-card rounded-2xl p-12 text-center max-w-md mx-auto my-12">
            <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900">No products matched your search</h3>
            <p className="text-xs text-slate-500 mt-1">
              Try searching for &quot;EVA&quot;, &quot;Silicon&quot;, &quot;Nomex&quot;, or &quot;Mould&quot;.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
              }}
              className="mt-4 px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-bold rounded-lg border border-blue-200"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="clean-card clean-card-hover rounded-2xl overflow-hidden flex flex-col group bg-white"
              >
                {/* Product Image Header */}
                <div className="relative bg-slate-50 p-6 flex items-center justify-center border-b border-slate-200/80 h-60 overflow-hidden">
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full catalogue-blue-badge z-10">
                    Page 0{product.pdfPage}
                  </span>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-48 w-auto object-contain transition-transform duration-500 group-hover:scale-105 z-0"
                  />

                  <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-2xs opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 space-x-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-600 text-white text-xs font-bold shadow-md flex items-center space-x-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Specs</span>
                    </button>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-[11px] font-bold text-amber-700 uppercase tracking-wider mb-1">
                      {product.categoryLabel}
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed font-normal">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Features Bullet Preview */}
                  <ul className="space-y-1.5 text-xs text-slate-700 border-t border-slate-100 pt-3">
                    {product.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0 mt-0.5" />
                        <span className="line-clamp-1 font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Card Actions */}
                  <div className="pt-2 flex items-center space-x-2 border-t border-slate-100">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors text-center border border-slate-200"
                    >
                      View Specs
                    </button>

                    <button
                      onClick={() => onOpenRfq(product.id)}
                      className="flex-1 py-2.5 px-3 rounded-xl btn-primary-blue text-white text-xs font-bold shadow-xs text-center flex items-center justify-center space-x-1"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Get Quote</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
