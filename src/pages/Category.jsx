import { useDispatch, useSelector } from "react-redux";
import CustomTable from "../components/Table/Table";
import { Button } from "reactstrap";
import { useEffect } from "react";
import { getCategories } from "../store/actions";

export default function CategoryPage() {
  const header = ['No.', 'Name', 'Actions']
  const {categories} = useSelector((state)=> state.category);
 const {loading} = useSelector((state)=> state.status);
  const dispatch = useDispatch();

  useEffect(()=> {
     dispatch(getCategories())
  },[])


  if(loading) {
    return <h1>Loading...</h1>
  }
  

  return (
    <CustomTable
      title={"Category"}
      header={header}
      tableBody={categories?.map((row, index) => (
        <tr>
          <td>{index + 1}</td>
          <td>{row?.name}</td>
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
