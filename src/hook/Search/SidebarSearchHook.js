import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { getAllBrand } from "./../../redux/actions/brandAction";
import ViewSearchProductsHook from "../products/view-search-products-hook";

const SidebarSearchHook = () => {
  const [items, pagination, onPress, results, getProduct] =
    ViewSearchProductsHook();
  const dispatch = useDispatch();

  // Fetch categories and brands when the component mounts (initial load)
  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCategory());
      await dispatch(getAllBrand());
    };
    get();
  }, [dispatch]);

  // Retrieve the category and brand data from the Redux store
  const allcat = useSelector((state) => state.allCategory.category);
  const allBrand = useSelector((state) => state.allBrand.brand);

  let category = [];
  if (allcat.data) category = allcat.data;

  let brand = [];
  if (allBrand.data) brand = allBrand.data;

  const [catChecked, setCatChecked] = useState([]);
  const [brandChecked, setBrandChecked] = useState([]);

  // Update the query and trigger product search when categories change
  useEffect(() => {
    const queryCat = catChecked.map((val) => "category[in][]=" + val).join("&");
    localStorage.setItem("catChecked", queryCat);
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [catChecked, getProduct]);

  // Update the query and trigger product search when brands change
  useEffect(() => {
    const queryBrand = brandChecked
      .map((val) => "brand[in][]=" + val)
      .join("&");
    localStorage.setItem("brandChecked", queryBrand);
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [brandChecked, getProduct]);

  // Handle category click events
  const clickCategory = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setCatChecked([]); // Deselect all categories
    } else {
      if (e.target.checked) {
        setCatChecked((prev) => [...prev, value]); // Add to selected categories
      } else {
        setCatChecked((prev) => prev.filter((item) => item !== value)); // Remove from selected categories
      }
    }
  };

  // Handle brand click events
  const clickBrand = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setBrandChecked([]); // Deselect all brands
    } else {
      if (e.target.checked) {
        setBrandChecked((prev) => [...prev, value]); // Add to selected brands
      } else {
        setBrandChecked((prev) => prev.filter((item) => item !== value)); // Remove from selected brands
      }
    }
  };

  const [From, setPriceFrom] = useState(0);
  const [To, setPriceTo] = useState(0);

  const priceFrom = (e) => {
    localStorage.setItem("priceFrom", e.target.value);
    setPriceFrom(e.target.value);
  };

  const priceTo = (e) => {
    localStorage.setItem("priceTo", e.target.value);
    setPriceTo(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [From, To]);
  return [category, brand, clickCategory, clickBrand, priceFrom, priceTo];
};

export default SidebarSearchHook;
