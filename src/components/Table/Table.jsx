import * as React from "react";
import { Button, Table } from "reactstrap";

export default function CustomTable({setOpen}) {
  return (
    <div className="mt-5">
      <h3>Dashboard</h3>
      <Table
        className="app-table align-items-center table-flush"
        responsive
        bordered
      >
        <thead className="thead-light">
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="list">
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <div className="d-flex gap-3">
                <Button size="sm" color="warning" onClick={() => setOpen(true)}>
                  Edit
                </Button>
                <Button size="sm" color="danger">
                  Delete
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
