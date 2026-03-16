import { useDispatch, useSelector } from 'react-redux';
import { updateFilters, selectFilters } from '../../store/productSlice';

export default function ProductFilter() {
  const dispatch = useDispatch();
  const { category: activeCategory, maxPrice } = useSelector(selectFilters);
  const categories = ["All", "Skin Care", "Beauty", "Fragrances"];

  return (
    <div className="sticky top-24 space-y-10">
      {/* ... Category List remains same ... */}
      
              {/* Category List */}
      <div>
        <h4 className="font-heading text-xs font-bold uppercase tracking-[0.2em] mb-6 text-charcoal dark:text-white">
          Categories
        </h4>
        <ul className="space-y-4">
          {categories.map((cat) => (
            <li 
              key={cat} 
              // Dispatch the update when clicked
              onClick={() => dispatch(updateFilters({ category: cat }))}
              className="group cursor-pointer flex items-center justify-between text-sm"
            >
              <span className={`transition-colors ${
                activeCategory === cat 
                ? "text-dustyRose font-bold" 
                : "text-charcoal/60 dark:text-gray-400 group-hover:text-dustyRose"
              }`}>
                {cat}
              </span>
              <span className="text-[10px] text-charcoal/20 dark:text-white/20">(12)</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-heading text-xs font-bold uppercase tracking-[0.2em] mb-6 text-charcoal dark:text-white">
          Filter by Price (Up to ${maxPrice})
        </h4>
        <input 
          type="range" 
          min="0"
          max="500"
          value={maxPrice}
          onChange={(e) => dispatch(updateFilters({ maxPrice: Number(e.target.value) }))}
          className="w-full accent-dustyRose bg-charcoal/10 dark:bg-white/10 h-1 rounded-lg appearance-none cursor-pointer" 
        />
        <div className="flex justify-between mt-4 text-xs text-charcoal/60 dark:text-gray-400 font-bold">
          <span>$0</span>
          <span>${maxPrice}</span>
        </div>
      </div>
    </div>
  );
}