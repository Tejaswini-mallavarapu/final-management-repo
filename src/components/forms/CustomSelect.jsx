import { useState, useRef, useEffect } from "react";
import { Images } from "../../images/Images";

const CustomSelect = ({ label, value, options = [], onChange }) => {
  const [open, setOpen] = useState(false);
  const selectRef = useRef(null); 

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="select" ref={selectRef}>

      {label && <label className="select-label">{label}</label>}

      <div
        className="select-box"
        onClick={() => setOpen(!open)}
      >
        <span>{value}</span>
        <span className={`arrow ${open ? "rotate" : ""}`}>
          <img src={Images.dropdown} />
        </span>
      </div>

      {open && (
        <div className="select-dropdown">

          <div className="dropdown-header">{value}</div>

          <div className="dropdown-list">
            {options.map((item, index) => (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => {
                  onChange(item);
                  setOpen(false);
                }} >
                {item}
              </div>
            ))}
          </div>

        </div>
      )}
    </div>
  );
};

export default CustomSelect;