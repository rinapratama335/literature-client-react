import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./Modal.css";

function SignIn({ show, onHide }) {
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{
                width: "100%",
                backgroundColor: "#AF2E1C",
                border: "none",
              }}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <p>
            Don't have an account ? Click <a>here</a>
          </p>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignIn;
