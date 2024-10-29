import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../../redux/actions/productsAction";
import mobile from "../../images/mobile.png";

const ViewProductsDetalisHook = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneProduct(id));
  }, []);

  const oneProducts = useSelector((state) => state.allproducts.oneProduct);

  let item = [];
  if (oneProducts.data) item = oneProducts.data;
  else item = [];

  //to view images gallery
  let images = [];
  if (item.images)
    images = item.images.map((img) => {
      return {
        original: `${img}`,
      };
    });
  else {
    images = [
      {
        original: `${mobile}`,
      },
    ];
  }

  return [item, images];
};

export default ViewProductsDetalisHook;
