import React from "react";
import { FaCheck } from "react-icons/fa6";
 
const CheckBox = ({
    label,
    name,
    value,
    checked,
    onChange,
    required = false,
    disabled = false,
    error,
    className = "",
    id,
    }) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).slice(2, 9)}`;
    
    return (
        <div className={`checkbox-group ${className}`}>
        <label className="checkbox-wrappers" htmlFor={checkboxId}>
            <input
            type="checkbox"
            id={checkboxId}
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
            required={required}
            disabled={disabled}
            />
    
            <span className="custom-checkboxs"><FaCheck /></span>
    
            {label && <span className="label-text">{label}</span>}
        </label>
    
        {error && <p className="error-text">{error}</p>}
        </div>
    );
    };
    
export default CheckBox;