import { useState } from "react";
import Button from "../../../../components/buttons/Button";
import { Images } from "../../../../images/Images";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Input from "../../../../components/forms/Input";
import SelectWithCheckbox from "../../../../components/forms/SelectWithCheckbox";
// import CustomSelect from "../../../../components/forms/CustomSelect";

const BrandownerCreation = () => {
    const [openSection, setOpenSection] = useState(true);
    const [form, setForm] = useState({ category: [],companyType:"" });

    const toggleSection = () => {
        setOpenSection(!openSection);
    };
    const handleChange=(name,value)=>{
        setForm((prev)=>({...prev,[name]:value
        }))
    }

    return (
        <div className="product-upload-page">
            <div className="upload-header">
                <h2>Create New</h2>
                <Button type="button" variant="delete">
                    <span className='btns'>
                        <img src={Images.back} alt="back" />
                        <span>Back</span>
                    </span>
                </Button>
            </div>
            <div className="brand-creation">
                <div className="brand-head">
                    <div className="brand-title" onClick={toggleSection}>
                        <h4>Brand Owner Details</h4>
                        {openSection 
                            ? <IoIosArrowUp className="arrow" /> 
                            : <IoIosArrowDown className="arrow" />
                        }
                    </div>
                    {openSection && (
                        <div className="brand-body">
                            <div className="input-fields">
                                <Input className="w-423" label="Brand Owner Name" placeholder="Enter" />
                                <Input className="w-423" label="Pan Number" placeholder="Enter" />
                                <Input className="w-423" label="GST Number" placeholder="Enter" />
                                <Input className="w-423" label="Mail ID" placeholder="Enter" />
                                <Input className="w-423" label="Contact Number" placeholder="Enter" />
                                {/* <CustomSelect className="w-423" label="Company Type" value={form.companyType}
                                    placeholder="Select"
                                    options={[
                                        {label:"Aquaculture",value:"Aquaculture"},
                                        {label:"Agriculture",value:"Agriculture"},
                                        {label:"Human Medicine",value:"Human Medicine"},
                                    ]}
                                    onChange={(e) => handleChange("companyType", e.target.value)}
                                /> */}
                                <Input className="w-423" label="Product Category" placeholder="Enter" />
                                <SelectWithCheckbox
                                className="w-423"
                                    label="Product Sub Category"
                                    name="category"
                                    value={form.category}
                                    onChange={(name, value) =>
                                        setForm((prev) => ({ ...prev, [name]: value }))
                                    }
                                    options={[
                                        { label: "Aquaculture", value: "aqua" },
                                        { label: "Agriculture", value: "agri" },
                                    ]}
                                />
                                <Input className="w-423" label="Product Discount" placeholder="Enter" />

                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default BrandownerCreation;