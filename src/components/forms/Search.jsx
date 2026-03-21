import { FaSearch } from "react-icons/fa";

const Search = ({ value, onChange, placeholder = "Search here..." }) => {
  return (
    <div className="search-wrapper">
      <FaSearch className="search-icon" />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Search;