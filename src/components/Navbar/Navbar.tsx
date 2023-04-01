/** @format */
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";

const Nav = () => {
  return (
    <Navbar bg="warning" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="justify-content-start">
          <FontAwesomeIcon
            icon={faBowlFood}
            className="px-3"
            justify-content-end
          />
          <span className="me-2">Eat me!</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Nav;
