
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
// import Dashboardlayout from './layout/Dashboardlayout'
// import Dashboard from './pages/dashboard/Dashboard'
// import ProductsUploading from './pages/productsuploading/ProductsUploading'
// import ManagementProducts from './pages/productsuploading/management/ManagementProducts'
// import ManufacturerProducts from './pages/productsuploading/manufacturer/ManufacturerProducts'
// function App() {

//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Dashboardlayout />}>
//             <Route index element={<Dashboard />} />
//             <Route path='Dashboard' element={<Dashboard />} />
//             <Route path='productsupload' element={<ProductsUploading/>}>
//             <Route index  element={<ManagementProducts/>}></Route>
//             <Route path='myproducts' element={<ManagementProducts/>} ></Route>
//             <Route path='manufacturerproducts' element={<ManufacturerProducts/>} ></Route>
//             </Route>
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App
import React from 'react'
import './App.css'
import Header from './components/header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardLayout from './layout/dashboardlayout/DashboardLayout'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={   <DashboardLayout/>}>
        </Route>
      </Routes>
      </BrowserRouter>
   
    </div>
  )
}

export default App