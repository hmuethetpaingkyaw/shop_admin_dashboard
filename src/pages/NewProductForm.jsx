import { useForm, Controller} from "react-hook-form";
import Select from "react-select";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Form,
} from "reactstrap";
import { apiCall } from "../service/apiService";
import { useDispatch, useSelector } from "react-redux";


export default function NewProductForm({ isModalOpen, toggle }) {
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
   await apiCall('products', 'post', {...data, categoryId: data.categoryId.value})
   toggle();
  };
 const {categories} = useSelector((state)=> state.category)

  const categoryOptions = categories?.map((category)=> {
    return {value: category.id, label: category.name}
  });

  return (
    <Modal isOpen={isModalOpen} toggle={toggle}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <FormGroup className="d-flex flex-column">
            <Label>Product Title</Label>
            <input
              type="text"
              placeholder="name"
              className="form-control"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="text-danger">Title is required</span>
            )}
          </FormGroup>
          <FormGroup className="d-flex flex-column">
            <Label>Category</Label>
            <Controller
              control={control}
              name="categoryId"
              render={({ field }) => (
                <Select
                  {...field}
                  isClearable={true}
                  options={categoryOptions}
                />
              )}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit">
            Save
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
}
