import { FaQuoteLeft } from "react-icons/fa";
import Link from "next/link";
import {
  Leaf,
  Hammer,
  Fence,
  Waves,
  Home as HomeIcon,
  DoorOpen,
  Warehouse,
  Car,
  DoorClosed,
  Ruler,
  LayoutGrid,
  Layers,
  Wrench,
} from "lucide-react";

const allServices = [
  {
    title: "Garden Design",
    desc: "Bespoke garden layouts and planting schemes",
    icon: Leaf,
  },
  {
    title: "Patios & Decking",
    desc: "Expert installation of patios and decking",
    icon: Hammer,
  },
  {
    title: "Fencing",
    desc: "Attractive, secure fencing solutions",
    icon: Fence,
  },
  {
    title: "Turfing & Lawns",
    desc: "Lush lawns laid and maintained",
    icon: Waves,
  },
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
  {
    title: "Fascia & Soffits",
    desc: "Roofline carpentry and replacement",
    icon: Layers,
  },
  {
    title: "General Carpentry & Repairs",
    desc: "All types of woodwork fixes and projects",
    icon: Wrench,
  },
];

export default function Home() {
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

      {/* Our Services Section (Scrollable) */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-green mb-2 text-center md:text-left">Our Services</h2>
          <p className="text-brand-green/80 text-base md:text-lg mb-10 text-center md:text-left max-w-2xl mx-auto md:mx-0">
            From structural builds to finishing touches, we cover all aspects of carpentry, joinery, and landscaping.
          </p>
          <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible scrollbar-thin scrollbar-thumb-brand-neutral/40 scrollbar-track-transparent">
            {allServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="min-w-[260px] max-w-xs md:min-w-0 bg-brand-cream rounded-xl border border-brand-neutral p-6 flex flex-col items-center text-center transition hover:shadow-lg hover:scale-105 duration-200 cursor-pointer flex-shrink-0 md:items-start md:text-left"
                >
                  <div className="w-12 h-12 mb-4 flex items-center justify-center bg-brand-neutral rounded-full text-brand-green">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-green mb-1">{service.title}</h3>
                  <p className="text-sm text-brand-green/80">{service.desc}</p>
                </div>
              );
            })}
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
