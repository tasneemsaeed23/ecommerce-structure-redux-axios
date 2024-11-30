import { useEffect, useState } from "react";
import ViewSearchProductsHook from "../products/view-search-products-hook";

const NavbarSearchHook = () => {
  const [items, pagination, onPress, getProduct] = ViewSearchProductsHook();
  const [searchWord, setSearchWord] = useState("");

  //when user type search word
  const OnChangeSearch = (e) => {
    localStorage.setItem("searchWord", e.target.value);
    setSearchWord(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [searchWord]);
  return [OnChangeSearch, searchWord];
};

export default NavbarSearchHook;
