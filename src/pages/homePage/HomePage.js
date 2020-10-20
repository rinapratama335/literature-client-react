import React from "react";
import {
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { Logo } from "../../assets/images";
import NavbarMenu from "../../components/Navbar/NavbarMenu";
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <NavbarMenu />
      <div className="center-content">
        <Row>
          <Col md={12}>
            <div>
              <img src={Logo} style={{ height: 120, width: 500 }} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2 "
                />
                <Button
                  className="button-search"
                  style={{
                    backgroundColor: "#AF2E1C",
                    border: "none",
                    paddingTop: 8,
                    paddingBottom: 8,
                  }}
                >
                  <FaSearch />
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default HomePage;
