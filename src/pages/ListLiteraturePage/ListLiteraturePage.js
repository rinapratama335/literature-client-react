import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { BlockLoading } from "react-loadingg";
import { API } from "../../apiConfig/api";
import SearchForm from "../../components/SearchForm/SearchForm";

function ListLiteraturePage() {
  const [state, dispatch] = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [listingLiteratures, setListingLiteratures] = useState([]);

  const prefix_url = "http://localhost:5000/file/";

  const search = useLocation().search;
  const title = new URLSearchParams(search).get("title");
  useEffect(() => {
    const listingLiteratures = async () => {
      try {
        setLoading(true);
        const res = await API.get("/literature?title=" + title);
        setListingLiteratures(res.data.data.literature);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    listingLiteratures();
  }, []);

  console.log("List Data : ", listingLiteratures);
  console.log("Key data: ", title);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <SearchForm />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Col md={2} sm={12}>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Filter By Year
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="&year=2015">2015</Dropdown.Item>
                  <Dropdown.Item href="&year=2016">2016</Dropdown.Item>
                  <Dropdown.Item href="&year=2017">2017</Dropdown.Item>
                  <Dropdown.Item href="&year=2018">2018</Dropdown.Item>
                  <Dropdown.Item href="&year=2019">2019</Dropdown.Item>
                  <Dropdown.Item href="&year=2020">2020</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col md={10} sm={12}>
              <Row>
                {loading || !listingLiteratures ? (
                  <BlockLoading />
                ) : (
                  listingLiteratures.map((item) => (
                    <Col md={3}>
                      <div key={item.id}>
                        <img
                          src={`${prefix_url}${item.cover}`}
                          alt="cover"
                          style={{ height: 270, width: 200 }}
                        />
                        <h1>{item.title}</h1>
                      </div>
                    </Col>
                  ))
                )}
              </Row>
            </Col>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ListLiteraturePage;
