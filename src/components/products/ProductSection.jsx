import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  fetchProducts, 
  selectAllProducts, 
  selectProductStatus, 
  selectProductError 
} from '../../store/productSlice';
import ProductCard from "./ProductCard"
import { NavLink } from 'react-router';

export default function ProductSection() {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectProductStatus);
  const error = useSelector(selectProductError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return (
      <div className="py-20 text-center animate-pulse text-softGold font-heading text-2xl">
        Loading Beauty Essentials...
      </div>
    );
  }

  if (status === 'failed') {
    return <div className="py-20 text-center text-red-400">Error: {error}</div>;
  }

  return (
    <section className="py-24 px-6 bg-cream  transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-heading text-charcoal dark:text-white mb-2">New Arrivals</h2>
            <div className="w-20 h-1 bg-dustyRose"></div>
          </div>
          <NavLink to="/products" className="text-sm uppercase tracking-widest text-softGold hover:text-charcoal dark:hover:text-white transition-colors">
            View All
          </NavLink>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* We only change this mapping part to sort and slice the 4 newest */}
          {[...products]
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}