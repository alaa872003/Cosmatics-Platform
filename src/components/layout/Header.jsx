import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/themeSlice";
import { Link } from "react-router";
import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight, CiUser } from "react-icons/ci";


export default function Header() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const mode = useSelector((state) => state.theme.mode);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-5 bg-cream/60 backdrop-blur-lg text-charcoal transition-colors duration-300  dark:text-white">
      {/* Brand Logo */}
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-heading font-bold tracking-widest uppercase">GLOW.</h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 items-center font-body text-sm uppercase tracking-widest">
        <Link to="/" className="hover:text-dustyRose transition-colors">Home</Link>
        <Link to="/products" className="hover:text-dustyRose transition-colors">Products</Link>
        <Link to="/cart" className="hover:text-dustyRose transition-colors">Cart</Link>
        <Link to="/blogs" className="hover:text-dustyRose transition-colors">Blogs</Link>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-6">
        <Link to="/signup" className="hover:scale-110 transition-transform">
          <CiUser size={24} className="text-softGold" />
        </Link>
        
        <button 
          onClick={() => dispatch(toggleTheme())}
          className="hover:rotate-12 transition-transform"
        >
          {mode === "light" ? (
            <MdDarkMode size={22} className="text-softGold" />
          ) : (
            <CiLight size={24} className="text-softGold" />
          )}
        </button>

        {/* Mobile Toggle */}
        <button className="md:hidden flex flex-col gap-1.5" onClick={() => setIsOpen(!isOpen)}>
          <span className={`block w-6 h-0.5 bg-charcoal dark:bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-charcoal dark:bg-white ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-charcoal dark:bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-cream flex flex-col gap-6 p-8 md:hidden shadow-2xl border-t border-charcoal/5 animate-fade-in">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-medium">Home</Link>
          <Link to="/products" onClick={() => setIsOpen(false)} className="text-lg font-medium">Products</Link>
          <Link to="/cart" onClick={() => setIsOpen(false)} className="text-lg font-medium">Cart</Link>
          <Link to="/blogs" onClick={() => setIsOpen(false)} className="text-lg font-medium">Blogs</Link>
        </nav>
      )}
    </header>
  );
}