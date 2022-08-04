import React from 'react'

import Navbar from './Component/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Component/Home/Home'
import Dastabka from './Component/dastabka/Dastabka'
import Kantact from './Component/Kantact/Kantact'
import Bonus from './Component/bonus/Bonus'
import Vakansia from './Component/vakancia/Vakansia'
import './App.css'
import Category from './Component/category/Category'
import Sushi from './Component/sushi/Sushi'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dastabka" element={<Dastabka />} />
        <Route path="/kantact" element={<Kantact />} />
        <Route path="/bonus" element={<Bonus />} />
        <Route path="/vakansia" element={<Vakansia />} />
        <Route path="/category" element={<Category />} />
        <Route path="/sushi" element={<Sushi />} />
      </Routes>
    </div>
  )
}

export default App
