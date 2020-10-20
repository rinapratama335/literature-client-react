import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Logo } from "../../assets/images";
import "./NavbarMenu.css";

function NavbarMenu() {
  return (
    <div>
      <Navbar bg="black" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" variant="light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <p className="white">Profile</p>
            </Nav.Link>
            <Nav.Link href="#home" className="white">
              <p className="white">My Collection</p>
            </Nav.Link>
            <Nav.Link href="#home" className="white">
              <p className="white">Add Literature</p>
            </Nav.Link>
            <Nav.Link href="#home" className="white">
              <p className="white">Logout</p>
            </Nav.Link>
          </Nav>
          <Navbar.Brand href="#home" className="white">
            <img src={Logo} />
          </Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarMenu;
