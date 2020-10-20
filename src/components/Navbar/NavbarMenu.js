import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { UserContext } from "../../context/UserContext";
import { Logo } from "../../assets/images";
import "./NavbarMenu.css";

function NavbarMenu() {
  const [state, dispatch] = useContext(UserContext);

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <div>
      <Navbar bg="black" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" variant="light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/profile">
              <p className="white">Profile</p>
            </Nav.Link>
            <Nav.Link href="/my-collection" className="white">
              <p className="white">My Collection</p>
            </Nav.Link>
            <Nav.Link href="/add-literature" className="white">
              <p className="white">Add Literature</p>
            </Nav.Link>
            <Nav.Link onClick={() => handleLogout()} className="white">
              <p className="white">Logout</p>
            </Nav.Link>
          </Nav>
          <Navbar.Brand href="/home" className="white">
            <img src={Logo} />
          </Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarMenu;
