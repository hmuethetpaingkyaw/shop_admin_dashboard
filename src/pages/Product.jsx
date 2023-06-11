import CustomTable from "../components/Table/Table";
import { Button } from "reactstrap";
import { useSelector , useDispatch} from "react-redux";
import {useEffect} from 'react'
import { getProducts } from "../store/actions";
import { deleteProduct } from "../store/actions/product";


export default function ProductPage() {
  const header = ["No.", "Title", "Price", "Description", "Category", "Image"];
  const {products} = useSelector((state)=> state.product);
  const dispatch = useDispatch();

  useEffect(()=> {
     dispatch(getProducts())
  },[])

  const handleDelete = (id)=> {
    dispatch(deleteProduct(id))
  }
  return (
    <CustomTable
      title={"Product"}
      header={header}
      tableBody={products?.map((row, index) => (
        <tr>
          <td>{index + 1}</td>
          <td>{row.title}</td>
          <td>{row.price}</td>
          <td>{row.description}</td>
          <td>{row.category}</td>
          <td>
            <img src={row.image} style={{ width: "50px", height: "50px" }} />
          </td>
          <td>
            <div className="d-flex gap-3">
              <Button size="sm" color="warning" onClick={() => setOpen(true)}>
                Edit
              </Button>
              <Button size="sm" color="danger" onClick={()=> handleDelete(row.id)}>
                Delete
              </Button>
            </div>
          </td>
        </tr>
      ))}
    />
  );
}

