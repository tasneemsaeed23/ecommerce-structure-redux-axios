import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllBrand } from "../../redux/actions/brandAction";

const HomeBrandHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBrand());
  }, []);

  //get last Brand state from redux
  const brand = useSelector((state) => state.allBrand.Brand);
  //get last loading state from redux
  const loading = useSelector((state) => state.allCategory.loading);
  console.log(brand);
  console.log(loading);

  return [loading, brand];
};

export default HomeBrandHook;
