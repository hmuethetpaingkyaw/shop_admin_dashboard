
import React, { useState } from "react";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
} from "reactstrap";
import "./index.css";
import { routes } from "../../routes";
import Logo from "../../assets/imgs/logo.png";
import { ThemeContext } from "../../contexts/ThemeContext";
import {useContext} from 'react'
import { useLocation } from "react-router";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const {theme} = useContext(ThemeContext)
  const router = useLocation();


  return (
    <div className="nav-container">
      <Navbar light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto d-flex flex-column gap-3" navbar>
            <NavbarBrand
              href="/"
              className="d-flex justify-content-center"
            >
              <img src={Logo} width="150" height="150" alt="Logo" />
            </NavbarBrand>
            {routes.map((route, index) => {
              return (
                <NavItem
                  className={
                    router.pathname === route.path ? "menuItem active" : "menuItem"
                  }
                  key={index}
                >
                  <NavLink href={route.path} className={`d-flex gap-3 ${theme === 'light' ? 'routeItem' : 'routeItem-dark'}`}>
                    <i className={route.icon}></i>
                    {route.name}
                  </NavLink>
                </NavItem>
              );
            })}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Sidebar;
