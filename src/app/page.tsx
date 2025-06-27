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
      <section className="w-full bg-brand-cream py-16 px-4 flex flex-col items-center md:items-start justify-center text-center md:text-left">
        <div className="max-w-3xl w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-green mb-4">
            Quality Carpentry & Landscaping — Built to Last
          </h1>
          <p className="text-lg md:text-xl text-brand-green/90 mb-8">
            From patios to decking — local specialists in pulborough.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto justify-center md:justify-start">
            <Link href="/contact" className="bg-brand-green text-brand-cream px-8 py-3 rounded-full font-semibold shadow hover:bg-brand-green/90 transition text-base">
              Get a Free Quote
            </Link>
            <Link href="/gallery" className="bg-brand-neutral text-brand-green px-8 py-3 rounded-full font-semibold shadow hover:bg-brand-gray/40 transition text-base">
              View Our Work
            </Link>
          </div>
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
