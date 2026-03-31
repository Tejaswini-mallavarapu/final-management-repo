import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '../../../components/buttons/Button';
import { Images } from '../../../images/Images';
import CustomSelect from '../../../components/forms/CustomSelect';
import Input from '../../../components/forms/Input';
import FileUpload from '../../../components/forms/FileUpload';
import { IoMdAdd } from "react-icons/io";
import TextAreaEditor from '../../../components/forms/TextAreaEditor';
import Popup from '../../../components/popup/PopUp';

const UploadProduct = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    companyType: "",
    companyName: "",
    productCategory: "",
    productSubCategory: "",
    productName: "",
    composition: ""
  });

  const [uploadSections,setUploadSections]=useState([
    {
      id: Date.now(),
      packaging:"",
      productCode:"",
      quantity:"",
      PricePerUnit:"",
      images:[]
    }
  ]);
  const [showPopup,setShowPopup]=useState(false);
  const [customSubCategory,setCustomSubCategory]=useState("");


  const handleChange = (key, value) => {
    setForm(prev => ({
      ...prev,
      [key]: value
    }));
      if(key === "productSubCategory" && value === "Others"){
        setShowPopup(true);
      }
  };
  const handleSectionChange=(index,key,value)=>{
    const updated=[...uploadSections];
    updated[index][key]=value;
    setUploadSections(updated);
  };

  const handleAddSection=()=>{
    setUploadSections([...uploadSections,{
      id: Date.now(),
      packaging:"",
      productCode:"",
      quantity:"",
      PricePerUnit:"",
      images:[]
    }]);
  };
  const handleRemoveSection=(index)=>{
    const updated=uploadSections.filter((_,i)=>i !==index);
    setUploadSections(updated);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalData={
      ...form,
      variants: uploadSections
    };
    console.log(finalData);

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

      {uploadSections.map((section, index)=>(

      <div className='upload-fields' key={section.id}>
        <div className='product-input-boxes'>
          <CustomSelect
            className="w-315"
            label="Packing Type"
            value={section.packaging}
            placeholder="Select"
            options={["Pouch", "Bottle", "Bucket", "Other"]}
            onChange={(val) => handleSectionChange(index, "packaging", val)}
          />
          <Input
            className="w-315"
            label="Product Code"
            placeholder="Auto fill"
            value={section.productCode}
            onChange={(val) => handleSectionChange(index, "productCode", val)}
          />
          <CustomSelect
            className="w-315"
            label="Product Quantity"
            value={section.quantity}
            placeholder="Select"
            options={["500g", "1kg", "5kg", "10kg"]}
            onChange={(val) => handleSectionChange(index, "quantity", val)}
          />
          <Input
            className="w-315"
            label="Price Per Unit"
            placeholder="Enter"
            value={section.PricePerUnit}
            onChange={(val) => handleSectionChange(index, "PricePerUnit", val)}
          />
        </div>
        <FileUpload
          label="Upload Product Photos"
          value={section.images}
          onChange={(files) => handleSectionChange(index, "images", files)}
        />
        <div className='add-btn'>
          {index===uploadSections.length - 1 && (
            <div className='search-toggle-btn' type="button" onClick={handleAddSection}>
              <IoMdAdd />
            </div>
          )}
        </div>
        <div className='remove-btn'>
          {uploadSections.length > 1 && (
            <div type="button" className='trash' onClick={() => handleRemoveSection(index)} >
              <img src={Images.delete} alt="delete" />
              </div>
            )}
        </div>
      </div>
      ))}
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
      <Popup
      className='others'
        open={showPopup}
        title="Product Category"
        onCancel={()=>setShowPopup(false)}>
          {({ close }) => (
          <div className='popup-content'>
            <Input
            className='category'
              label="Category"
              placeholder="Enter"
              value={customSubCategory}
              onChange={(val) => setCustomSubCategory(val)}
            />

            <div>
              <Button
              className='others-btn'
                onClick={() => {
                  setForm(prev => ({
                    ...prev,
                    productSubCategory: customSubCategory
                  }));
                  close();
                  setShowPopup(false);
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        )}
        </Popup>
    </form>
  );
};

export default UploadProduct;