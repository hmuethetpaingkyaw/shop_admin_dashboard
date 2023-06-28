import * as React from "react";
import { Button, Table } from "reactstrap";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";

export default function CustomTable({ title, header, tableBody }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="mt-5">
      <h3 className={Boolean(theme === "dark") && "text-white"}>{title}</h3>
      <Table
        className={`app-table align-items-center table-flush ${
          Boolean(theme === "dark" ) && "text-white"
        }`}
        responsive
        bordered
      >
        <thead className="thead-light">
          <tr>
            {header.map((head, index) => (
              <th key={index}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody className="list">
          {tableBody}
        </tbody>
      </Table>
    </div>
  );
}
