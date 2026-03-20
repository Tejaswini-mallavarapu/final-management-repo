import React, { useState } from 'react'
import Button from '../../components/buttons/Button'
import ManufacturerProducts from './manufacturer/ManufacturerProducts'
import ManagementProducts from './management/ManagementProducts'

const ProductsUploading = () => {
    const [activeTab, setActiveTab] = useState("management") 

    return (
        <div className='upload-products-page'>

            <div className='page-header'>
                <h2>Product Uploading</h2>
            </div>
            <div className='upload-products-links'>

                <Button
                    variant={activeTab === "management" ? "primary" : "white"}
                    onClick={() => setActiveTab("management")}>
                    My Uploading Products
                </Button>
                <Button
                    variant={activeTab === "manufacturer" ? "primary" : "white"}
                    onClick={() => setActiveTab("manufacturer")} >
                    Manufacturer Uploading Products
                </Button>
            </div>
            <div className="upload-products-content">
                {activeTab === "management" && <ManagementProducts />}

                {activeTab === "manufacturer" && <ManufacturerProducts />}
            </div>
        </div>
    )
}

export default ProductsUploading