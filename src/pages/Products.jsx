import { useEffect } from 'react'; // Added useEffect
import { useDispatch, useSelector } from "react-redux";
import ProductFilter from "../components/products/ProductFilter";
import ProductGrid from "../components/products/ProductGrid";
import { 
  selectFilters, 
  updateFilters, 
  fetchProducts,       // Added import
  selectProductStatus,  // Added import
} from './../store/productSlice';

export default function Products() {
  const dispatch = useDispatch();
  const { sortBy } = useSelector(selectFilters);
  
  // --- NEW PARTS ---
  const status = useSelector(selectProductStatus);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);
  // -----------------

  return (
    <div className="bg-cream dark:bg-[#050505] min-h-screen transition-colors duration-500">
      <div className="max-w-[1440px] mx-auto px-8 py-16">
        
        {/* Header Section */}
        <header className="mb-16 border-b border-charcoal/5 dark:border-white/5 pb-8">
          <h1 className="text-4xl md:text-6xl font-heading text-charcoal dark:text-white uppercase tracking-widest mb-4">
            Curated <span className="italic font-light text-dustyRose">Essentials</span>
          </h1>
          <p className="text-charcoal/60 dark:text-gray-400 max-w-lg">
            High-performance skincare and beauty products designed to enhance your natural radiance.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar */}
          <aside className="w-full lg:w-64">
            <ProductFilter />
          </aside>

          {/* Grid Area */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-12 border-b border-charcoal/5 dark:border-white/5 pb-6">
              {/* Added product length display to "Shop All" */}
              <h1 className="text-xs font-bold uppercase tracking-[0.3em] text-charcoal dark:text-white">
                Shop All 
              </h1>
              <select 
                value={sortBy}
                onChange={(e) => dispatch(updateFilters({ sortBy: e.target.value }))}
                className="bg-transparent text-[10px] font-bold uppercase tracking-widest outline-none cursor-pointer dark:text-gray-400 hover:text-dustyRose transition-colors"
              >
                <option value="newest" className="bg-cream dark:bg-black">Sort: Newest</option>
                <option value="low" className="bg-cream dark:bg-black">Price: Low to High</option>
                <option value="high" className="bg-cream dark:bg-black">Price: High to Low</option>
              </select>
            </div>

            {/* Added a basic loading guard to prevent layout shift during reload */}
            {status === 'loading' ? (
              <div className="text-center py-20 text-[10px] uppercase tracking-widest text-softGold animate-pulse">
                Refreshing Collection...
              </div>
            ) : (
              <ProductGrid />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}