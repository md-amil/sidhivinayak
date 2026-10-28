"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCatalog from "@/components/ProductCatalog";
import ProductModal from "@/components/ProductModal";
import MaterialSpecMatrix from "@/components/MaterialSpecMatrix";
import IndustrySolutions from "@/components/IndustrySolutions";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PdfCatalogueViewerModal from "@/components/PdfCatalogueViewerModal";
import RfqDrawer from "@/components/RfqDrawer";
import FloatingQuickActions from "@/components/FloatingQuickActions";
import { Product } from "@/data/products";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // RFQ Drawer state
  const [rfqOpen, setRfqOpen] = useState(false);
  const [rfqProductId, setRfqProductId] = useState<string | undefined>(undefined);

  // PDF Catalogue Viewer state
  const [pdfViewerOpen, setPdfViewerOpen] = useState(false);
  const [pdfViewerPage, setPdfViewerPage] = useState(1);

  const handleOpenRfq = (productId?: string) => {
    setRfqProductId(productId);
    setRfqOpen(true);
  };

  const handleOpenPdfViewer = (page: number = 1) => {
    setPdfViewerPage(page);
    setPdfViewerOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation Header with Integrated Search */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenRfq={handleOpenRfq}
        onOpenPdfViewer={() => handleOpenPdfViewer(1)}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        {/* Clean Hero Section */}
        <Hero
          onOpenRfq={() => handleOpenRfq()}
          onOpenPdfViewer={() => handleOpenPdfViewer(1)}
        />

        {/* Product Catalogue Grid */}
        <ProductCatalog
          searchQuery={searchQuery}
          onSelectProduct={setSelectedProduct}
          onOpenRfq={handleOpenRfq}
          onOpenPdfViewerPage={handleOpenPdfViewer}
        />

        {/* Material Specification Matrix */}
        <MaterialSpecMatrix />

        {/* Industry Solutions */}
        <IndustrySolutions onOpenRfq={() => handleOpenRfq()} />

        {/* About Manufacturing Capabilities */}
        <AboutSection />

        {/* Official Contact & Plant Info */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenPdfViewer={() => handleOpenPdfViewer(1)}
        onOpenRfq={() => handleOpenRfq()}
      />

      {/* Floating Quick Action Bar */}
      <FloatingQuickActions
        onOpenRfq={() => handleOpenRfq()}
        onOpenPdfViewer={() => handleOpenPdfViewer(1)}
      />

      {/* Modals & Drawers */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenRfq={handleOpenRfq}
        onOpenPdfViewerPage={handleOpenPdfViewer}
      />

      <PdfCatalogueViewerModal
        isOpen={pdfViewerOpen}
        initialPage={pdfViewerPage}
        onClose={() => setPdfViewerOpen(false)}
      />

      <RfqDrawer
        isOpen={rfqOpen}
        preselectedProductId={rfqProductId}
        onClose={() => setRfqOpen(false)}
      />
    </div>
  );
}
