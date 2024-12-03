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
    getStorge();
    sortData();
    await dispatch(
      getAllProductsSearch(
        `sort=${sort}limit=${limit}&keyword=${word}&${brandCat}`
      )
    );
  };

  useEffect(() => {
    getProduct();
  }, []);

  const allProducts = useSelector((state) => state.allproducts.allProducts);

  let items = [];
  let pagination = [];
  let results = 0;
  try {
    if (allProducts.data) items = allProducts.data;
    else items = [];
  } catch (e) {}
  try {
    if (allProducts.paginationResult)
      pagination = allProducts.paginationResult.numberOfPages;
    else pagination = [];
  } catch (e) {}
  try {
    if (allProducts.results) results = allProducts.results;
    else results = 0;
  } catch (e) {}

  //when click pagination
  const onPress = async (page) => {
    getStorge();
    sortData();
    await dispatch(
      getAllProductsPage(
        `sort=${sort}limit=${limit}&page=${page}&keyword=${word}&${queryCat}&${brandCat}`
      )
    );
  };

  let word = "",
    queryCat = "",
    brandCat = "";
  const getStorge = () => {
    if (localStorage.getItem("searchWord") != null)
      word = localStorage.getItem("searchWord");
    if (localStorage.setItem("catChecked") != null)
      queryCat = localStorage.getItem("catChecked");
    if (localStorage.setItem("brandChecked") != null)
      brandCat = localStorage.getItem("brandChecked");
  };

  let sortType = "",
    sort;
  //when user choose sort type
  const sortData = () => {
    if (localStorage.getItem("sortType") != null) {
      sortType = localStorage.getItem("sortType");
    } else {
      sortType = "";
    }

    if (sortType === "السعر من الاعلي للاقل") {
      sort = "+price";
    } else if (sortType === "السعر من الاقل للاعلى") {
      sort = "-price";
    } else if (sortType === "") {
      sort = "";
    } else if (sortType === "الاكثر مبيعا") {
      sort = "-sold";
    } else if (sortType === "الاعلي تقييما") {
      sort = "-quantity";
    }
  };

  return [items, pagination, onPress, results, getProduct];
};

export default ViewSearchProductsHook;
