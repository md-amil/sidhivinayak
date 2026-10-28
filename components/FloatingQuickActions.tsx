"use client";

import React from "react";
import { Phone, MessageSquare, Send, FileText } from "lucide-react";
import { COMPANY_INFO } from "@/data/products";

interface FloatingQuickActionsProps {
  onOpenRfq: () => void;
  onOpenPdfViewer: () => void;
}

export default function FloatingQuickActions({
  onOpenRfq,
  onOpenPdfViewer
}: FloatingQuickActionsProps) {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-md glass-header border border-slate-300 rounded-2xl p-2 shadow-xl flex items-center justify-between space-x-2 bg-white/95 backdrop-blur-xl">
      
      <a
        href={`tel:${COMPANY_INFO.phonePrimary}`}
        className="flex-1 py-2.5 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors border border-slate-200"
      >
        <Phone className="w-3.5 h-3.5 text-blue-700" />
        <span className="hidden xs:inline">Call</span>
      </a>

      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hi Siddhivinayak Enterprises, I would like to inquire about industrial components.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors shadow-xs"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span className="hidden xs:inline">WhatsApp</span>
      </a>

      <button
        onClick={onOpenRfq}
        className="flex-1 py-2.5 px-2 rounded-xl btn-primary-blue text-white text-xs font-bold flex items-center justify-center space-x-1.5 shadow-md shadow-blue-700/20"
      >
        <Send className="w-3.5 h-3.5" />
        <span>Get Quote</span>
      </button>

      <button
        onClick={onOpenPdfViewer}
        className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-amber-800 text-xs font-bold flex items-center justify-center space-x-1 transition-colors border border-slate-200"
        title="View PDF Catalogue"
      >
        <FileText className="w-4 h-4" />
      </button>

    </div>
  );
}
