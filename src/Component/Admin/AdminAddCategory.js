import { Col, Row, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddCategoryHook from "../../hook/category/add-category-hook";
const AdminAddCategory = () => {
  const [
    img,
    Name,
    loading,
    isPress,
    onImageChange,
    handelSubmit,
    onchangeName,
  ] = AddCategoryHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
        <Col sm="8">
          <div className="text-form pb-2">صوره التصنيف</div>
          <div>
            <label htmlFor="upload-photo">
              <img
                src={img}
                alt="category"
                height="100px"
                width="120px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              name="photo"
              onChange={onImageChange}
              id="upload-photo"
            />
          </div>
          <input
            onChange={onchangeName}
            value={Name}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      {isPress ? (
        loading ? (
          <Spinner animation="border" variant="warning" />
        ) : (
          <h4>تم الانتهاء</h4>
        )
      ) : null}

      <ToastContainer />
    </div>
  );
};

export default AdminAddCategory;
