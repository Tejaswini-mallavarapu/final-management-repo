import CustomSelect from "./CustomSelect";
import Button from "../buttons/Button";
import DateInput from "./DateInput";

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
            {filtersConfig.map((item) => {
                if (item.type === "select") {
                    return (
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
                    );
                }
                if (item.type === "date") {
                    return (
                        <div key={item.key} className="filter-date filter-manu">
                            <label>{item.label}</label>
                            <DateInput
                                value={filterValues[item.key]}
                                onChange={(value) =>
                                    setFilterValues({
                                        ...filterValues,
                                        [item.key]: value,
                                    })
                                }
                            />
                        </div>
                    );
                }
                return null;
            })}
            <div className="filter-actions">
                <Button variant="secondary" onClick={onSearch}>
                    Search
                </Button>
            </div>
        </div>
    );
};

export default ReusableFilters;