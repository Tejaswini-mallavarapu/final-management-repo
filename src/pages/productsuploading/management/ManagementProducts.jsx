import React, { useState } from 'react'
import SelectBox from '../../../components/forms/SelectBox'

const ManagementProducts = () => {

 
  return (
    <div>
      <div className="select-box select-wrapper">
        <SelectBox
          label="Company Type"
          name="companyType"
        
          placeholder="Brand Owner"
          options={[
            { label: "Manufacturer"},
            { label: "Retailer" }
          ]}
        />
      </div>
      <div className="select-box select-wrapper">
        <SelectBox
          label="Company Name"
          name="companyName"
          
          placeholder="All"
          options={[
            { label: "ABC Pvt Ltd"},
            { label: "XYZ Pvt Ltd" }
          ]}
        />
      </div>
      <div className="select-box select-wrapper">
        <SelectBox
          label="Product Category"
          name="productCategory"

          placeholder="All"
          options={[
            { label: "Electronics" },
            { label: "Clothing" }
          ]}
        />
      </div>
      <div className="select-box select-wrapper">
        <SelectBox
          label="Product Sub Category"
          name="productSubCategory"

          placeholder="All"
          options={[
            { label: "Mobiles"},
            { label: "Shirts" }
          ]}
        />
      </div>

      <div className="select-box select-wrapper">
        <SelectBox
          label="Product Name"
          name="productName"

          placeholder="All"
          options={[
            { label: "iPhone" },
            { label: "T-Shirt"}
          ]}
        />
      </div>

    </div>
  );
};

export default ManagementProducts;