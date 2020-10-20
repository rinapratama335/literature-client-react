import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./LandingPage.css";
import { Landing, Logo } from "../../assets/images";
import SignIn from "../../components/Modal/SignIn";
import SignUp from "../../components/Modal/SignUp";

function LandingPage() {
  const [signShow, setSigninShow] = useState(false);
  const [signupShow, setSignupShow] = useState(false);

  const handleSiginClose = () => setSigninShow(false);
  const handleSigniShow = () => setSigninShow(true);
  const handleSigupClose = () => setSignupShow(false);
  const handleSignupShow = () => setSignupShow(true);

  return (
    <Container>
      <Row>
        <Col md={6}>
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="txt-landing">
            <h1>source of intelligence</h1>
            <p>
              Sign-up and receive unlimited accesss to all of your literatur -
              share your literature.
            </p>
          </div>
          <div className="btn-landing">
            <button className="btn-signin" onClick={() => handleSigniShow()}>
              Sign In
            </button>
            <button className="btn-signup" onClick={() => handleSignupShow()}>
              Sign Up
            </button>
          </div>
        </Col>
        <Col md={6}>
          <div className="img-landing">
            <img src={Landing} alt="Landing Page" />
          </div>
        </Col>
      </Row>

      {signShow ? (
        <SignIn
          show={signShow}
          onHide={handleSiginClose}
          handleSigninClose={handleSiginClose}
        />
      ) : null}

      {signupShow ? (
        <SignUp
          show={signupShow}
          onHide={handleSigupClose}
          handleSigninClose={handleSigupClose}
        />
      ) : null}
    </Container>
  );
}

export default LandingPage;
