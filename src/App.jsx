import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardLayout from './layout/dashboardlayout/DashboardLayout'
import Dashboard from './pages/dashboard/Dashboard'
import ProductsUploading from './pages/productsuploading/ProductsUploading'
import Login from './pages/globalpages/Login'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='dashboard' element={<Dashboard />}>
            </Route>
            <Route path="productsupload" element={<ProductsUploading />} />
          </Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App