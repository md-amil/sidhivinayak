export interface Product {
  id: string;
  name: string;
  category: 'gaskets' | 'moulding' | 'insulation' | 'packaging' | 'controls';
  categoryLabel: string;
  tagline: string;
  image: string;
  fullPageImage: string;
  pdfPage: number;
  features: string[];
  applications: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  materialOptions?: string[];
  benefits?: string[];
  typesVariants?: string[];
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "eva-gasket",
    name: "EVA Gasket",
    category: "gaskets",
    categoryLabel: "Gaskets & Seals",
    tagline: "High-density EVA foam for reliable sealing, cushioning & vibration damping",
    image: "/products/product_2.png",
    fullPageImage: "/products/page_2.png",
    pdfPage: 2,
    features: [
      "High-density EVA foam construction",
      "Superior shock absorbing performance",
      "100% Water & moisture resistant",
      "Custom sizes, profiles & shapes available"
    ],
    applications: [
      "Solar inverters packaging & enclosure sealing",
      "Automotive component dampening & gaskets",
      "Electronics & electrical insulation barriers"
    ],
    specifications: [
      { label: "Material", value: "High-density EVA Foam" },
      { label: "Density", value: "30–60 kg/m³" },
      { label: "Thickness", value: "1mm to 10mm" },
      { label: "Temperature Range", value: "-40°C to +70°C" },
      { label: "Color Options", value: "Black / White / Custom" }
    ],
    description: "Designed for reliable sealing, cushioning, and vibration damping in industrial and automotive applications. Custom shapes and sizes can be manufactured to meet precise client requirements."
  },
  {
    id: "silicon-gasket",
    name: "Silicon Gasket",
    category: "gaskets",
    categoryLabel: "Gaskets & Seals",
    tagline: "Extreme temperature weatherproof silicone gaskets up to 250°C",
    image: "/products/product_3.png",
    fullPageImage: "/products/page_3.png",
    pdfPage: 3,
    features: [
      "Heat resistant up to 250°C continuous",
      "Ultra-flexible & long-lasting durability",
      "Weatherproof & UV resistant",
      "Food grade material option available",
      "Custom precision moulding to drawing specification"
    ],
    applications: [
      "Solar inverters & renewable energy systems",
      "Electrical distribution panels & junction boxes",
      "Automotive engine bay & lighting components",
      "Medical equipment & sanitary applications"
    ],
    specifications: [
      { label: "Material", value: "High-quality Silicone Rubber" },
      { label: "Temperature Range", value: "-50°C to +250°C" },
      { label: "Hardness", value: "40–70 Shore A" },
      { label: "Thickness", value: "1mm to 8mm" },
      { label: "Color Options", value: "Orange / Custom Colors Available" }
    ],
    description: "Durable, flexible silicone gaskets designed for reliable heat, moisture and chemical resistance. Ideal for industrial, electrical and medical applications. Custom sizes and profiles available on request."
  },
  {
    id: "plastic-injection-mould",
    name: "Plastic Injection Mould Components",
    category: "moulding",
    categoryLabel: "Precision Moulding",
    tagline: "High-strength precision engineered components in Nylon66, ABS & Polycarbonate",
    image: "/products/product_4.png",
    fullPageImage: "/products/page_4.png",
    pdfPage: 4,
    features: [
      "Precision moulding for consistent high quality",
      "High strength & rigid mechanical construction",
      "Custom made as per engineering drawing or sample",
      "Prototyping & high-volume bulk production"
    ],
    materialOptions: [
      "Nylon 66 (PA66) – High mechanical strength & thermal stability",
      "ABS – Impact resistant & high structural durability",
      "Polycarbonate (PC) – Heat resistance & optical clarity / impact toughness"
    ],
    applications: [
      "Solar equipment & outdoor junction boxes",
      "Electrical enclosures, switches & cable connectors",
      "Automotive interior & structural components"
    ],
    specifications: [
      { label: "Primary Resins", value: "Nylon 66 (PA66), ABS, Polycarbonate (PC)" },
      { label: "Tolerances", value: "Precision Industrial Grade" },
      { label: "Customization", value: "Manufactured per CAD Drawing / Physical Sample" },
      { label: "Production Scale", value: "Rapid Prototyping to High-Volume Runs" }
    ],
    description: "We manufacture custom plastic injection moulded components to precise specifications. Designed for durability, dimensional accuracy, and reliability in demanding industrial environments."
  },
  {
    id: "epe-foam-fitments",
    name: "EPE Foam Fitments",
    category: "packaging",
    categoryLabel: "Protective Packaging",
    tagline: "Custom-contoured lightweight shockproof protective foam inserts",
    image: "/products/product_5.png",
    fullPageImage: "/products/page_5.png",
    pdfPage: 5,
    features: [
      "Protective multi-layer foam cushioning",
      "Custom fitments contoured to product shape",
      "Lightweight, shockproof & resilient",
      "Anti-static & moisture resistant properties"
    ],
    benefits: [
      "Safeguards delicate components during transit & storage",
      "Soft cushioning eliminates scratch and drop damage",
      "Customised to fit your exact product dimensions"
    ],
    applications: [
      "Solar inverter & power electronics packaging",
      "Electronics & sensitive testing device packing",
      "Automotive precision parts protection"
    ],
    specifications: [
      { label: "Material", value: "Expanded Polyethylene (EPE) Foam" },
      { label: "Density", value: "Custom density grades available" },
      { label: "Properties", value: "Anti-static, Shockproof, Eco-friendly, Reusable" },
      { label: "Format", value: "Die-cut custom shapes & fitment trays" }
    ],
    description: "Our EPE foam fitments are designed to provide superior protection for delicate components. Lightweight, eco-friendly, and reusable, they offer excellent shock absorption and are tailored to your product dimensions for secure packaging."
  },
  {
    id: "paper-insulation",
    name: "Paper Insulation Products",
    category: "insulation",
    categoryLabel: "Electrical Insulation",
    tagline: "High dielectric strength electrical insulation papers including Nomex® up to 220°C",
    image: "/products/product_6.png",
    fullPageImage: "/products/page_6.png",
    pdfPage: 6,
    features: [
      "Excellent high-voltage electrical insulation",
      "Superior heat resistance & dielectric breakdown strength",
      "Moisture & chemical resistant chemical barrier",
      "Flexible, easy to slot, cut & laminate"
    ],
    typesVariants: [
      "Paper Insulation Paper",
      "Transparent Insulation Paper",
      "Fleece Paper",
      "Nomex (Nomax) Thermal Insulation Paper"
    ],
    applications: [
      "Transformers, coils & motor winding insulation",
      "Solar inverter transformer core barriers",
      "Electrical panels, switchgear & busbars"
    ],
    specifications: [
      { label: "Thickness Range", value: "0.05mm to 0.5mm" },
      { label: "Temperature Class", value: "Up to 220°C (Nomex Class R/H)" },
      { label: "Dielectric Strength", value: "High Voltage Rated" },
      { label: "Supply Formats", value: "Available in Rolls, Strips & Sheets" }
    ],
    description: "Our paper insulation products provide reliable insulation and protection for electrical components. Durable, high-quality materials ensure safety and performance in demanding electrical and electronic applications. Available in various grades including Nomex for high temperature use."
  },
  {
    id: "rubber-button",
    name: "Rubber Button",
    category: "controls",
    categoryLabel: "Tactile Controls",
    tagline: "Precision tactile rubber keypads & press-activated industrial buttons",
    image: "/products/product_7.png",
    fullPageImage: "/products/page_7.png",
    pdfPage: 7,
    features: [
      "Durable elastomeric rubber material",
      "Reliable long-life push button performance",
      "Available in various custom sizes & shapes",
      "Excellent tactile feedback response",
      "Temperature & moisture resistant sealing"
    ],
    typesVariants: [
      "Circular push buttons",
      "Square & rectangular buttons",
      "Custom shaped keypads & matrix arrays",
      "Colours: Black, Gray, White / Custom"
    ],
    applications: [
      "Electronics & industrial control panels",
      "Household appliances & smart devices",
      "Industrial machinery equipment controls",
      "Medical devices & automotive keyless electronics"
    ],
    specifications: [
      { label: "Material Grade", value: "Synthetic & Silicone Rubber" },
      { label: "Actuation Life", value: "1,000,000+ Cycles" },
      { label: "Tactile Force", value: "Custom actuation force profile" },
      { label: "Color Options", value: "Black, Gray, White, Custom Colors" }
    ],
    description: "Our rubber buttons are designed for durability and consistent performance in electronic devices. Available in custom sizes, profiles, and colors to suit your application. Press-activated, reliable, and long-lasting."
  },
  {
    id: "bubble-pouch",
    name: "Bubble Pouch",
    category: "packaging",
    categoryLabel: "Protective Packaging",
    tagline: "Self-sealing air-cushioned PE bubble film pouches for shockproof shipping",
    image: "/products/product_8.png",
    fullPageImage: "/products/page_8.png",
    pdfPage: 8,
    features: [
      "Air bubble cushioning for maximum impact protection",
      "Shockproof, scratchproof & impact resistant",
      "Lightweight & flexible for reduced shipping cost",
      "Transparent & moisture resistant PE film",
      "Reusable & eco-friendly recyclable material"
    ],
    applications: [
      "Electronics & delicate circuit board packaging",
      "Solar component & inverter module shipping",
      "Fragile glass & ceramic goods protection",
      "E-commerce & online retail dispatch",
      "Industrial spare parts & hardware packaging"
    ],
    specifications: [
      { label: "Material", value: "PE Bubble Film" },
      { label: "Bubble Thickness", value: "3mm to 5mm height" },
      { label: "Closure", value: "Self-seal adhesive strip or open mouth" },
      { label: "Sizes", value: "Available in multiple standard & custom dimensions" }
    ],
    description: "Our bubble pouches provide reliable cushioning to protect products during storage and transit. The air bubble layer absorbs shock and prevents damage to delicate items. Custom sizes and self-sealing bubble pouches are available to meet packaging requirements."
  }
];

