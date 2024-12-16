import React from "react";
import CategoryHeader from "./../../Component/Category/CategoryHeader";
import { Container } from "react-bootstrap";
import ProductDetails from "../../Component/Products/ProductDetails";
import RateContainer from "../../Component/Rate/RateContainer";
import CardProductContainer from "./../../Component/Products/CardProductContainer";
import ViewProductsDetalisHook from "../../hook/products/view-products-detalis-hook";
import { useParams } from "react-router-dom";

const ProductDetalisPage = () => {
  const { id } = useParams();
  const [item, images, cat, brand, prod] = ViewProductsDetalisHook(id);
  if (prod) var items = prod.slice(0, 4);

  if (item) {
    var rateAvg = item.ratingsAverage;
    var rateQty = item.ratingsQuantity;
  }

  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <ProductDetails />
        <RateContainer rateAvg={rateAvg} rateQty={rateQty} />
        <CardProductContainer products={items} title="منتجات قد تعجبك" />
      </Container>
    </div>
  );
};

export default ProductDetalisPage;
