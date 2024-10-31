import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminSideBar from "../../Component/Admin/AdminSideBar";
import AdminAllProducts from "../../Component/Admin/AdminAllProducts";
import Pagination from "../../Component/Uitlity/Pagination";
import viewProductAdminHook from "../../hook/admin/view-product-admin-hook";
const AdminAllProductsPage = () => {
  const [items, pagination] = viewProductAdminHook();
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>

        <Col sm="9" xs="10" md="10">
          <AdminAllProducts products={items} />
          <Pagination />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAllProductsPage;
