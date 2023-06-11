import CustomTable from "../components/Table/Table";
import { Button } from "reactstrap";

export default function CategoryPage() {
  const header = ['No.', 'Name', 'Actions']
  const data = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  
  return (
    <CustomTable
      title={"Category"}
      header={header}
      tableBody={data.map((row, index) => (
        <tr>
          <td>{index + 1}</td>
          <td>{row}</td>
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
      ))}
    />
  );
}
