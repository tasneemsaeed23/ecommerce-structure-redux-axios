import React from "react";
import CategoryHeader from "./../../Component/Category/CategoryHeader";
import { Container } from "react-bootstrap";
import ProductDetails from "../../Component/Products/ProductDetails";
import RateContainer from "../../Component/Rate/RateContainer";
import CardProductContainer from "./../../Component/Products/CardProductContainer";

const ProductDetalisPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <ProductDetails />
        <RateContainer />
        <CardProductContainer title="منتجات قد تعجبك" />
      </Container>
    </div>
  );
};

export default ProductDetalisPage;
