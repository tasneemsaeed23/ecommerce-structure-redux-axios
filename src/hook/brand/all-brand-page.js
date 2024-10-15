import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllBrand, getAllBrandPage } from "../../redux/actions/brandAction";

const AllBrandHook = () => {
  const dispatch = useDispatch();

  // Fetch Brand when the component mounts (initial load)
  useEffect(() => {
    dispatch(getAllBrand(6)); // Get the brand for the first page (3 categories per page, for example)
  }, [dispatch]);

  // Retrieve the Brand data and loading state from the Redux store
  const brand = useSelector((state) => state.allBrand.brand);
  const loading = useSelector((state) => state.allBrand.loading);

  let pageCount = 0;
  // Check if paginationResult exists before accessing numberOfPages
  if (brand.paginationResult) pageCount = brand.paginationResult.numberOfPages;

  // When press pagination
  const getPage = (page) => {
    dispatch(getAllBrandPage(page));
  };

  return [loading, brand, pageCount, getPage];
};

export default AllBrandHook;
