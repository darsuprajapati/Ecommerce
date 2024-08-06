import React from 'react'
import Header from './components/common/Header'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import PageNotFound from './components/pages/PageNotFound'
import './css/style.css'
import './css/bootstrap.min.css'
import './css/animate.min.css'
import './css/animate.css'
import Home from './components/home/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Event from './components/pages/Event'
import Menu from './components/pages/Menu'
import Services from './components/pages/Services'
import Cart from './components/pages/Cart'
import Blog from './components/pages/Blog'
import Footer from './components/common/Footer'

const App = () => {
  return (
    <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event" element={<Event />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer/>
    </Router>
  </div>
  )
}

export default App
