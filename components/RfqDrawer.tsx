"use client";

import React, { useState, useEffect } from "react";
import { X, Send, MessageSquare, Copy, Check } from "lucide-react";
import { PRODUCTS, COMPANY_INFO } from "@/data/products";

interface RfqDrawerProps {
  isOpen: boolean;
  preselectedProductId?: string;
  onClose: () => void;
}

export default function RfqDrawer({
  isOpen,
  preselectedProductId,
  onClose
}: RfqDrawerProps) {
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("NCR / Greater Noida");
  const [customNotes, setCustomNotes] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedProductId) {
      setSelectedProductIds([preselectedProductId]);
    } else if (selectedProductIds.length === 0) {
      setSelectedProductIds([PRODUCTS[0].id]);
    }
  }, [preselectedProductId, isOpen]);

  if (!isOpen) return null;

  const toggleProduct = (id: string) => {
    if (selectedProductIds.includes(id)) {
      if (selectedProductIds.length > 1) {
        setSelectedProductIds(selectedProductIds.filter((pId) => pId !== id));
      }
    } else {
      setSelectedProductIds([...selectedProductIds, id]);
    }
  };

  const selectedProductsNames = PRODUCTS.filter((p) =>
    selectedProductIds.includes(p.id)
  )
    .map((p) => p.name)
    .join(", ");

  const generatedMsg = `Hi Siddhivinayak Enterprises, I would like to request an industrial quote for:

*Products:* ${selectedProductsNames || "General Components"}
*Company Name:* ${companyName || "N/A"}
*Contact Name:* ${contactName || "N/A"}
*Phone:* ${phone || "N/A"}
*Email:* ${email || "N/A"}
*Delivery Location:* ${deliveryLocation}
*Specific Requirements/Dimensions:* ${customNotes || "Standard catalogue specifications required."}

Looking forward to your quotation and pricing sheet.`;

  const handleWhatsAppSend = () => {
    const encoded = encodeURIComponent(generatedMsg);
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encoded}`, "_blank");
  };

  const handleCopyQuote = () => {
    navigator.clipboard.writeText(generatedMsg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="w-full max-w-xl h-full bg-white text-slate-900 flex flex-col shadow-2xl overflow-y-auto border-l border-slate-200">

        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white/95 backdrop-blur-md">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200">
              <Send className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-slate-900">Request For Quote (RFQ)</h3>
              <p className="text-xs text-slate-500 font-medium">Siddhivinayak Enterprises • Sales Division</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6 space-y-6 flex-1">

          {/* Step 1: Select Component Division */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">
              1. Select Products for Quotation (Select one or multiple)
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {PRODUCTS.map((prod) => {
                const isSelected = selectedProductIds.includes(prod.id);

                return (
                  <button
                    key={prod.id}
                    type="button"
                    onClick={() => toggleProduct(prod.id)}
                    className={`p-3 rounded-xl text-left border text-xs font-bold transition-all flex items-center justify-between ${isSelected
                        ? "bg-blue-50 border-blue-600 text-blue-900 shadow-2xs"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                  >
                    <span>{prod.name}</span>
                    {isSelected && <Check className="w-4 h-4 text-blue-700 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Contact Information */}
          <div className="space-y-4 pt-2 border-t border-slate-200">
            <label className="block text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
              2. Client & Contact Information
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-700 font-bold mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Acme Solar / Auto Tech"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white font-medium"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-700 font-bold mb-1">
                  Contact Person *
                </label>
                <input
                  type="text"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white font-medium"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-700 font-bold mb-1">
                  Mobile / Phone Number *
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 9876543210"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white font-medium"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-700 font-bold mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-700 font-bold mb-1">
                Delivery Destination
              </label>
              <input
                type="text"
                value={deliveryLocation}
                onChange={(e) => setDeliveryLocation(e.target.value)}
                placeholder="e.g. Greater Noida / Noida / Delhi NCR / Pune"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white font-medium"
              />
            </div>
          </div>

          {/* Step 3: Custom Dimensions */}
          <div className="pt-2 border-t border-slate-200">
            <label className="block text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
              3. Specification & Quantity Notes
            </label>
            <textarea
              rows={3}
              value={customNotes}
              onChange={(e) => setCustomNotes(e.target.value)}
              placeholder="Specify required thickness (mm), density, dimensions, CAD drawing details or estimated monthly quantity..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white font-medium"
            />
          </div>

          {/* Generated Quote Preview */}
          {/* <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                RFQ Output Message Preview
              </span>
              <button
                onClick={handleCopyQuote}
                className="text-[11px] text-blue-700 hover:text-blue-800 font-bold flex items-center space-x-1"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied!" : "Copy Text"}</span>
              </button>
            </div>
            <pre className="text-[11px] text-slate-800 whitespace-pre-wrap font-sans bg-white p-3 rounded-lg border border-slate-200 leading-relaxed font-medium">
              {generatedMsg}
            </pre>
          </div> */}

        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 z-20 p-6 border-t border-slate-200 bg-white space-y-3">
          <button
            onClick={handleWhatsAppSend}
            className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 flex items-center justify-center space-x-2 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send Quote Request via WhatsApp ({COMPANY_INFO.phonePrimary})</span>
          </button>

          <a
            href={`mailto:${COMPANY_INFO.email}?subject=RFQ%20Quote%20Request%20for%20${encodeURIComponent(selectedProductsNames)}&body=${encodeURIComponent(generatedMsg)}`}
            className="w-full py-3 px-4 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center space-x-2 transition-colors"
          >
            <Send className="w-4 h-4 text-blue-700" />
            <span>Send Quote Request via Official Email</span>
          </a>
        </div>

      </div>
    </div>
  );
}
