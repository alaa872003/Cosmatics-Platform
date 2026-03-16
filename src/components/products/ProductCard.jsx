
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { NavLink } from "react-router";

export default function Product({ product }) {
  return (
    <div className="group relative bg-white dark:bg-[#111111] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent dark:border-white/5">
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden bg-mist dark:bg-[#1a1a1a]">
        <img 
          src={product.thumbnail} 
          alt={product.title} 
          className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal p-4 transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Hover Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          <button className="p-2 bg-white dark:bg-charcoal rounded-full shadow-md text-charcoal dark:text-cream hover:bg-dustyRose hover:text-white transition-colors">
            <CiHeart size={20} />
          </button>
          <button className="p-2 bg-white dark:bg-charcoal rounded-full shadow-md text-charcoal dark:text-cream hover:bg-dustyRose hover:text-white transition-colors">
            <CiShoppingCart size={20} />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <span className="text-xs uppercase text-softGold tracking-tighter mb-1 block font-bold">
          {product.category}
        </span>
        <h3 className="text-charcoal dark:text-cream font-medium text-lg mb-2 truncate">
          {product.title}
        </h3>
        <div className="flex justify-between items-center">
          <span className="text-charcoal dark:text-gray-400 font-bold">${product.price}</span>
          <NavLink to={`/products/${product.id}`} className="text-[10px] font-bold uppercase border-b border-charcoal dark:border-softGold text-charcoal dark:text-softGold hover:text-dustyRose hover:border-dustyRose transition-colors tracking-widest">
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  );
}