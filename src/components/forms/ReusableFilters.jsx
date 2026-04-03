import CustomSelect from "./CustomSelect";
import Button from "../buttons/Button";

const ReusableFilters = ({
    filtersConfig = [],
    filterValues = {},
    setFilterValues,
    showFilters,
    setShowFilters,
    onSearch,
    }) => {
    return (
        <div className={`filter-boxes ${showFilters ? "open" : ""}`}>
        
        <div className="filter-header">
            <span>Filters</span>
            <span onClick={() => setShowFilters(false)}>✖</span>
        </div>

        {filtersConfig.map((item) => (
            <CustomSelect
            key={item.key}
            className="filter-select filter-manu"
            label={item.label}
            options={item.options}
            value={filterValues[item.key]}
            onChange={(value) =>
                setFilterValues({
                ...filterValues,
                [item.key]: value,
                })
            }
            />
        ))}

        <div className="filter-actions">
            <Button variant="secondary" onClick={onSearch}>
                Search
            </Button>
        </div>
        </div>
    );
};

export default ReusableFilters;