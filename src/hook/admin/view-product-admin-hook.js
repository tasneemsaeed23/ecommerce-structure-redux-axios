import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllProductsPage } from "../../redux/actions/productsAction";

const viewProductAdminHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const onPress = async (page) => {
    await dispatch(getAllProductsPage(page, 10));
  };

  const allProducts = useSelector((state) => state.allproducts.allProducts);

  let items = [];
  if (allProducts.data) items = allProducts.data;
  else items = [];

  let pagination = [];
  if (allProducts.paginationResult)
    pagination = allProducts.paginationResult;        ;
  else 
  pagination = [];

  return [items, pagination, onPress];
};

export default viewProductAdminHook;
