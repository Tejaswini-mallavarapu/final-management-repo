import React, { useEffect, useRef, useState } from "react";
import CheckBox from "./CheckBox";
import { IoIosArrowDown } from "react-icons/io";


const SelectWithCheckbox = ({
    label,
    name,
    value = [],
    onChange,
    options = [],
    placeholder = "Select",
    icon,
    className = "",
    disabled = false,
    }) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);

    const handleCheckboxChange = (option, checked) => {
        let updated;

        if (checked) {
        updated = [...value, option];
        } else {
        updated = value.filter((item) => item.value !== option.value);
        }

        onChange(name, updated);
    };
    useEffect(() => {
        const handleClickOutside = (e) => {
        if (selectRef.current && !selectRef.current.contains(e.target)) {
            setIsOpen(false);
        }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={`select-group ${className}`} ref={selectRef}>
        {label && <label>{label}</label>}
        <div className="custom-selects">
            <div className={`select-wrapper ${isOpen ? "open" : ""}`}>
            <div  className={`custom-dropdowns ${disabled ? "disabled" : ""}`}  onClick={() => !disabled && setIsOpen(!isOpen)} >
                <div className="dropdown-contents">
                {icon && <span className="product-first-icon">{icon}</span>}
                <span className="placeholder">
                    {value.length === 0 ? placeholder : "Selected"}
                </span>
                <span className={`arrow-icon ${isOpen ? "rotate" : ""}`}>
                    <IoIosArrowDown />
                </span>
                </div>
            </div>
            </div>
            {isOpen && (
                <ul className="dropdown-lists">
                    {options.map((item, index) => (
                    <li key={index}>
                        <CheckBox
                            label={item.label}
                            name={name}
                            value={item.value}
                            checked={value.some((v) => v.value === item.value)}
                            onChange={(e) =>
                            handleCheckboxChange(item, e.target.checked)
                        }
                        />
                    </li>
                    ))}
                </ul>
                )}
                </div>
                {value.length > 0 && (
                    <div className="selected-chips">
                    {value.map((item) => (
                        <div key={item.value} className="chip">
                            {item.label}
                            <span  className="chip-close"  onClick={() => handleCheckboxChange(item, false)}> × </span>
                        </div>
                    ))}
                    </div>
                )}
                </div>
            );
};

export default SelectWithCheckbox;