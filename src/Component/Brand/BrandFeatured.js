import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SubTiltle from "../Uitlity/SubTiltle";
import BrandCard from "./BrandCard";
import HomeBrandHook from "../../hook/brand/home-brand-hook";

const BrandFeatured = ({ title, btntitle }) => {
  const [loading, brand] = HomeBrandHook();
  return (
    <Container>
      {brand.data.length > 0 ? (
        <div>
          <SubTiltle title={title} btntitle={btntitle} pathText="/allbrand" />
          <Row className="my-1 d-flex justify-content-between">
            {loading === false ? (
              brand.data ? (
                brand.data.slice(0, 4).map((item, index) => {
                  return <BrandCard key={index} img={item.image} />;
                })
              ) : (
                <h4>لا يوجد ماركات</h4>
              )
            ) : (
              <Spinner animation="border" variant="warning" />
            )}
          </Row>
        </div>
      ) : null}
    </Container>
  );
};

export default BrandFeatured;
