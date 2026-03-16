// // import React from 'react';
// // import { useParams, Link } from 'react-router';
// // import { useSelector } from 'react-redux';
// // import { selectProductById } from '../store/productSlice';

// // export default function ProductDetails() {
// //   const { id } = useParams();
// //   const product = useSelector((state) => selectProductById(state, id));

// //   if (!product) {
// //     return (
// //       <div className="h-screen flex items-center justify-center bg-cream dark:bg-[#050505]">
// //         <p className="text-[10px] uppercase tracking-[0.5em] text-dustyRose animate-pulse">
// //           Loading Beauty...
// //         </p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-cream dark:bg-[#050505] transition-colors duration-500 pt-32 pb-20">
// //       <div className="max-w-[1440px] mx-auto px-8">
        
// //         {/* Back Button */}
// //         <nav className="mb-12">
// //           <Link to="/products" className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/40 dark:text-white/40 hover:text-dustyRose transition-colors">
// //             ← Back to Collections
// //           </Link>
// //         </nav>

// //         <div className="flex flex-col lg:flex-row gap-20">
          
// //           {/* Left: Image */}
// //           <div className="w-full lg:w-1/2">
// //             <div className="aspect-[4/5] bg-white dark:bg-[#111] overflow-hidden rounded-2xl">
// //               <img 
// //                 src={product.thumbnail} 
// //                 alt={product.title} 
// //                 className="w-full h-full object-cover"
// //               />
// //             </div>
// //           </div>

// //           {/* Right: Info */}
// //           <div className="w-full lg:w-1/2 flex flex-col justify-center">
// //             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-dustyRose mb-4 block">
// //               {product.category}
// //             </span>
// //             <h1 className="text-5xl font-heading text-charcoal dark:text-white uppercase tracking-widest leading-tight mb-6">
// //               {product.title}
// //             </h1>
// //             <p className="text-2xl text-charcoal/60 dark:text-white/60 mb-10">
// //               ${product.price}.00
// //             </p>

// //             <div className="h-[1px] w-full bg-charcoal/10 dark:bg-white/10 mb-10" />

// //             <button className="w-full py-6 bg-charcoal dark:bg-white text-white dark:text-black text-xs font-bold uppercase tracking-[0.3em] hover:bg-dustyRose transition-all duration-500">
// //               Add to Shopping Bag
// //             </button>
            
// //             <p className="mt-8 text-xs leading-relaxed text-charcoal/60 dark:text-gray-400 tracking-wide">
// //               A premium selection from our {product.category} collection. Designed for luxury and effectiveness.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useEffect } from 'react'; // Added useEffect
// import { useParams, Link } from 'react-router';
// import { useSelector, useDispatch } from 'react-redux'; // Added useDispatch
// import { selectProductById, fetchProducts, selectProductStatus } from '../store/productSlice';
// import Product from './../components/products/ProductCard';

// export default function ProductDetails() {
//   const { id } = useParams();
//   const dispatch = useDispatch();
  
//   // Get the product and the current loading status
//   const product = useSelector((state) => selectProductById(state, id));
//   const status = useSelector(selectProductStatus);

//   // --- ADD THIS EFFECT ---
//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchProducts());
//     }
//   }, [status, dispatch]);

