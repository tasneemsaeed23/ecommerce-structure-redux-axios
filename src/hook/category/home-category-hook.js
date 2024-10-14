import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCategory } from "../../redux/actions/categoryAction";

const HomeCategoryHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  //get last category state from redux
  const category = useSelector((state) => state.allCategory.category);
  //get last loading state from redux
  const loading = useSelector((state) => state.allCategory.loading);
  const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#0034FF", "#FFD3E8"];
  console.log(category);
  console.log(loading);

  return [loading, category, colors];
};

export default HomeCategoryHook;
