import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/productsAction";

const viewProductAdminHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const allProducts = useSelector((state) => state.allproducts.allProducts);

  let items = [];
  if (allProducts.data) items = allProducts.data;
  else items = [];

  let pagination = [];
  if (allProducts.paginationResult)
    pagination = pagination.paginationResult;        ;
  else 
  pagination = [];

  return [items, pagination];
};

export default viewProductAdminHook;
