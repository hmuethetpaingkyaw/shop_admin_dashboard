import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
import { Container, Row } from "reactstrap";
const MainDash = () => {
  return (
    <Container className="MainDash mt-5">
      <h1>Dashboard</h1>
      <Row>
        <Cards />
      </Row>
      <Row>
        <Table />
      </Row>
    </Container>
  );
};

export default MainDash;
