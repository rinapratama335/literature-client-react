import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import { UserContext } from "../../context/UserContext";
import { API, seAuthToken } from "../../apiConfig/api";
import "./Modal.css";

function SignIn({ show, onHide }) {
  const [state, dispatch] = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "irwantoadmin@yahoo.com",
    password: "irwantoadmin",
  });
  let history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { email, password } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password });
    try {
      const res = await API.post("/login", body, config);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data.data.user,
      });

      console.log("Data respon user : ", res);

      seAuthToken(res.data.data.user.token);

      try {
        const res = await API.get("/auth");

        dispatch({
          type: "USER_LOADED",
          payload: res.data.data.user,
        });

        console.log("Role USER : ", res.data.data.user);

        res.data.data.user.role === "admin"
          ? history.push("/admin")
          : history.push("/home");
      } catch (err) {
        dispatch({
          type: "AUTH_ERROR",
        });
      }
    } catch (err) {
      dispatch({
        type: "LOGIN_FAIL",
      });
    }
  };

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={(e) => handleChange(e)}
              />
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
          <p>Don't have an account ? Click here</p>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignIn;
