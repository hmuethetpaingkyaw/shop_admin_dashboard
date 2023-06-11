import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import { Col, Row } from "reactstrap";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext, useState } from "react";
import CustomNavBar from "../components/Navbar";
import { ThemeContextProvider } from "../contexts/ThemeContext";

export default function AdminLayout() {
 
  return (
    <ThemeContextProvider>
      <Layout>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={8}>
          <Row>
            <CustomNavBar />
            <Outlet />
          </Row>
        </Col>
      </Layout>
    </ThemeContextProvider>
  );
}

function Layout({children}) {
   const { theme } = useContext(ThemeContext);

  return (
    <Row
      className="d-flex justify-content-around"
      style={{
        backgroundColor: theme === "light" ? "white" : "#20124d",
      }}
    >
      {children}
    </Row>
  );
}
