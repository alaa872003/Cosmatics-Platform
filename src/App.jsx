
import './App.css'
import ProductSection from './components/products/ProductSection'
import { useEffect } from "react"      
import { useSelector } from "react-redux" 
import Cart from './components/Cart'
import HeroSection from './features/home/HeroSection'
import MainLayout from './MainLayout';
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './features/auth/Login'
import SignUp from './features/auth/SignUp'
import Blog from './components/Blogs'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

function App() {
  const isDarkMode=useSelector(state => state.theme.mode);
useEffect(()=>{
  if(isDarkMode === "dark"){
    document.documentElement.classList.add('dark')
  }else{
    document.documentElement.classList.remove('dark')

  }
})
  return (
    
    
   <BrowserRouter>
     <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/blogs" element={<Blog/>}/>
        </Route>
     </Routes>
     </BrowserRouter>
  )
}

export default App
