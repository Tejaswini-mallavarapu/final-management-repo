
import React from 'react'
import './App.css'
import Header from './components/header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardLayout from './layout/dashboardlayout/DashboardLayout'
import Dashboard from './pages/dashboard/Dashboard'
import ProductsUploading from './pages/productsuploading/ProductsUploading'
import Login from './pages/globalpages/Login'
import Inputssss from './components/forms/Inputssss'
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
          <Route path='/input' element={<Inputssss/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App