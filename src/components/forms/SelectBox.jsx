
const CheckBox = ({ label, name, value, checked, onChange }) => {
  return (
    <div className="checkbox-group">
      <label className="checkbox-wrapper">
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <span className="custom-checkbox"></span>
        {label}
      </label>
    </div>
  );
};

export default CheckBox;