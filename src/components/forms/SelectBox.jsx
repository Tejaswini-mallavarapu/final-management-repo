import React from "react";

const SelectBox = ({
  label,
  name,
  value,
  onChange,
  options = [],
  error,
  placeholder = "",
  required = false
}) => {
  return (
    <div className="select-group">

      {label && <label htmlFor={name}>{label}</label>}

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`custom-select ${error ? "select-error" : ""}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      {error && <p className="error-text">{error}</p>}

    </div>
  );
};

export default SelectBox;