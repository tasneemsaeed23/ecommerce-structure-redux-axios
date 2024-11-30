import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/productsAction";

const ViewHomeProductsHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts(2));
  }, [dispatch]);

  const allProducts = useSelector((state) => state.allproducts?.allProducts);
  console.log("All Products:", allProducts);

  let items = [];
  if (allProducts && allProducts.length > 0) {
    items = allProducts.slice(0, 4);
  }

  return [items];
};

export default ViewHomeProductsHook;
