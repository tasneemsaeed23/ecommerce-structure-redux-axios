import React from "react";
import { Container } from "react-bootstrap";
import ChoosePayMethod from "../../Component/Checkout/ChoosePayMethod";

const ChoosePayMethoudPage = () => {
  return (
    <Container style={{ minHeight: "670px" }}>
      <ChoosePayMethod />
    </Container>
  );
};

export default ChoosePayMethoudPage;
