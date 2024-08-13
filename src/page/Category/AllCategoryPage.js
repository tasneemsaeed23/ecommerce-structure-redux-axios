import React, { useEffect } from "react";
import CategoryContainer from "./../../Component/Category/CategoryContainer";
import Pagination from "./../../Component/Uitlity/Pagination";
import { useSelector, useDispatch } from "react-redux";
import getAllCategory from "../../redux/actions/categoryAction";

const AllCategoryPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  const data = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);

  console.log(data); // تحقق من البيانات هنا
  console.log(loading); // تحقق من حالة التحميل هنا

  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer />
      <Pagination />
    </div>
  );
};

export default AllCategoryPage;
