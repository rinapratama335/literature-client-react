import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import { API, seAuthToken } from "../../apiConfig/api";
import { UserContext } from "../../context/UserContext";

function SignUp({ show, onHide }) {
  const [state, dispatch] = useContext(UserContext);

  let history = useHistory();
  const [formData, setFormData] = useState({});

  const { email, password, fullName, gender, phone, address } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRgSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      email,
      password,
      fullName,
      phone,
      gender,
      address,
    });

    try {
      const res = await API.post("/register", body, config); //data yang kita kirim adalah bentuk JSOM yang sudah kita stringify

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data.data.user,
      });

      console.log("Isi res nih : ", res);

      seAuthToken(res.data.data.user.token);

      try {
        const res = await API.get("/auth");

        dispatch({
          type: "USER_LOADED",
          payload: res.data.data.user,
        });

        setFormData("");

        history.push("/home");
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
          <Modal.Title className="modal-title">Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleRgSubmit(e)}>
            <Form.Group>
              <Form.Control
                type="email"
                name="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="fullName"
                value={fullName}
                placeholder="Full Name"
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                as="select"
                name="gender"
                value={gender}
                onChange={(e) => handleChange(e)}
              >
                <option>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Phone"
                name="phone"
                value={phone}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Address"
                name="address"
                value={address}
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
          <p>Already have an account ? Klik Here</p>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignUp;
