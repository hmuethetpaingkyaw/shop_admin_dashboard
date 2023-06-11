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
import { useForm } from "react-hook-form";
import { ThemeContext } from "../contexts/ThemeContext";
import {useContext} from 'react'

export default function Login() {
  const context = useContext(ThemeContext)
  console.log(context);







  
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(()=> {
    // setValue('email', 'Hello@gmail.com')
    // setValue('password', 'hello')
  },[])

  //const emailWatch = watch('email')

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

              <FormGroup >
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
