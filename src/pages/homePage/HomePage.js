import React from "react";
import { Row, Col } from "react-bootstrap";
import { Logo } from "../../assets/images";
import NavbarMenu from "../../components/Navbar/NavbarMenu";
import SearchForm from "../../components/SearchForm/SearchForm";
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
        <SearchForm />
      </div>
    </div>
  );
}

export default HomePage;
