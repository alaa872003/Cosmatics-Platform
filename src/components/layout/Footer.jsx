import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-cream dark:bg-[#0f1115] text-charcoal dark:text-gray-300 pt-20 pb-10 px-8 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <h2 className="text-2xl font-heading font-bold tracking-widest uppercase text-charcoal dark:text-white">Glow.</h2>
          <p className="text-charcoal/60 dark:text-gray-400 text-sm leading-relaxed">
            Premium cosmetics designed for the modern individual who values purity and elegance.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full border border-charcoal/10 dark:border-white/10 hover:text-dustyRose transition-colors">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="p-2 rounded-full border border-charcoal/10 dark:border-white/10 hover:text-dustyRose transition-colors">
              <FaInstagram size={14} />
            </a>
            <a href="#" className="p-2 rounded-full border border-charcoal/10 dark:border-white/10 hover:text-dustyRose transition-colors">
              <FaTwitter size={14} />
            </a>
          </div>
        </div>

        {/* Navigation Columns */}
        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-widest mb-6 text-charcoal dark:text-white">Collections</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/products" className="hover:text-dustyRose">Skincare</Link></li>
            <li><Link to="/products" className="hover:text-dustyRose">Fragrances</Link></li>
            <li><Link to="/products" className="hover:text-dustyRose">New Arrivals</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-widest mb-6 text-charcoal dark:text-white">Customer Care</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/shipping" className="hover:text-dustyRose">Shipping</Link></li>
            <li><Link to="/returns" className="hover:text-dustyRose">Returns</Link></li>
            <li><Link to="/faq" className="hover:text-dustyRose">FAQs</Link></li>
          </ul>
        </div>

        {/* Newsletter Column - Styled as a unique box*/}
        <div className="space-y-6">
          <h4 className="font-heading text-lg ">Join the Glow</h4>
          <p className="text-sm text-charcoal">Subscribe for beauty tips and exclusive offers.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full bg-transparent border-b border-cream/20 py-2 outline-none focus:border-softGold transition-colors text-sm"
            />
            <button className="absolute right-0 bottom-2 text-softGold uppercase text-xs font-bold tracking-widest hover:text-dustyRose">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-charcoal/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] opacity-40">
        <p>© 2026 Cosmetics Brand. Built for beauty.</p>
        <div className="flex gap-6">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}