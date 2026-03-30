import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '../../../components/buttons/Button';
import { Images } from '../../../images/Images';
import CustomSelect from '../../../components/forms/CustomSelect';
import Input from '../../../components/forms/Input';
import FileUpload from '../../../components/forms/FileUpload';
import { IoMdAdd } from "react-icons/io";
import TextAreaEditor from '../../../components/forms/TextAreaEditor';

const UploadProduct = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    companyType: "",
    companyName: "",
    productCategory: "",
    productSubCategory: "",
    productName: "",
    packaging: "",
    productCode: "",
    quantity: "",
    PricePerUnit: "",
    images: [],
    composition: ""
  });

  const handleChange = (key, value) => {
    setForm(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);

  };

  return (
    <form className='product-upload-page' onSubmit={handleSubmit}>
      <div className='upload-header'>
        <h2>Upload New Product</h2>
        <Button type="button" variant='delete' onClick={() => navigate("/productsupload")}>
          <span className='btns'>
            <img src={Images.back} alt="back" />
            <span>Back</span>
          </span>
        </Button>
      </div>
      <div className='product-input-boxes'>
        <CustomSelect
          className="w-277"
          label="Company Type"
          value={form.companyType}
          placeholder="Select"
          options={["Brand Owner", "Manufacturer"]}
          onChange={(val) => handleChange("companyType", val)}
        />
        <Input
          className="w-277"
          label="Company Name"
          placeholder="Enter"
          value={form.companyName}
          onChange={(val) => handleChange("companyName", val)}
        />
        <CustomSelect
          className="w-277"
          label="Product Category"
          value={form.productCategory}
          placeholder="Select"
          options={["Aquaculture", "Agriculture", "Human Medicine"]}
          onChange={(val) => handleChange("productCategory", val)}
        />
        <CustomSelect
          className="w-277"
          label="Product Sub Category"
          value={form.productSubCategory}
          placeholder="Select"
          options={["Probiotic", "Minerals", "Medicine", "Feeds","Others"]}
          onChange={(val) => handleChange("productSubCategory", val)}
        />
        <Input
          className="w-277"
          label="Product Name"
          placeholder="Enter"
          value={form.productName}
          onChange={(val) => handleChange("productName", val)}
        />
      </div>

      <div className='upload-fields'>
        <div className='product-input-boxes'>
          <CustomSelect
            className="w-315"
            label="Packing Type"
            value={form.packaging}
            placeholder="Select"
            options={["Pouch", "Bottle", "Bucket", "Other"]}
            onChange={(val) => handleChange("packaging", val)}
          />
          <Input
            className="w-315"
            label="Product Code"
            placeholder="Auto fill"
            value={form.productCode}
            onChange={(val) => handleChange("productCode", val)}
          />
          <CustomSelect
            className="w-315"
            label="Product Quantity"
            value={form.quantity}
            placeholder="Select"
            options={["500g", "1kg", "5kg", "10kg"]}
            onChange={(val) => handleChange("quantity", val)}
          />
          <Input
            className="w-315"
            label="Price Per Unit"
            placeholder="Enter"
            value={form.PricePerUnit}
            onChange={(val) => handleChange("PricePerUnit", val)}
          />
        </div>
        <FileUpload
          label="Upload Product Photos"
          value={form.images}
          onChange={(files) => handleChange("images", files)}
        />
        <div className='add-btn'>
          <div className='search-toggle-btn'>
            <IoMdAdd />
          </div>
        </div>
      </div>
      <div className='text-editor'>
        <label className='textarea-label'>Composition/Ingredients</label>
        <TextAreaEditor onChange={(val) => handleChange("composition", val)}/>
      </div>
      <div className='text-editor'>
        <label className='textarea-label'>Dosage/Usage</label>
        <TextAreaEditor onChange={(val) => handleChange("composition", val)}/>
      </div>

      <div className="submit-btn">
        <Button type="button" variant='delete'>Cancel</Button>
        <Button type="submit" variant="disable">
          Submit Product
        </Button>
      </div>
    </form>
  );
};

export default UploadProduct;