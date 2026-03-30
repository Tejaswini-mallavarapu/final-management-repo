import React from "react";

const ReusableTable = ({ columns = [], data = [], renderRow }) => {
    return (
        <div className="table-container">
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
            {
                data.map((item, index) => renderRow(item, index))
            }
            </tbody>
        </table>
        </div>
    );
};

export default ReusableTable;