export const COMPANY_INFO = {
  name: "Siddhivinayak Enterprises",
  shortName: "Siddhivinayak",
  tagline: "Industrial Components Manufacturer",
  motto: "Quality • Reliability • Innovation",
  establishedYear: 2022,
  address: "Plot No G-89, Site-B, Surajpur Industrial Area, Greater Noida, GB Nagar, Uttar Pradesh, India",
  phonePrimary: "9457024766",
  phoneSecondary: "8287397232",
  phoneDisplay: "+91 9457024766 / +91 8287397232",
  email: "siddhivinayak7232@gmail.com",
  whatsapp: "919457024766",
  servingRegion: "Serving NCR & Pan-India Industrial Hubs",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Plot+No+G-89+Site-B+Surajpur+Industrial+Area+Greater+Noida"
};

export const INDUSTRY_SOLUTIONS = [
  {
    id: "solar",
    name: "Solar Energy & Inverters",
    description: "High-spec thermal silicone gaskets, EVA foam seals, EPE fitments, and Nomex insulation papers designed for solar inverters and outdoor junction boxes.",
    icon: "Sun",
    products: ["Silicon Gasket", "EVA Gasket", "Paper Insulation Products", "EPE Foam Fitments"]
  },
  {
    id: "automotive",
    name: "Automotive Components",
    description: "Precision plastic injection moulded parts, high-density shock absorbing EVA gaskets, and tactile rubber keypads built for rugged vehicle environments.",
    icon: "Car",
    products: ["EVA Gasket", "Plastic Injection Mould Components", "Rubber Button", "Silicon Gasket"]
  },
  {
    id: "electronics",
    name: "Electronics & Electrical",
    description: "High dielectric strength insulation paper, Nomex thermal barriers, precision plastic enclosures, and water-resistant rubber control keypads.",
    icon: "Zap",
    products: ["Paper Insulation Products", "Silicon Gasket", "Rubber Button", "Plastic Injection Mould Components"]
  },
  {
    id: "packaging",
    name: "Industrial Packaging",
    description: "Custom die-cut EPE foam fitments and self-sealing PE bubble pouches offering maximum impact damping during freight and export transit.",
    icon: "Package",
    products: ["EPE Foam Fitments", "Bubble Pouch"]
  }
];

