import * as React from "react";
import "./Table.css";
import { Container, Table } from "reactstrap";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
  createData("Big Baza Bang ", 18908424, "2 March 2022", "Pending"),
  createData("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
  createData("Cupcake", 18908421, "2 March 2022", "Delivered"),
];

const makeStyle = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function BasicTable() {
  return (
    <Container className="Table mt-5">
      <h3>Recent Orders</h3>
      <div style={{ boxShadow: "0px 13px 20px 0px #80808029" }}>
        <Table responsive sx={{ minWidth: 650 }} className="bg-dark">
          <thead>
            <tr>
              <td>Product</td>
              <td align="left">Tracking ID</td>
              <td align="left">Date</td>
              <td align="left">Status</td>
              <td align="left"></td>
            </tr>
          </thead>
          <tbody style={{ color: "white" }}>
            {rows.map((row) => (
              <tr
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <td component="th" scope="row">
                  {row.name}
                </td>
                <td align="left">{row.trackingId}</td>
                <td align="left">{row.date}</td>
                <td align="left">
                  <span className="status" style={makeStyle(row.status)}>
                    {row.status}
                  </span>
                </td>
                <td align="left" className="Details">
                  Details
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}
