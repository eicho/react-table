import React from "react";
import "./Table.css"; // Import CSS file for styling

const Table = ({ data }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Day</th>
            <th style={{ minWidth: "120px" }}>Time</th>
            <th>Hall</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <TableRow key={index} rowData={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TableRow = ({ rowData }) => {
  const { team, items = [] } = rowData;

  const renderItemProperty = (propertyKey) =>
    items.map((item, index) => {
      const className = `sub-item${index !== 0 ? " divider" : ""}`;
      if (propertyKey === "time") {
        const [startTime, endTime] = item[propertyKey].split(" - ");
        return (
          <div key={`${propertyKey}-${index}`} className={className}>
            <span className="time-start">{startTime}</span> -{" "}
            <span className="time-end">{endTime}</span>
          </div>
        );
      } else {
        return (
          <div key={`${propertyKey}-${index}`} className={className}>
            {item[propertyKey]}
          </div>
        );
      }
    });

  return (
    <>
      <tr className="row-header">
        <td></td>
        <td colSpan="4">
          <span className="team">{team}</span>
        </td>
      </tr>
      <tr className="row-item">
        <td>
          <span className="team">{team}</span>
        </td>
        <td>{renderItemProperty("day")}</td>
        <td>{renderItemProperty("time")}</td>
        <td>{renderItemProperty("hall")}</td>
      </tr>
    </>
  );
};

export default Table;
