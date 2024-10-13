import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CategoryContainer from "./../../Component/Category/CategoryContainer";
import Pagination from "./../../Component/Uitlity/Pagination";
import {
  getAllCategory,
  getAllCategoryPage,
} from "../../redux/actions/categoryAction";

const AllCategoryPage = () => {
  const dispatch = useDispatch();

  // Fetch categories when the component mounts (initial load)
  useEffect(() => {
    dispatch(getAllCategory(6)); // Get the categories for the first page (3 categories per page, for example)
  }, [dispatch]);

  // Retrieve the category data and loading state from the Redux store
  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);

  let pageCount = 0;
  // Check if paginationResult exists before accessing numberOfPages
  pageCount = category?.paginationResult?.numberOfPages || 0;

  // When press pagination
  const getPage = (page) => {
    dispatch(getAllCategoryPage(page));
  };

  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer
        data={category ? category.data : []}
        loading={loading}
      />
      {pageCount > 0 && <Pagination pageCount={pageCount} onPress={getPage} />}
    </div>
  );
};

export default AllCategoryPage;