export const MATERIAL_COMPARISON = [
  {
    material: "EVA Foam",
    density: "30–60 kg/m³",
    tempRange: "-40°C to +70°C",
    keyFeature: "High shock absorption & water resistance",
    primaryUse: "Packaging, Inverter gaskets & vibration damping"
  },
  {
    material: "Silicone Rubber",
    density: "1.2–1.3 g/cm³",
    tempRange: "-50°C to +250°C",
    keyFeature: "Extreme thermal stability & weatherproofing",
    primaryUse: "Solar inverters, high-heat seals, medical devices"
  },
  {
    material: "Nylon 66 (PA66)",
    density: "1.14 g/cm³",
    tempRange: "-40°C to +120°C",
    keyFeature: "Superior tensile strength & rigid durability",
    primaryUse: "Moulded industrial gears, connectors & housings"
  },
  {
    material: "Nomex® Insulation Paper",
    density: "0.8–1.1 g/cm³",
    tempRange: "Up to 220°C",
    keyFeature: "Extreme dielectric strength & flame resistance",
    primaryUse: "Transformers, electric motors & switchgear"
  },
  {
    material: "EPE Foam",
    density: "18–28 kg/m³",
    tempRange: "-40°C to +80°C",
    keyFeature: "Ultra-lightweight anti-static cushioning",
    primaryUse: "Custom transit fitments for delicate equipment"
  },
  {
    material: "PE Bubble Film",
    density: "Standard Air Cell",
    tempRange: "-10°C to +60°C",
    keyFeature: "Air-encapsulated shock barrier & self-seal",
    primaryUse: "Protective pouches for electronics dispatch"
  }
];
