import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getAllProductsSearch,
} from "../../redux/actions/productsAction";
import { getAllProductsPage } from "./../../redux/actions/productsAction";

const ViewSearchProductsHook = () => {
  let limit = 6;
  const dispatch = useDispatch();

  const getProduct = async () => {
    let word = "";
    if (localStorage.setItem("searchWord") != null) {
      word = localStorage.getItem("searchWord");
    }
    await dispatch(getAllProductsSearch(`limit=${limit}&keyword=${word}`));
  };

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await dispatch(getAllProducts(limit));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  const allProducts = useSelector((state) => state.allProducts?.allProducts);

  let items = allProducts?.data || [];
  let pagination = allProducts?.paginationResult?.numberOfPages || 0;
  let results = allProducts.results || 0;

  const onPress = async (page) => {
    try {
      await dispatch(getAllProductsPage(page, limit));
    } catch (error) {
      console.error("Error fetching products for page:", error);
    }
  };

  return [items, pagination, onPress, results, getProduct];
};

export default ViewSearchProductsHook;
