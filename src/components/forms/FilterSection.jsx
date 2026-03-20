import { useState } from "react";
import CustomSelect from "./CustomSelect";

const FilterSection = () => {

  const [filters, setFilters] = useState({
    companyType: "All",
    companyName: "All",
  });

  return (
    <div style={{ display: "flex", gap: "20px" }}>

      <CustomSelect
        label="Company Type"
        value={filters.companyType}
        options={["All", "Brand Owner", "Manufacturer"]}
        onChange={(val) =>
          setFilters({ ...filters, companyType: val })
        }
      />

      <CustomSelect
        label="Company Name"
        value={filters.companyName}
        options={[
          "All",
          "Sri Animalife Biotech",
          "Unique Biotech"
        ]}
        onChange={(val) =>
          setFilters({ ...filters, companyName: val })
        }
      />
    </div>
  );
};

export default FilterSection;