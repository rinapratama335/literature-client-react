import React, { useEffect, useContext, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import BlockLoading from "react-loadingg";
import { Link, useParams } from "react-router-dom";
import { API } from "../../apiConfig/api";
import { UserContext } from "../../context/UserContext";
import { FaCloudDownloadAlt } from "react-icons/fa";

const DetailLiterature = () => {
  const { id } = useParams();
  const [state, dispatch] = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [detailLiterature, setDetailLiterature] = useState([]);

  const prefix_url = "http://localhost:5000/file/";

  useEffect(() => {
    const detailLiterature = async () => {
      try {
        setLoading(true);
        const res = await API.get(`/literature/${id}`);
        setDetailLiterature(res.data.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };

    detailLiterature();
  }, []);

  console.log("Detail : ", detailLiterature);

  return (
    <Container>
      <Row>
        <Col md={6} sm={12}>
          <img src={`${prefix_url}${detailLiterature.cover}`} />
        </Col>
        <Col md={6} sm={12}>
          <div style={{ paddingLeft: 5, color: "white" }}>
            <h1>{detailLiterature.title}</h1>
            <Button style={{ backgroundColor: "#AF2E1C", border: "none" }}>
              Add My Collection
            </Button>
            <h5>{detailLiterature.user?.fullName}</h5>
            <div>
              <h5>Publication date</h5>
              <p>{detailLiterature.publication_date}</p>
            </div>
            <div>
              <h5>Pages</h5>
              <p>{detailLiterature.pages}</p>
            </div>
            <div>
              <h5 style={{ color: "#AF2E1C" }}>ISBN</h5>
              <p>{detailLiterature.ISBN}</p>
            </div>
            <div>
              <Link
                to={`${prefix_url}${detailLiterature.attache}`}
                style={{ backgroundColor: "#AF2E1C", border: "none" }}
              >
                Download{" "}
                <FaCloudDownloadAlt
                  style={{ paddingBottom: 3, marginLeft: 10 }}
                />
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default DetailLiterature;
