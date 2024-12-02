import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryHeader from "../../Component/Category/CategoryHeader";
import CardProductsContainer from "../../Component/Products/CardProductContainer";
import Pagination from "../../Component/Uitlity/Pagination";
import SearchCountResult from "../../Component/Uitlity/SearchCountResult";
import SideFilter from "../../Component/Uitlity/SideFilter";
import ViewSearchProductsHook from "./../../hook/products/view-search-products-hook";

const ShopProductsPage = () => {
  const [items, pagination, onPress, results, getProduct] =
    ViewSearchProductsHook();

  const pageCount = pagination || 0;

  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult
          onClick={getProduct}
          title={`هناك ${items.length} نتيجة بحث`}
        />
        <Row className="d-flex flex-row">
          <Col sm="2" xs="2" md="1" className="d-flex">
            <SideFilter />
          </Col>
          <Col sm="10" xs="10" md="11">
            <CardProductsContainer products={items} title="" btntitle="" />
          </Col>
        </Row>
        <Pagination pageCount={pageCount} onPress={onPress} />
      </Container>
    </div>
  );
};

export default ShopProductsPage;
