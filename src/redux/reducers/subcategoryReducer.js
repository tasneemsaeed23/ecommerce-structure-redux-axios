import { CREATE_SUB_CATEGORY, GET_ERROR } from "../type";

const inital = {
  subcategory: [],
  loading: true,
};

const subcategoryReducer = (state = inital, action) => {
  switch (action.type) {
    case CREATE_SUB_CATEGORY:
      return {
        ...state,
        subcategory: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: false,
        subcategory: action.payload,
      };
    default:
      return state;
  }
};

export default subcategoryReducer;
