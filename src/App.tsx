import { useState } from 'react';
import {
  Phone, Menu, X, ChevronDown, ChevronUp, CheckCircle,
  Shield, Home, Wrench, Sun, Droplets, Grid, Star, MapPin
} from 'lucide-react';

const FORMSPREE_ENDPOINT = "https://formspree.io/f/placeholder_id";
const PHONE_NUMBER = "(513) 377-8475";
const PHONE_LINK = "tel:5133778475";

const services = [
  { icon: Home, title: "Asphalt Shingles", desc: "Affordable and versatile, asphalt shingles are a popular choice for homes. They’re easy to install, come in many styles, and provide dependable protection." },
  { icon: Shield, title: "EPDM Rubber", desc: "A durable rubber membrane used on flat roofs, EPDM is weather-resistant, low maintenance, and built to last." },
  { icon: Sun, title: "TPO", desc: "TPO is an energy-efficient roofing membrane for flat roofs. It reflects heat, helping reduce cooling costs while offering strong durability." },
  { icon: Droplets, title: "Silicone Roof Coating", desc: "A liquid-applied coating that seals and protects existing roofs. It’s great for stopping leaks and extending roof life without full replacement." },
  { icon: Wrench, title: "Metal Roof", desc: "Metal roofing is long-lasting, low maintenance, and highly durable. It stands up to harsh weather and helps improve energy efficiency." },
  { icon: Grid, title: "Seamless Gutters", desc: "Seamless gutters are custom-fit to your home for a clean look and better performance. With fewer joints, they reduce leaks and help protect your home from water damage." },
  { icon: Home, title: "Siding", desc: "We install and repair all types of siding to improve your home’s appearance and durability. Quality siding adds curb appeal while protecting against weather and increasing energy efficiency." },
  { icon: Sun, title: "Windows", desc: "Vinyl and designer windows enhance both the look and efficiency of your home. They provide better insulation, reduce energy costs, and come in a variety of styles to match your home’s design." }
];

const faqs = [
  {
    q: "How long does a roof last?",
    a: "Most roofs last around 25–30 years. Factors like weather, maintenance, and seasonal changes can impact this lifespan."
  },
  {
    q: "Do you help with insurance claims?",
    a: "Yes! We handle the process from beginning to end—from the initial inspection to meeting with adjusters and documenting damage."
  },
  {
    q: "How do I know if I need a repair or a full replacement?",
    a: "Look for leaks, granule loss, cracked shingles, or lifting. The best way to know is a professional inspection—call us for a free check-up."
  }
];

