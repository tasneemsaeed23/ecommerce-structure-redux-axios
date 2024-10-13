import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import avatar from "../../images/avatar.png";
import { creatCategory } from "../../redux/actions/categoryAction";
import { useSelector, useDispatch } from "react-redux";

const AdminAddCategory = () => {
  const dispatch = useDispatch();
  const [img, setImg] = useState(avatar);
  const [Name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  // Update image with selected file
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  //save data in database
  const handelSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", Name);
    formData.append("image", selectedFile);
    dispatch(creatCategory(formData));
  };
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
            onChange={(e) => setName(e.target.value)}
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
    </div>
  );
};

export default AdminAddCategory;
