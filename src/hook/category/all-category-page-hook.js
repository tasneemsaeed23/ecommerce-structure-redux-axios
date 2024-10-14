import {
  getAllCategory,
  getAllCategoryPage,
} from "../../redux/actions/categoryAction";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const AllCategoryHook = () => {
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

  return [category, loading, pageCount, getPage];
};

export default AllCategoryHook;
