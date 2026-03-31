
import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardLayout from './layout/dashboardlayout/DashboardLayout'
import Dashboard from './pages/dashboard/Dashboard'
import ProductsUploading from './pages/productsuploading/ProductsUploading'
import Login from './pages/globalpages/Login'

import UploadProduct from './pages/productsuploading/management/UploadProduct'
import { AuthProvider } from './context/AuthContext'
import Inputssss from './components/forms/Inputssss'
import ProfileTest from './components/forms/Inputssss'
import Creation from './pages/creation/Creation'
const App = () => {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path='creation' element={<Creation />}></Route>
              <Route path="productsupload">
                <Route index element={<ProductsUploading />} />
                <Route path="upload" element={<UploadProduct />} />

              </Route>
            </Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='input' element={<ProfileTest />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>


    </div>
  )
}

export default App