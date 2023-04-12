import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
import { Container, Row } from "reactstrap";
const MainDash = () => {
  return (
      <Row>
        <Table />
      </Row>
  );
};

export default MainDash;
