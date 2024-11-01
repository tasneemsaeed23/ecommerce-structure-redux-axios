import { Container, Row, Col } from "react-bootstrap";
import AdminSideBar from "../../Component/Admin/AdminSideBar";
import AdminEditProducts from "../../Component/Admin/AdminEditProducts";
const AdminEditProductPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>

        <Col sm="9" xs="10" md="10">
          <AdminEditProducts />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminEditProductPage;
