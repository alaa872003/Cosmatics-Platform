import { Link, NavLink } from "react-router";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[90vh] w-full px-6 overflow-hidden bg-cream dark:bg-[#050505] dark:bg-[#050505] transition-colors duration-500">
      
      {/* Harmonic Glowing Orbs */}
      {/* Light Mode: Soft Pinks | Dark Mode: Deep Purple/Rose hints to match your screenshot */}
      <div className="absolute top-[-10%] right-[-5%] w-150 h-150 bg-[#fce4e4] dark:bg-purple-900/10 rounded-full blur-[130px] pointer-events-none transition-colors duration-500"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-125 h-125 bg-[#fdf2f2] dark:bg-rose-900/10 rounded-full blur-[130px] pointer-events-none transition-colors duration-500"></div>

      <div className="relative z-10 max-w-4xl">
        <h1 className="text-5xl md:text-8xl font-heading font-semibold text-charcoal dark:text-white leading-[1.1] mb-6">
          Glow Naturally. <br /> 
          <span className="italic font-light opacity-90">Feel Beautiful</span>
        </h1>

        <p className="mt-4 text-charcoal/70 dark:text-gray-400 max-w-xl mx-auto text-lg md:text-xl font-body tracking-wide">
          Discover clean beauty products crafted with love and inspired by nature.
        </p>

                <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <NavLink to="/products" className="px-12 py-5 bg-dustyRose hover:bg-charcoal dark:hover:bg-softGold text-white rounded-full transition-all duration-300 shadow-xl shadow-dustyRose/20 hover:scale-105 active:scale-95 text-lg font-medium tracking-wide">
            Shop Now
          </NavLink>
        </div>
      </div>

      {/* Harmonic Bottom Transition */}
      {/* We use #0a0a0a in dark mode to blend into the Categories section smoothly */}
      <div className="absolute bottom-0 w-full h-32 bg-linear-to-t from-white dark:from-[#0a0a0a] to-transparent"></div>
    </section>
  );
}