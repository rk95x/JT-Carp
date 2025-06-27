import { FaLeaf, FaHammer, FaTree, FaWater, FaQuoteLeft } from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    icon: <FaLeaf size={32} className="text-brand-green" />,
    title: "Garden Design",
    desc: "Transform your outdoor space with bespoke garden layouts and planting schemes.",
  },
  {
    icon: <FaHammer size={32} className="text-brand-green" />,
    title: "Patios & Decking",
    desc: "Expert installation of patios, decking, and outdoor living areas.",
  },
  {
    icon: <FaTree size={32} className="text-brand-green" />,
    title: "Fencing",
    desc: "Durable, attractive fencing solutions for privacy and security.",
  },
  {
    icon: <FaWater size={32} className="text-brand-green" />,
    title: "Turfing & Lawns",
    desc: "Lush, healthy lawns laid and maintained for year-round beauty.",
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

      {/* Services Grid */}
      <section className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-brand-green mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center border border-brand-neutral">
              {service.icon}
              <h3 className="mt-4 text-lg font-semibold text-brand-green">{service.title}</h3>
              <p className="mt-2 text-sm text-brand-green/80">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust/Testimonial Section */}
      <section className="bg-brand-neutral py-10 px-4 flex flex-col items-center">
        <div className="max-w-xl text-center">
          <FaQuoteLeft className="text-brand-green mx-auto mb-2" size={32} />
          <blockquote className="text-lg italic text-brand-green mb-4">
            “JT Builds transformed our garden beyond our expectations. Professional, friendly, and the quality is outstanding!”
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
