import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Link from "next/link";
import {
  Home as HomeIcon,
  DoorOpen,
  Warehouse,
  Car,
  DoorClosed,
  Ruler,
  LayoutGrid,
  Hammer,
  Shield,
  Leaf,
  Layers,
  Wrench,
} from "lucide-react";

const carpentryIndoor = [
  {
    title: "Extensions",
    desc: "Full structural extensions and timber builds",
    icon: HomeIcon,
  },
  {
    title: "Porches",
    desc: "Custom-built front and side porches",
    icon: DoorOpen,
  },
  {
    title: "Timber Buildings",
    desc: "Garden rooms, sheds, and workshops",
    icon: Warehouse,
  },
  {
    title: "Garage Conversions",
    desc: "Transform garages into livable rooms",
    icon: Car,
  },
  {
    title: "Doors",
    desc: "Internal and external door fitting",
    icon: DoorClosed,
  },
  {
    title: "Skirting",
    desc: "Precision skirting installation",
    icon: Ruler,
  },
  {
    title: "Fitted Furniture",
    desc: "Wardrobes, shelves, storage units",
    icon: LayoutGrid,
  },
];

const outdoorExterior = [
  {
    title: "Patios & Decking",
    desc: "Expert installation of patios and decking",
    icon: Hammer,
  },
  {
    title: "Fencing",
    desc: "Attractive, secure fencing solutions",
    icon: Shield,
  },
  {
    title: "Turfing & Lawns",
    desc: "Lush lawns laid and maintained",
    icon: Leaf,
  },
  {
    title: "Fascia & Soffits",
    desc: "Roofline carpentry and replacement",
    icon: Layers,
  },
  {
    title: "General Repairs",
    desc: "All types of woodwork fixes and projects",
    icon: Wrench,
  },
];

const services = [
  // Indoor
  ...carpentryIndoor.map((s) => ({ ...s, category: "indoor" })),
  // Outdoor
  ...outdoorExterior.map((s) => ({ ...s, category: "outdoor" })),
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = [
    { label: "All Services", value: "all" },
    { label: "Indoor", value: "indoor" },
    { label: "Outdoor", value: "outdoor" },
  ];
  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((s) => s.category === selectedCategory);
  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-12 px-4 bg-brand-cream">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-green mb-4">JT Builds & Landscaping</h1>
        <p className="text-lg md:text-xl text-brand-green/90 max-w-xl mb-6">
          Crafting beautiful, lasting outdoor spaces across Surrey & Hampshire. Trusted, experienced, and dedicated to quality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-brand-green text-brand-cream px-6 py-3 rounded-full font-semibold shadow hover:bg-brand-green/90 transition">Get a Quote</Link>
          <Link href="/gallery" className="bg-brand-neutral text-brand-green px-6 py-3 rounded-full font-semibold shadow hover:bg-brand-gray/40 transition">View Gallery</Link>
        </div>
      </section>

      {/* Services Section with Filter */}
      <section className="w-full bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-brand-green">Our Services</h2>
          <div className="flex gap-2 mb-8 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium border border-gray-300 hover:bg-gray-100 transition
                  ${selectedCategory === cat.value ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-800"}
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map(({ title, desc, icon: Icon, category }) => (
              <div
                key={title}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md transition flex flex-col items-center text-center opacity-100 scale-100 transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-lg mb-1 text-brand-green">{title}</h3>
                <p className="text-sm text-brand-green/80">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust/Testimonial Section */}
      <section className="bg-brand-neutral py-10 px-4 flex flex-col items-center">
        <div className="max-w-xl text-center">
          <FaQuoteLeft className="text-brand-green mx-auto mb-2" size={32} />
          <blockquote className="text-lg italic text-brand-green mb-4">
            &ldquo;JT Builds transformed our garden beyond our expectations. Professional, friendly, and the quality is outstanding!&rdquo;
          </blockquote>
          <div className="text-brand-green font-semibold">— Sarah T., Farnham</div>
        </div>
        <div className="flex gap-4 mt-6 flex-wrap justify-center">
          <span className="bg-white border border-brand-gray rounded-full px-4 py-2 text-sm text-brand-green font-medium shadow">Fully Insured</span>
          <span className="bg-white border border-brand-gray rounded-full px-4 py-2 text-sm text-brand-green font-medium shadow">10+ Years Experience</span>
          <span className="bg-white border border-brand-gray rounded-full px-4 py-2 text-sm text-brand-green font-medium shadow">Checkatrade Member</span>
        </div>
      </section>
    </div>
  );
}
