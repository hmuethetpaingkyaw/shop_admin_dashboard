import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
import Select from "react-select";
import { login } from "../store/actions";
import { useNavigate } from "react-router";

export default function Login() {
  const context = useContext(ThemeContext);
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    control,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // localStorage.setItem('shop_user', JSON.stringify({...data, role: data.role.value}));
    // navigate('/')
  };

  useEffect(() => {
    // setValue('email', 'Hello@gmail.com')
    // setValue('password', 'hello')
  }, []);

  //const emailWatch = watch('email')

  const options = [
    { value: "Admin", label: "Admin" },
    { value: "Owner", label: "Owner" },
  ];

  return (
    <Row
      style={{
        minHeight: "100vh",
      }}
      className="d-flex align-items-center justify-content-center"
    >
      <Col md={6}>
        <Card>
          <CardHeader
            style={{
              backgroundColor: "#ffaabb",
            }}
          >
            <h5>NextShop Dashboard</h5>
          </CardHeader>
          <CardBody className="p-5">
            <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
                <Label for="exampleEmail">Name</Label>
                <input
                  className="form-control"
                  placeholder="name"
                  type="text"
                  {...register("name", { required: true })}
                />
                {errors.email && (
                  <span className="text-danger">Email is required</span>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <input
                  className="form-control"
                  placeholder="email"
                  type="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-danger">Email is required</span>
                )}
              </FormGroup>
              <FormGroup>
                <Controller
                  name="role"
                  control={control}
                  render={({ field }) => (
                    <Select {...field} options={options} />
                  )}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <input
                  className="form-control"
                  // id="examplePassword"
                  // name="password"
                  placeholder="password"
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-danger">Password is required</span>
                )}
              </FormGroup>

              <FormGroup>
                <input
                  type="checkbox"
                  onChange={() =>
                    setShowPassword((prevShowPassword) => !prevShowPassword)
                  }
                />{" "}
                <Label check>Show Password</Label>
              </FormGroup>
              <Button color="danger" className="mt-3" type="submit">
                Submit
              </Button>
            </form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}
