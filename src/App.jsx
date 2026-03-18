
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboardlayout from './layout/Dashboardlayout'
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboardlayout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
