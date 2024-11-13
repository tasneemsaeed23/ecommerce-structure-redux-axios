import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsSearch } from "../../redux/actions/productsAction";
import { getAllProductsPage } from "./../../redux/actions/productsAction";

const ViewSearchProductsHook = () => {
  let limit = 6;
  const dispatch = useDispatch();

  const getProduct = async () => {
    await dispatch(getAllProductsSearch(`limit=${limit}`));
  };
  useEffect(() => {}, []);

  const allProducts = useSelector((state) => state.allproducts.allProducts);

  let items = [];
  let pagination = [];
  try {
    if (allProducts.data) items = allProducts.data;
    else items = [];
  } catch (e) {}

  try {
    if (allProducts.paginationResult)
      pagination = allProducts.paginationResult.numberOfPages;
    else pagination = [];
  } catch (e) {}

  const onPress = async (page) => {
    await dispatch(getAllProductsPage(page, limit));
  };

  return [items, pagination, onPress];
};

export default ViewSearchProductsHook;
