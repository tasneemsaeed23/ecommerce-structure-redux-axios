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
  const itemCount = items.length || 0; // Ensure items.length is available

  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult
          onClick={getProduct}
          title={`هناك ${itemCount} نتيجة بحث`}
        />
        <Row className="d-flex flex-row">
          <Col sm="12" xs="12" md="3" className="d-flex">
            {" "}
            {/* Updated for better responsiveness */}
            <SideFilter />
          </Col>
          <Col sm="12" xs="12" md="9">
            {" "}
            {/* Adjusted for responsive design */}
            <CardProductsContainer products={items} title="" btntitle="" />
          </Col>
        </Row>
        {pageCount > 1 && (
          <Pagination pageCount={pageCount} onPress={onPress} />
        )}{" "}
        {/* Added check for pagination */}
      </Container>
    </div>
  );
};

export default ShopProductsPage;
