import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { useSelector } from 'react-redux';

export default function MainLayout() {
  const mode = useSelector((state) => state.theme.mode);
  return (
 
  <div className={mode === 'dark' ? 'dark' : ''}>
      <div className='min-h-screen flex flex-col bg-cream dark:bg-gray-900 transition-colors duration-500'>
        <Header />
        
        {/* Main content area */}
        <main className="flex-grow pt-5">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
    )
  }
