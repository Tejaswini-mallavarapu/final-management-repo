import { useState } from "react";
import { Images } from "../../images/Images";

const SearchToggle = ({
  value,
  onChange,
  placeholder = "Search here...",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="search-toggle-container">

      {open && (
        <div className="search-input-box">
          <span className="search-icon"><img src="/assets/images/fi_8669664 (1).svg" alt="search" /></span>

          <input
            type="text"
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder={placeholder}
          />
        </div>
      )}

      <button
        className="search-toggle-btn"
        onClick={() => setOpen(!open)} >
        {open ? <img src={Images.close} alt="close" /> :  <img src={Images.search} alt="search" />}
      </button>

    </div>
  );
};

export default SearchToggle;