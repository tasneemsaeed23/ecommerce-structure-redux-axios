import { GET_ALL_BRAND, GET_ERROR, CREATE_BRAND } from "../type";

const inital = {
  brand: [],
  loading: true,
};

const BrandReducer = (state = inital, action) => {
  switch (action.type) {
    case GET_ALL_BRAND:
      return {
        ...state,
        brand: action.payload,
        loading: false,
      };
    case CREATE_BRAND:
      return {
        brand: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: false,
        brand: action.payload,
      };
    default:
      return state;
  }
};

export default BrandReducer;