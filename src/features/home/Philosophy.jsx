export default function Philosophy() {
  return (
    <section className="py-24 px-6 bg-charcoal text-cream dark:bg-black transition-colors border-b border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="flex-1 space-y-8 text-center md:text-left">
          <div className="space-y-2">
            <span className="text-softGold uppercase tracking-[0.4em] text-xs font-bold">Our Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-heading leading-tight text-white">
              Beauty rooted in <br /> 
              <span className="italic font-light text-dustyRose">Earth’s Wisdom.</span>
            </h2>
          </div>
          
          <p className="text-cream/70 dark:text-stone-400 leading-relaxed text-lg max-w-md mx-auto md:mx-0">
            We believe that skincare should be as kind to the planet as it is to your skin. 
            Every formula is vegan, cruelty-free, and ethically sourced.
          </p>
          
          <button className="px-8 py-3 border border-softGold text-softGold hover:bg-softGold hover:text-charcoal transition-all uppercase tracking-[0.2em] text-xs font-bold rounded-sm">
            Discover Our Story
          </button>
        </div>

        {/* Decorative Element */}
        <div className="flex-1 relative w-full flex items-center justify-center">
           <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border border-softGold/30 flex items-center justify-center p-8 relative">
              <div className="absolute inset-0 bg-softGold/5 rounded-full animate-pulse"></div>
              <p className="relative z-10 font-heading text-2xl md:text-3xl text-softGold text-center italic leading-relaxed">
                "Real beauty is the glow from a healthy soul."
              </p>
           </div>
        </div>
      </div>
    </section>
  );
}