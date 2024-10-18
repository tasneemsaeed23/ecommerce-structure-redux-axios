import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "./../../redux/actions/categoryAction";
import notify from "./../../hook/useNotifaction";
import { creatSubCategory } from "../../redux/actions/subcategoryAction";
import { useEffect, useState } from "react";

const useAddSubcategory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!navigator.onLine) {
      notify("هناك مشكلة في الاتصال بالانترنت", "warn");
      return;
    }
    dispatch(getAllCategory());
  }, [dispatch]);

  const [id, setId] = useState("0");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false); // set initial state to false

  const category = useSelector((state) => state.allCategory.category);
  const subcategory = useSelector((state) => state.subCategory.subcategory);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  // Save data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!navigator.onLine) {
      notify("هناك مشكلة في الاتصال بالانترنت", "warn");
      return;
    }

    if (id === "0") {
      notify("من فضلك اختر تصنيف رئيسي", "warn");
      return;
    }

    if (!name.trim()) {
      notify("من فضلك ادخل اسم التصنيف", "warn");
      return;
    }

    setLoading(true);
    await dispatch(creatSubCategory({ name, category: id }));
    setLoading(false);
  };

  // Change dropdown menu
  const handlechange = (e) => {
    setId(e.target.value);
  };

  useEffect(() => {
    if (!loading && subcategory) {
      setName("");
      setId("0");

      if (subcategory.status === 201) {
        notify("تم اضافه التصنيف بنجاح", "success");
      } else if (
        subcategory === "Error Error: Request failed with status code 400"
      ) {
        notify("هذا الاسم مكرر من فضلك اختر اسم اخر", "warn");
      } else {
        notify("هناك مشكلة في عمليه الاضافة", "warn");
      }
    }
  }, [loading, subcategory]);

  return {
    id,
    name,
    loading,
    category,
    handleSubmit,
    handlechange,
    onChangeName,
  };
};

export default useAddSubcategory;
