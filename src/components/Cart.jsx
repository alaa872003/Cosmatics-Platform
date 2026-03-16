import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { decreaseQuantity, increaseQuantity, removeItem } from '../store/cartSlice';
import { HiOutlineTrash, HiArrowRight } from "react-icons/hi2";
import { MdOutlineSecurity, MdOutlineLocalShipping, MdOutlineCached } from "react-icons/md";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const counter = useSelector((state) => state.cart.counter);
  const dispatch = useDispatch();

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.08; // Estimated tax at 8%
  const total = subtotal + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#F9F7F4] dark:bg-[#050505] flex flex-col items-center justify-center pt-20">
        <h2 className="text-xl font-light text-charcoal/40 mb-8">Your bag is currently empty.</h2>
        <Link to="/products" className="py-3 px-8 bg-[#C9A4A1] text-white rounded-md hover:bg-[#b89390] transition-colors">
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F7F4] dark:bg-[#050505] pt-32 pb-20">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <header className="mb-12">
          <h1 className="text-3xl font-normal text-[#2D3436] dark:text-white mb-1">Shopping Bag</h1>
          <p className="text-sm text-gray-500 font-light">{counter} items in your bag</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Column: Product List */}
          <div className="lg:col-span-2 space-y-8">
            {items.map((item) => (
              <div key={item.id} className="flex gap-6 pb-8 border-b border-gray-200 dark:border-white/5 last:border-0">
                <div className="w-32 h-32 bg-white dark:bg-[#111] rounded-lg overflow-hidden flex-shrink-0">
                  <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 dark:text-white">{item.title}</h3>
                      <p className="text-xs text-gray-400 font-light mt-1">Standard size</p>
                    </div>
                    <p className="text-lg font-normal text-gray-800 dark:text-white">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center border border-gray-200 dark:border-white/10 rounded-md bg-white dark:bg-[#111]">
                      <button 
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        className="px-3 py-1 text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                      >
                        −
                      </button>
                      <span className="px-3 text-sm font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        className="px-3 py-1 text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <button 
                      onClick={() => dispatch(removeItem(item.id))}
                      className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <HiOutlineTrash size={14} />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Order Summary Card */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-[#0a0a0a] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
              <h2 className="text-xl font-normal text-gray-800 dark:text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4 text-sm font-light text-gray-500 dark:text-gray-400">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-gray-800 dark:text-white">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-[#4CAF50] italic">Complimentary</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax</span>
                  <span className="text-gray-800 dark:text-white">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="my-6 border-t border-gray-100 dark:border-white/5" />

              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-normal text-gray-800 dark:text-white">Total</span>
                <span className="text-2xl font-semibold text-[#D3A09E]">${total.toFixed(2)}</span>
              </div>

              {/* Promo Code Input */}
              <div className="mb-8">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">Promo Code</p>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Enter code" 
                    className="flex-1 bg-[#F9F7F4] dark:bg-[#111] border-none rounded-md px-4 py-2 text-xs focus:ring-1 focus:ring-[#D3A09E] outline-none"
                  />
                  <button className="text-[10px] uppercase tracking-widest font-bold text-gray-500 hover:text-charcoal transition-colors">Apply</button>
                </div>
              </div>

              <button className="w-full py-4 bg-dustyRose hover:bg-charcoal dark:hover:bg-softGold text-white flex items-center justify-center gap-2 transition-all group">
                Proceed to Checkout
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Trust Badges */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-[10px] text-gray-400 uppercase tracking-wide">
                  <MdOutlineSecurity size={16} />
                  Secure encrypted checkout
                </div>
                <div className="flex items-center gap-3 text-[10px] text-gray-400 uppercase tracking-wide">
                  <MdOutlineLocalShipping size={16} />
                  Free delivery on orders over $150
                </div>
                <div className="flex items-center gap-3 text-[10px] text-gray-400 uppercase tracking-wide">
                  <MdOutlineCached size={16} />
                  30-day premium return policy
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}