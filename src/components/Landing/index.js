import React from "react";
import { Row, Col } from "react-materialize";

const LandingPage = () => (
  <Row className="container">
    <Col s={12} className="frame-col-wrapper">
      <h1>Landing</h1>
      <p>
        The Landing Page is open to everyone, even though the user isn't signed
        in.
      </p>
    </Col>
  </Row>
);
export default LandingPage;