//   // Handle the loading state while fetching
//   if (status === 'loading' || !product) {
//     return (
//       <div className="h-screen flex items-center justify-center bg-cream dark:bg-[#050505]">
//         <p className="text-[10px] uppercase tracking-[0.5em] text-dustyRose animate-pulse">
//           Loading Beauty...
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-cream dark:bg-[#050505] transition-colors duration-500 pt-32 pb-20">
//       <div className="max-w-[1440px] mx-auto px-8">
        
//         {/* Back Button */}
//         <nav className="mb-12">
//           <Link to="/products" className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/40 dark:text-white/40 hover:text-dustyRose transition-colors">
//             ← Back to Collections
//           </Link>
//         </nav>

//         <div className="flex flex-col lg:flex-row gap-20">
          
//           {/* Left: Image */}
//           <div className="w-full lg:w-1/2">
//             <div className="aspect-[4/5] bg-white dark:bg-[#111] overflow-hidden rounded-2xl">
//               <img 
//                 src={product.thumbnail} 
//                 alt={product.title} 
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>

//           {/* Right: Info */}
//           <div className="w-full lg:w-1/2 flex flex-col justify-center">
//             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-dustyRose mb-4 block">
//               {product.category}
//             </span>
//             <h1 className="text-5xl font-heading text-charcoal dark:text-white uppercase tracking-widest leading-tight mb-6">
//               {product.title}
//             </h1>
//             <p>{product.description}</p>
//             <p className="text-2xl text-charcoal/60 dark:text-white/60 mb-10">
//               ${product.price}.00
//             </p>

//             <div className="h-[1px] w-full bg-charcoal/10 dark:bg-white/10 mb-10" />

//             <button className="w-full py-6 bg-charcoal dark:bg-white text-white dark:text-black text-xs font-bold uppercase tracking-[0.3em] hover:bg-dustyRose transition-all duration-500">
//               Add to Shopping Bag
//             </button>
            
//             <p className="mt-8 text-xs leading-relaxed text-charcoal/60 dark:text-gray-400 tracking-wide">
//               A premium selection from our {product.category} collection. Designed for luxury and effectiveness.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { 
  selectProductById, 
  fetchProducts, 
  selectProductStatus 
} from '../store/productSlice';

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  // Selectors
  const product = useSelector((state) => selectProductById(state, id));
  const status = useSelector(selectProductStatus);

  // Re-fetch if user refreshes the page or links directly
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  // Loading State
  if (status === 'loading' || !product) {
    return (
      <div className="h-screen flex items-center justify-center bg-cream dark:bg-[#050505]">
        <p className="text-[10px] uppercase tracking-[0.5em] text-dustyRose animate-pulse">
          Loading Beauty...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream dark:bg-[#050505] transition-colors duration-500 pt-32 pb-20">
      <div className="max-w-[1440px] mx-auto px-8">
        
        {/* Navigation Breadcrumb */}
        <nav className="mb-12">
          <Link 
            to="/products" 
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/40 dark:text-white/40 hover:text-dustyRose transition-colors"
          >
            ← Back to Collections
          </Link>
        </nav>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Shorter Landscape Image */}
          <div className="w-full lg:w-3/5">
            <div className="aspect-[3/2] bg-white dark:bg-[#111] overflow-hidden rounded-2xl shadow-sm">
              <img 
                src={product.thumbnail} 
                alt={product.title} 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
          </div>

          {/* Right: Product Content */}
          <div className="w-full lg:w-2/5 flex flex-col pt-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-dustyRose mb-3 block">
              {product.category}
            </span>
            
            <h1 className="text-4xl lg:text-5xl font-heading text-charcoal dark:text-white uppercase tracking-wider leading-tight mb-4">
              {product.title}
            </h1>
            
            <p className="text-xl font-light text-charcoal/60 dark:text-white/60 mb-8">
              ${product.price}.00
            </p>

            <div className="h-[1px] w-full bg-charcoal/10 dark:bg-white/10 mb-8" />

            {/* Description from JSON */}
            <p className="text-sm leading-relaxed text-charcoal/70 dark:text-gray-400 tracking-wide mb-10">
              {product.description}
            </p>

            {/* Action Button */}
            <div className="space-y-4">
              <button className="w-full py-5 bg-charcoal dark:bg-dustyRose text-white  text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-dustyRose dark:hover:bg-softGold transition-all duration-500 shadow-lg">
                Add to Shopping Bag
              </button>
              <p className="text-[9px] text-center text-charcoal/30 dark:text-white/20 uppercase tracking-[0.2em]">
                Secure Checkout & Express Delivery
              </p>
            </div>

            {/* Product Details Accordion Section */}
            <div className="mt-12 border-t border-charcoal/5 dark:border-white/5">
              {['Details', 'Ingredients', 'Shipping'].map((item) => (
                <div 
                  key={item} 
                  className="flex justify-between items-center py-5 border-b border-charcoal/5 dark:border-white/5 cursor-pointer group"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-charcoal/50 dark:text-gray-500 group-hover:text-charcoal dark:group-hover:text-white transition-colors">
                    {item}
                  </span>
                  <span className="text-charcoal/20 dark:text-white/10 text-lg group-hover:text-dustyRose">+</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}