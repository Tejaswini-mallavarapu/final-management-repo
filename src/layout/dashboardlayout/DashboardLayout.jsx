import React from 'react'
import Header from '../../components/header/Header'
import { Outlet } from 'react-router-dom'
const DashboardLayout = () => {
    return (
        <div>
            <div className='dashboard-header container-fluid'>
                <Header />
            </div>
            <div className='container-fluid'>
                <div className='dashboard-content'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout