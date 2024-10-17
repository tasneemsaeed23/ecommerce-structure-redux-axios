import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "./../../redux/actions/categoryAction";
import notify from "./../../hook/useNotifaction";
import { ToastContainer } from "react-toastify";
import { creatSubCategory } from "../../redux/actions/subcategoryAction";
const AdminAddSubCategory = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const [id, setId] = useState("0");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  const category = useSelector((state) => state.allCategory.category);

  if (category) console.log(category.data);

  //on save data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (id === "0") {
      notify("من فضلك اختر تصنيف رئيسي", "warn");
      return;
    }

    if (name === "") {
      notify("من فضلك ادخل اسم التصنيف ", "warn");
      return;
    }

    setLoading(true);
    await dispatch(creatSubCategory({ name, category: id }));
    setLoading(false);
  };

  //on change dropdown menu
  const handlechange = (e) => {
    console.log(e.target.value);
    setId(e.target.value);
  };

  useEffect(() => {
    if (loading === false) {
      setName("");
      setId("0");
    }
  }, [loading]);
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
        <Col sm="8">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف الفرعي"
          />
          <select
            name="category"
            id="cat"
            className="select mt-3 px-2 "
            onChange={handlechange}
          >
            <option value="0"> اختر تصنيف رئيسي</option>
            {category.data
              ? category.data.map((item, index) => (
                  <option key={index} value={item._id}>
                    {item.label}
                  </option>
                ))
              : null}
          </select>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminAddSubCategory;
