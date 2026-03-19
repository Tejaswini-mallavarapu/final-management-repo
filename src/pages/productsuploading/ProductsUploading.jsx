import React from 'react'
import Button from '../../components/buttons/Button'
import { NavLink, Outlet } from 'react-router-dom'

const ProductsUploading = () => {
    return (
        <div className='upload-products-page'>
            <div className='container'>
                <h2>Product Uploading</h2>
                <div className='products-btns'>
                    <NavLink
                        to="myproducts"
                        end
                        className={({ isActive }) =>
                            isActive ? "btn btn-white active" : "btn btn-white"
                        } >
                        My Uploading Products
                    </NavLink>
                    <NavLink
                        to="manufacturerproducts"
                        end
                        className={({ isActive }) =>
                            isActive ? "btn btn-white active" : "btn btn-white"
                        }>
                        Manufacturer Uploading Products
                    </NavLink>

                </div>
                <div>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default ProductsUploading