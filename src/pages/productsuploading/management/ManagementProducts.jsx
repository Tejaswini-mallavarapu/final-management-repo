import React, { useState } from 'react'
import SelectBox from '../../../components/forms/SelectBox'
import CustomSelect from '../../../components/forms/CustomSelect';

const ManagementProducts = () => {
    const [filters, setFilters] = useState({
    companyType: "All",
    companyName: "All",
    productscategory:"All",
  });
  return (
    <div>
     <div className='search-boxes'>
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
       <CustomSelect
        label="Product Category"
        value={filters.productscategory}
        options={["All", "Aquaculture", "Agriculture","Human Medicine","Others"]}
        onChange={(val) =>
          setFilters({ ...filters, productscategory: val })
        }
      />

     </div>
    </div>
  );
};

export default ManagementProducts;