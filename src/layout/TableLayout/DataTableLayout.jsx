import React from "react";
import SearchToggle from "../../components/forms/SearchToggle";
import CustomSelect from "../../components/forms/CustomSelect";
import Button from "../../components/buttons/Button";
import Pagination from "../../components/pagination/Pagination";
import ReusableTable from "../../components/table/ReusableTable";

const DataTableLayout = ({
    title,
    subtitle,
    search,
    setSearch,
    showFilters,
    setShowFilters,
    filters,
    setFilters,
    filterOptions = [],
    columns,
    data,
    renderRow,
    pagination,
    }) => {
    return (
        <div className="management-products-container">

        <div className="management-products-page">

            <div className="mobile-filter-toggle">
            <Button variant="secondary" onClick={() => setShowFilters(true)}>
                Filters
            </Button>
            </div>

            <div className={`filter-boxes ${showFilters ? "open" : ""}`}>
            <div className="filter-header">
                <span>Filters</span>
                <span onClick={() => setShowFilters(false)}>✖</span>
            </div>

            {filterOptions.map((filter, i) => (
                <CustomSelect
                key={i}
                label={filter.label}
                value={filters[filter.key]}
                options={filter.options}
                onChange={(value) =>
                    setFilters({ ...filters, [filter.key]: value })
                }
                />
            ))}

            <Button variant="secondary" onClick={() => setShowFilters(false)}>
                Apply Filters
            </Button>
            </div>
        </div>

        <div className="shape-card">
            <div className="shape-content">

            <SearchToggle value={search} onChange={setSearch} />

            <div className="table-header">
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>
            <ReusableTable
                columns={columns}
                data={data}
                renderRow={renderRow}
            />
            </div>
        </div>
        {pagination && (
            <Pagination {...pagination} />
        )}
        </div>
    );
};

export default DataTableLayout;