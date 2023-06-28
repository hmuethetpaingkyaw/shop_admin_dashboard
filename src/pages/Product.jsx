import CustomTable from "../components/Table/Table";
import { Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts } from "../store/actions";
import { deleteProduct } from "../store/actions/product";
import NewProductForm from "./NewProductForm";
import { getCategories } from "../store/actions";

export default function ProductPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  //const header = ["No.", "Title", "Price", "Description", "Category", "Image"];
  const header = ["No.", "Title",  "Category"];
  const { products } = useSelector((state) => state.product);
  const { loading } = useSelector((state) => state.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };
  const toggle = () => {
    setIsModalOpen((prev) => !prev);
  };
  useEffect(()=> {
    dispatch(getCategories())
 },[])

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div>
        <Button size="sm" color="warning" onClick={toggle}>
          Add
        </Button>
      </div>
      <CustomTable
        title={"Product"}
        header={header}
        tableBody={products?.map((row, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{row.title}</td>
            {/* <td>{row.price}</td>
            <td>{row.description}</td> */}
            <td>{row.category}</td>
            {/* <td>
              <img src={row.image} style={{ width: "50px", height: "50px" }} />
            </td> */}
            <td>
              <div className="d-flex gap-3">
                <Button size="sm" color="warning" onClick={() => setOpen(true)}>
                  Edit
                </Button>
                <Button
                  size="sm"
                  color="danger"
                  onClick={() => handleDelete(row.id)}
                >
                  Delete
                </Button>
              </div>
            </td>
          </tr>
        ))}
      />
      <NewProductForm isModalOpen={isModalOpen} toggle={toggle} />
    </>
  );
}
