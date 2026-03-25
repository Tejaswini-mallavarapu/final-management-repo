const Input = ({
  label,
  value,
  onChange,
  placeholder = "Enter value",
  type = "text",
  className = ""  
}) => {
  return (
    <div className={`custom-input ${className}`}>

      {label && <label className="input-label">{label}</label>}

      <div className="input-box">
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>

    </div>
  );
};

export default Input;