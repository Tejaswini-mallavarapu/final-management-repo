import React from 'react'
import { Images } from '../images/Images'
import { NavLink } from 'react-router-dom'


const Dashboardlayout = () => {
    return (
        <div className='dashboard-layout'>
            <div className='container-fluid '>
                <div className='dashboard-header'>
                    <div className='logo'>
                        <img src={Images.logo} />
                    </div>
                    <div className='nav-bar'>
                        <div className='nav-links'>
                            <NavLink
                                to="/"
                                className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                                Dashboard
                            </NavLink>

                            <NavLink
                                to="/upload"
                                className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                                Products Uploading
                            </NavLink>

                            <NavLink
                                to="/creation"
                                className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} >
                                Creations
                                <img src={Images.dropdown} alt="dropdown" />
                            </NavLink>

                            <NavLink
                                to="/reports"
                                className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} >
                                Reports
                                <img src={Images.dropdown} alt="dropdown" />
                            </NavLink>
                            <NavLink
                                to="/more"
                                className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}  >
                                More
                                <img src={Images.dropdown} alt="dropdown" />
                            </NavLink>
                        </div>
                        <div className='nav-icons settings'>
                            <img src={Images.settings} /> <span>settings</span>
                        </div>
                        <div className='nav-icons'>
                            <img src={Images.chat} />
                        </div>
                        <div className='nav-icons'>
                            <img src={Images.bell} />

                        </div>
                        <div className='nav-icons'>
                            <img src={Images.user} />

                        </div>
                    </div>
                </div>
            </div>
            <div className='dashboard-content'>
            </div>
        </div>
    )
}

export default Dashboardlayout