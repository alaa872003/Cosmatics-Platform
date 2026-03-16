// // import { useEffect, useState } from "react";

// // export default function Categories() {
// //   const [categories, setCategories] = useState([]);

// //   useEffect(() => {
// //     fetch('https://dummyjson.com/products/categories')
// //       .then(res => res.json())
// //       .then(data => {
// //         // Filter for categories relevant to a beauty/cosmetics store
// //         const beautyCats = data.filter(cat => 
// //           ['beauty', 'fragrances', 'skin-care'].includes(cat.slug)
// //         );
// //         // If the API changes or those aren't found, just take the first 4
// //         setCategories(beautyCats.length > 0 ? beautyCats : data.slice(0, 4));
// //       });
// //   }, []);

// //   return (
// //     <section className="py-20 px-6 bg-white dark:bg-gray-800 transition-colors">
// //       <div className="max-w-7xl mx-auto">
// //         <h2 className="text-center text-3xl font-heading text-charcoal dark:text-white mb-12 tracking-[0.2em] uppercase">
// //           The Collections
// //         </h2>
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //           {categories.map((cat) => (
// //             <div key={cat.slug} className="group cursor-pointer">
// //               <div className="relative h-96 bg-cream dark:bg-gray-700 rounded-3xl overflow-hidden mb-4 border border-charcoal/5">
// //                 {/* Visual placeholder since API categories don't have images */}
// //                 <div className="absolute inset-0 bg-gradient-to-tr from-dustyRose/20 to-transparent group-hover:scale-110 transition-transform duration-700" />
// //                 <div className="absolute inset-0 flex items-center justify-center">
// //                    <span className="text-softGold text-6xl opacity-10 font-heading">0{categories.indexOf(cat) + 1}</span>
// //                 </div>
// //               </div>
// //               <h3 className="text-xl font-heading text-charcoal dark:text-white uppercase tracking-widest group-hover:text-dustyRose transition-colors">
// //                 {cat.name}
// //               </h3>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


import { useEffect, useState } from "react";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  // Map slugs to professional beauty images
  const categoryImages = {
    "beauty": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600",
    "fragrances": "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=600",
    "skin-care": "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=600",
    "tops": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600" // Fallback if others aren't returned
  };

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => {
        // Filter for beauty-related categories
        const filtered = data.filter(cat => 
          ['beauty', 'fragrances', 'skin-care'].includes(cat.slug)
        ).slice(0, 3);
        setCategories(filtered);
      });
  }, []);

  return (
    // <section className="py-24 px-6 bg-white dark:bg-gray-800 transition-colors">
    //   <div className="max-w-7xl mx-auto">
    //     <h2 className="text-center text-3xl md:text-4xl font-heading text-charcoal dark:text-white mb-16 tracking-[0.2em] uppercase">
    //       Shop by Collection
    //     </h2>
        
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    //       {categories.map((cat) => (
    //         <div key={cat.slug} className="group cursor-pointer">
    //           <div className="relative h-[450px] rounded-2xl overflow-hidden mb-6">
    //             <img 
    //               src={categoryImages[cat.slug] || "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600"} 
    //               alt={cat.name} 
    //               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
    //             />
    //             <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
                
    //             {/* Overlay Text */}
    //             <div className="absolute bottom-8 left-8">
    //               <h3 className="text-2xl font-heading text-white uppercase tracking-widest">
    //                 {cat.name}
    //               </h3>
    //               <div className="w-0 group-hover:w-full h-0.5 bg-softGold transition-all duration-500 mt-2"></div>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    // inside return...
<section className="py-24 px-6 bg-white dark:bg-[#0a0a0a] transition-colors">
  <div className="max-w-7xl mx-auto">
    {/* <h2 className="text-center text-3xl md:text-4xl font-heading text-charcoal dark:text-cream mb-16 tracking-[0.2em] uppercase">
      Shop by Collection
    </h2> */}
     <h2 className="text-center text-3xl md:text-4xl font-heading text-charcoal dark:text-white mb-16 tracking-[0.2em] uppercase">
        Shop by Collection
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {categories.map((cat) => (
        <div key={cat.slug} className="group cursor-pointer">
          <div className="relative h-[450px] rounded-2xl overflow-hidden mb-6 border border-transparent dark:border-white/10">
            {/* ... img logic ... */}
             <img 
                  src={categoryImages[cat.slug] || "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600"} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-heading text-white uppercase tracking-widest">
                {cat.name}
              </h3>
              <div className="w-0 group-hover:w-full h-0.5 bg-softGold transition-all duration-500 mt-2"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}

