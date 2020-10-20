import React, { useState } from "react";
import { Row, Col, Form, FormControl, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function SearchForm() {
  const [key, setKey] = useState();
  let history = useHistory();

  //   const handleChange = (e) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   };

  const submitKey = (e) => {
    e.preventDefault();
    console.log(key);

    history.push(`/literature?title=${key}`);
  };
  return (
    <Row>
      <Col md={12}>
        <Form onSubmit={(e) => submitKey(e)} inline>
          <FormControl
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Search for literature"
            className="mr-sm-2"
            style={{ width: 400 }}
          />
          <Button
            type="submit"
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
      </Col>
    </Row>
  );
}

export default SearchForm;
