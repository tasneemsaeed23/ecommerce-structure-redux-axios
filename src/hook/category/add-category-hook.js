import { useEffect, useState } from "react";
import avatar from "../../images/avatar.png";
import notify from "../../hook/useNotifaction";
import { useSelector, useDispatch } from "react-redux";
import { creatCategory } from "../../redux/actions/categoryAction";
import "react-toastify/dist/ReactToastify.css";

const AddCategoryHook = () => {
  const dispatch = useDispatch();
  const [img, setImg] = useState(avatar);
  const [Name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIspress] = useState(true);

  //to change name state
  const onchangeName = (e) => {
    e.persist();
    setName(e.target.value);
  };

  // Update image with selected file
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  const res = useSelector((state) => state.allCategory.category);

  // Save data in the database
  const handelSubmit = async (event) => {
    event.preventDefault();

    // Check if fields are empty
    if (Name === "" || !selectedFile) {
      notify("يرجى ملء جميع الحقول", "warn");
      return;
    }

    const formData = new FormData();
    formData.append("name", Name);
    formData.append("image", selectedFile);

    setLoading(true);
    setIspress(true);
    await dispatch(creatCategory(formData));

    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setImg(avatar);
      setName("");
      setSelectedFile("");
      setLoading(false);
      setTimeout(() => setIspress(false), 3000);
      if (res.status === 201) {
        notify("تم إضافة التصنيف بنجاح", "success");
      } else {
        notify("هناك مشكلة في عملية الاضافة", "error");
      }
    }
  }, [loading, res]);

  return [
    img,
    Name,
    loading,
    isPress,
    onImageChange,
    handelSubmit,
    onchangeName,
  ];
};

export default AddCategoryHook;
