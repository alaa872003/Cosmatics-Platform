// // import { useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { 
// //   fetchProducts, 
// //   selectAllProducts, 
// //   selectProductStatus, 
// //   selectProductError 
// // } from '../../store/productSlice';
// // import Product from './ProductCard';

// // export default function ProductGrid() {
// //   const dispatch = useDispatch();
// //   const products = useSelector(selectAllProducts);
// //   const status = useSelector(selectProductStatus);
// //   const error = useSelector(selectProductError);

// //   useEffect(() => {
// //     if (status === 'idle') {
// //       dispatch(fetchProducts());
// //     }
// //   }, [status, dispatch]);

// //   if (status === 'loading') {
// //     return (
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //         {[1, 2, 3, 4, 5, 6].map((n) => (
// //           <div key={n} className="h-96 bg-charcoal/5 dark:bg-white/5 animate-pulse rounded-xl" />
// //         ))}
// //       </div>
// //     );
// //   }

// //   if (status === 'failed') {
// //     return <div className="py-20 text-center text-red-400">Error: {error}</div>;
// //   }

// //   return (
// //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //       {products.map((product) => (
// //         <Product key={product.id} product={product} />
// //       ))}
// //     </div>
// //   );
// // }


// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { 
//   fetchProducts, 
//   selectAllProducts, 
//   selectProductStatus, 
//   selectFilters 
// } from '../../store/productSlice';
// import Product from './ProductCard';

// export default function ProductGrid() {
//   const dispatch = useDispatch();
  
//   // 1. Get Data and Filters from Redux
//   const allProducts = useSelector(selectAllProducts);
//   const status = useSelector(selectProductStatus);
//   const { category, sortBy } = useSelector(selectFilters) || { category: 'All', sortBy: 'newest' };

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchProducts());
//     }
//   }, [status, dispatch]);

//   // 2. Apply Filter and Sort Logic
//   const filteredAndSortedProducts = [...allProducts]
//     .filter((item) => {
//       if (category === 'All') return true;
//       // Normalizing strings (e.g., "Skin Care" vs "skin-care")
//       return item.category.toLowerCase().replace('-', ' ') === category.toLowerCase().replace('-', ' ');
//     })
//     .sort((a, b) => {
//       if (sortBy === 'low') return a.price - b.price;
//       if (sortBy === 'high') return b.price - a.price;
//       return b.id - a.id; // Default: Newest (assuming higher ID is newer)
//     });

//   // 3. Render States
//   if (status === 'loading') {
//     return (
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {[1, 2, 3, 4, 5, 6].map((n) => (
//           <div key={n} className="h-80 bg-charcoal/5 dark:bg-white/5 animate-pulse rounded-xl" />
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {filteredAndSortedProducts.map((item) => (
//         <Product key={item.id} product={item} />
//       ))}
      
//       {/* Empty State */}
//       {filteredAndSortedProducts.length === 0 && status === 'succeeded' && (
//         <div className="col-span-full py-20 text-center">
//           <p className="text-charcoal/40 dark:text-white/40 italic font-heading text-xl">
//             No products found in this collection.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

import { useSelector } from 'react-redux';
import { selectAllProducts, selectFilters, selectProductStatus } from '../../store/productSlice';
import Product from './ProductCard';

export default function ProductGrid() {
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectProductStatus);
  const { category, sortBy, maxPrice } = useSelector(selectFilters);

  // LOGIC CHAIN: Filter -> Price -> Sort
  const processedProducts = [...products]
    .filter((p) => {
      // 1. Category Filter
      const matchCategory = category === 'All' || p.category.toLowerCase() === category.toLowerCase();
      // 2. Price Filter
      const matchPrice = p.price <= maxPrice;
      
      return matchCategory && matchPrice;
    })
    .sort((a, b) => {
      // 3. Sort Logic
      if (sortBy === 'low') return a.price - b.price;
      if (sortBy === 'high') return b.price - a.price;
      if (sortBy === 'newest') {
            return new Date(b.createdAt) - new Date(a.createdAt);
          }
          return 0;    });

  if (status === 'loading') return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {processedProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}

      {processedProducts.length === 0 && (
        <div className="col-span-full py-20 text-center opacity-50 italic">
          No products match your current filters.
        </div>
      )}
    </div>
  );
}