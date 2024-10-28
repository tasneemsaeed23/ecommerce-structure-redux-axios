import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/actions/productsAction";

const ViewHomeProductsHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
};

export default ViewHomeProductsHook;
