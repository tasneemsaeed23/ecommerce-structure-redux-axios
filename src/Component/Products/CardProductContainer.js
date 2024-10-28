import React from "react";
import ProductCard from "./ProductCard";
import SubTiltle from "../Uitlity/SubTiltle";
import { Container, Row } from "react-bootstrap";

const CardProductContainer = ({ title, btntitle, pathText, products }) => {
  return (
    <Container>
      {products ? (
        <SubTiltle title={title} btntitle={btntitle} pathText={pathText} />
      ) : null}

      <Row className="my-2 d-flex justify-content-between">
        {products
          ? products.map((item, index) => (
              <ProductCard key={index} item={item} />
            ))
          : null}
      </Row>
    </Container>
  );
};

export default CardProductContainer;