function FAQItem({ q, a }: { q: string, a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-heading font-semibold text-lg text-navy-blue">{q}</span>
        {isOpen ? <ChevronUp className="text-electric-blue" /> : <ChevronDown className="text-electric-blue" />}
      </button>
      {isOpen && <div className="mt-4 text-slate-600 leading-relaxed">{a}</div>}
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans text-slate-800 selection:bg-electric-blue selection:text-white">

      {/* Top Bar - Phone #1 */}
      {/* <div className="bg-navy-blue text-white py-2 px-4 text-sm flex justify-center md:justify-end items-center gap-2">
        <MapPin size={16} className="text-electric-blue" /> Serving the local community
        <span className="hidden md:inline mx-2">|</span>
        <a href={PHONE_LINK} className="font-bold flex items-center gap-2 hover:text-electric-blue transition-colors">
          <Phone size={14} /> Call us today: {PHONE_NUMBER}
        </a>
      </div> */}

      {/* Sticky Nav */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <img src={`${import.meta.env.BASE_URL}assets/logo/Logo - Long - Color.svg`} alt="LB Roofing Logo" className="h-10 sm:h-12 w-auto" />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              <a href="#services" className="font-semibold text-slate-600 hover:text-electric-blue transition-colors">Services</a>
              <a href="#gallery" className="font-semibold text-slate-600 hover:text-electric-blue transition-colors">Gallery</a>
              <a href="#about" className="font-semibold text-slate-600 hover:text-electric-blue transition-colors">About</a>
              <a href="#faq" className="font-semibold text-slate-600 hover:text-electric-blue transition-colors">FAQ</a>
              {/* Phone #2 */}
              <a href={PHONE_LINK} className="flex items-center gap-2 bg-construction-red hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-bold transition-transform hover:scale-105 shadow-lg">
                <Phone size={18} /> {PHONE_NUMBER}
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-navy-blue focus:outline-none p-2">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 font-semibold text-slate-600 hover:bg-gray-50 hover:text-electric-blue rounded-md">Services</a>
              <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 font-semibold text-slate-600 hover:bg-gray-50 hover:text-electric-blue rounded-md">Gallery</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 font-semibold text-slate-600 hover:bg-gray-50 hover:text-electric-blue rounded-md">About</a>
              <a href="#faq" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 font-semibold text-slate-600 hover:bg-gray-50 hover:text-electric-blue rounded-md">FAQ</a>
              <a href={PHONE_LINK} className="mt-4 flex items-center justify-center gap-2 bg-construction-red text-white px-4 py-3 rounded-md font-bold text-lg">
                <Phone size={20} /> Call Now
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-navy-blue text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80"
            alt="Beautiful home exterior"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-blue via-navy-blue/80 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-3/5 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight text-white">
              Your Home Deserves the <span className="text-white">Care We Give Our Own.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl font-light">
              Local, family-owned roofing and exteriors serving our community with honesty and quality craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <a href="#contact-form" className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-full text-white bg-electric-blue hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                Get a Free Roof Inspection
              </a> */}
              {/* Phone #3 */}
              <a href={PHONE_LINK} className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-full text-navy-blue bg-white hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all gap-2">
                <Phone size={20} /> Call now: {PHONE_NUMBER}
              </a>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 pt-6">
              <div className="flex items-center gap-2">
                <Shield className="text-yellow-400" size={24} />
                <span className="font-semibold text-lg text-white">Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="text-yellow-400" size={24} />
                <span className="font-semibold text-lg text-white">10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-yellow-400" size={24} />
                <span className="font-semibold text-lg text-white">Expert Claims Assistance</span>
              </div>
            </div>
          </div>

          {/* Lead Gen Form */}
          <div className="lg:w-2/5 w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 text-slate-800" id="contact-form">
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-heading font-bold text-navy-blue">Request Free Inspection</h3>
              <p className="text-sm text-slate-500 mt-2">No obligation, 100% free estimate.</p>
            </div>
            <form action={FORMSPREE_ENDPOINT} method="POST" className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1 text-slate-700">Full Name</label>
                <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-electric-blue focus:border-electric-blue outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-slate-700">Phone Number</label>
                <input type="tel" name="phone" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-electric-blue focus:border-electric-blue outline-none transition-colors" placeholder="(555) 000-0000" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-slate-700">Email Address</label>
                <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-electric-blue focus:border-electric-blue outline-none transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-slate-700">How can we help?</label>
                <select name="service" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-electric-blue focus:border-electric-blue outline-none transition-colors bg-white">
                  <option value="roof-inspection">Free Roof Inspection</option>
                  <option value="roof-repair">Roof Repair</option>
                  <option value="roof-replacement">Roof Replacement</option>
                  <option value="gutters">Gutters</option>
                  <option value="siding">Siding</option>
                  <option value="windows">Windows</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-construction-red hover:bg-red-700 text-white font-bold text-lg py-4 rounded-lg shadow-md transition-all hover:shadow-lg transform hover:-translate-y-0.5 mt-2">
                Get My Free Estimate
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-construction-red uppercase tracking-wider">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-navy-blue mt-2 mb-4">Residential & Commercial Solutions</h3>
            <p className="text-lg text-slate-600">
              From minor repairs to full replacements, our expert team delivers top-tier materials and exceptional craftsmanship to protect your most valuable asset.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow border border-gray-100 group">
                  <div className="w-14 h-14 bg-gray-50 rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="text-electric-blue" size={28} />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-navy-blue mb-3">{service.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trust / CTA Banner */}
      <section className="bg-electric-blue py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Need a Roof Inspection? We're Here to Help.</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Don't wait until a small leak becomes a major problem. Schedule your free, no-obligation inspection today and get peace of mind.
          </p>
          {/* Phone #4 */}
          <a href={PHONE_LINK} className="inline-flex justify-center items-center px-10 py-5 text-xl font-bold rounded-full text-electric-blue bg-white hover:bg-gray-100 shadow-xl transition-transform hover:scale-105 gap-3">
            <Phone size={24} /> {PHONE_NUMBER}
          </a>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-construction-red uppercase tracking-wider">Our Work</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-navy-blue mt-2">Recent Projects</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img src="https://images.unsplash.com/photo-1632154939021-d13d2a71fec3?auto=format&fit=crop&q=80" alt="Roofing project 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80" alt="Roofing project 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <img src="https://images.unsplash.com/photo-1605810731383-e18e00185973?auto=format&fit=crop&q=80" alt="Roofing project 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&q=80"
                  alt="Happy family - placeholder"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-blue/90 p-6">
                  <p className="text-white font-heading font-semibold text-xl">Tyler, Heather, Lincoln & Beau</p>
                  <p className="text-electric-blue font-semibold">The LB Family</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-6 text-lg text-slate-600 leading-relaxed">
              <h2 className="text-sm font-bold text-construction-red uppercase tracking-wider">About Us</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-navy-blue leading-tight">A Local Family Foundation</h3>

              <p>
                At <strong>LB Roofing and Exteriors</strong>, we believe your home deserves the same care and attention we give our own. As a local, family-owned and operated roofing company, we take pride in serving our community with honesty, quality craftsmanship, and a personal touch you won't find just anywhere.
              </p>

              <h4 className="text-2xl font-heading font-semibold text-navy-blue pt-4">Our Story</h4>
              <p>
                Our owner, <strong>Tyler</strong>, has been part of the roofing and insurance industry since 2016. He began his career on the insurance side, gaining valuable insight into the claims process and what homeowners truly need when facing roof damage. In 2022, he joined a local roofing company, where he expanded his hands-on experience and deepened his commitment to delivering dependable, high-quality work. That journey ultimately led to the creation of LB Roofing and Exteriors.
              </p>

              <h4 className="text-2xl font-heading font-semibold text-navy-blue pt-4">Why "LB"?</h4>
              <p>
                The name LB Roofing and Exteriors is especially meaningful to us—it comes from two very important members of our family: <strong>Lincoln and Beau</strong>.
              </p>
              <ul className="space-y-3 pt-2">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-electric-blue flex-shrink-0 mt-1" size={20} />
                  <span><strong>Lincoln</strong>, our mini Goldendoodle, is full of personality and usually found chasing his favorite yellow ball.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-electric-blue flex-shrink-0 mt-1" size={20} />
                  <span><strong>Beau</strong>, our baby boy, keeps us smiling with his joyful spirit and love for games like peek-a-boo.</span>
                </li>
              </ul>

              <p className="pt-2">
                Tyler's wife, <strong>Heather</strong>, is an elementary school principal who shares his dedication to helping others and strengthening the community.
              </p>
              <p className="pt-2">
                When they’re not working, they enjoy spending time together as a family and exploring new coffee shops around town.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-construction-red uppercase tracking-wider">Got Questions?</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-navy-blue mt-2">Frequently Asked Questions</h3>
          </div>

          <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-6 md:p-8">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-blue text-white py-16 border-t-[8px] border-electric-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">

          <div className="space-y-6">
            <div>
              <img src={`${import.meta.env.BASE_URL}assets/logo/Logo - Long - Dark Mode.svg`} alt="LB Roofing Logo" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your home deserves the care we give our own. Local, family-owned roofing and exteriors serving our community.
            </p>
          </div>

          {/* Values and Mission Footer Blurb */}
          {/* <div>
            <h4 className="font-heading font-bold text-lg mb-6">Mission & Core Values</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-electric-blue flex-shrink-0 mt-1" size={18} />
                <span><strong className="text-white">Integrity First:</strong> Insight from the insurance world means we do what's right for the homeowner, always.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-electric-blue flex-shrink-0 mt-1" size={18} />
                <span><strong className="text-white">Family Values:</strong> We treat every customer like a neighbor.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-electric-blue flex-shrink-0 mt-1" size={18} />
                <span><strong className="text-white">Quality Craftsmanship:</strong> Hands-on experience ensures the job is done right.</span>
              </li>
            </ul>
          </div> */}

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-electric-blue transition-colors">Our Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-electric-blue transition-colors">Project Gallery</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-electric-blue transition-colors">About Us</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-electric-blue transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="text-white" size={20} />
                <a href={PHONE_LINK} className="font-bold text-xl">{PHONE_NUMBER}</a>
              </li>
              {/* <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="text-electric-blue" size={20} />
                <span>Serving the local community</span>
              </li> */}
            </ul>
            <a href="#contact-form" className="mt-6 inline-block bg-construction-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-transform hover:scale-105 shadow-lg">
              Get a Free Quote
            </a>
          </div>

        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-700 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} LB Roofing & Exteriors. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
