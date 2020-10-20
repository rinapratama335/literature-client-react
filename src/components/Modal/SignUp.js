import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

function SignUp({ show, onHide }) {
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="Full Name" />
            </Form.Group>
            <Form.Group>
              <Form.Control as="select">
                <option>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="Phone" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="Address" />
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
            Already have an account ? Klik <a>Here</a>
          </p>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignUp;
