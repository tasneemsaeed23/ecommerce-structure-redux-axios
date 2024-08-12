import React from "react";
import AdminAllProductCard from "./AdminAllProductCard";
import { Row } from "react-bootstrap";

const AdminAllProducts = () => {
  return (
    <div>
      <div className="admin-content-text">ادارة جميع المنتجات</div>
      <Row className="justify-content-center">
        <AdminAllProductCard />
        <AdminAllProductCard />
        <AdminAllProductCard />
        <AdminAllProductCard />
        <AdminAllProductCard />
      </Row>
    </div>
  );
};

export default AdminAllProducts;
