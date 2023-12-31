import React, { useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import CustomModal from "../components/Modal";
import CustomNavBar from "../components/Navbar";
import CustomTable from "../components/Table/Table";
import { store } from "../store";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [open, setOpen] = useState(false);
  const { products } = useSelector((state) => state.product);

  console.log(products);
  
  return (
    <Row className="mt-5">
      <Col md={4}>
        <Card color="warning text-white mb-3">
          <CardBody className="d-flex gap-3">
            <div className="d-flex justify-content-center align-items-center">
              <h3>
                <i className="fa-solid fa-users"></i>
              </h3>
            </div>
            <div className="d-flex justify-content-center flex-column">
              <h5>Total Customers</h5>
              <h3>10000</h3>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col md={4}>
        <Card color="success text-white mb-3">
          <CardBody className="d-flex gap-3 ">
            <div className="d-flex justify-content-center align-items-center">
              <h3>
                <i className="fa-solid fa-sliders"></i>
              </h3>
            </div>
            <div className="d-flex justify-content-center flex-column">
              <h5>Total Orders</h5>
              <h3>10000</h3>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col md={4}>
        <Card color="danger text-white mb-3">
          <CardBody className="d-flex gap-3">
            <div className="d-flex justify-content-center align-items-center">
              <h3>
                <i className="fa-solid fa-folder"></i>
              </h3>
            </div>
            <div className="d-flex justify-content-center flex-column">
              <h5>Total Products</h5>
              <h3>10000</h3>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Home;

