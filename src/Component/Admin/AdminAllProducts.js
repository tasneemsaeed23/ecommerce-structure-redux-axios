import React from "react";
import AdminAllProductCard from "./AdminAllProductCard";
import { Row } from "react-bootstrap";

const AdminAllProducts = ({ products }) => {
  return (
    <div>
      <div className="admin-content-text">ادارة جميع المنتجات</div>
      <Row className="justify-content-center">
        {products ? (
          products.map((item, index) => (
            <AdminAllProductCard key={index} item={item} />
          ))
        ) : (
          <h4>لا يوجد منتجات حتى الان </h4>
        )}
      </Row>
    </div>
  );
};

export default AdminAllProducts;
