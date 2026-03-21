import React from "react";

const CustomTable = ({ columns = [], data = [] }) => {
  return (
    <div className="table-container">
      <table className="products-table">
        
        {/* HEADER */}
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col.header}</th>
            ))}
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={row.id || rowIndex}>
                
                {columns.map((col, colIndex) => (
                  <td key={colIndex}>
                    {col.cell
                      ? col.cell(row, rowIndex)   
                      : row[col.accessor]}       
                  </td>
                ))}

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} style={{ textAlign: "center" }}>
                No Data Found
              </td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  );
};

export default CustomTable;