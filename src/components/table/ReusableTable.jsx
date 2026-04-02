import React from "react";
import Button from "../buttons/Button";
import SearchToggle from "../forms/SearchToggle";

const ReusableTable = ({
    columns = [],
    data = [],
    renderRow,
    emptyState = {},
    header,
    searchProps
    }) => {

    const {
        image,
        title = "No Data Found",
        description = "No records available",
        buttonText,
        onButtonClick,
    } = emptyState;
    const isEmpty = !data || data.length === 0;

    return (
        <div className="shape-card">
        <div className="shape-content">
            {searchProps && <SearchToggle
                value={searchProps.value}
                onChange={searchProps.onChange}/>}
            {header && !isEmpty &&(
            <div className="table-header">
                <h3>{header.title}</h3>
                <p>{header.description}</p>
            </div>
            )}
            <div className="table-container">
            {isEmpty ? (
                <div className="empty-state-container">
                <div className="empty-state">
                    {image && (
                    <span>
                        <img src={image} alt="empty" />
                    </span>
                    )}
                    <div className="empty-state-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    {buttonText ? (
                        <div className="empty-state-btn-wrapper">
                        <Button variant="secondary" className="empty-state-btn" onClick={onButtonClick} >
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M9.00006 15.4673C8.51455 15.4673 8.12115 15.0739 8.12115 14.5884V3.41016C8.12115 2.92465 8.51455 2.53125 9.00006 2.53125C9.48557 2.53125 9.87897 2.92465 9.87897 3.41016V14.5884C9.87897 15.0739 9.48557 15.4673 9.00006 15.4673Z" fill="white" />
                                <path d="M14.5892 9.87891H3.41095C2.92544 9.87891 2.53204 9.48551 2.53204 9C2.53204 8.51449 2.92544 8.12109 3.41095 8.12109H14.5892C15.0747 8.12109 15.4681 8.51449 15.4681 9C15.4681 9.48551 15.0747 9.87891 14.5892 9.87891Z" fill="white" />
                            </svg>
                            </span>
                            <span>{buttonText}</span>
                        </Button>
                        </div>
                    ):null}
                    </div>

                </div>
                </div>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                        {columns.map((col, index) => (
                            <th key={index} className={col.className || ""}>
                            {col.label}
                            </th>
                        ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) =>
                        renderRow(item, index)
                        )}
                    </tbody>
                </table>
            )}
            </div>
        </div>
        </div>
    );
};

export default ReusableTable;