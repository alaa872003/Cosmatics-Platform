import React from 'react'
import ProductSection from '../components/products/ProductSection'
import Categories from '../features/home/Categories'
import Philosophy from '../features/home/Philosophy'
import HeroSection from '../features/home/HeroSection'

export default function Home() {
  return (
  <main className="bg-cream dark:bg-gray-900 transition-colors">
        <HeroSection />
        <Categories />
        <ProductSection />
        <Philosophy />
      </main>
  )
}
