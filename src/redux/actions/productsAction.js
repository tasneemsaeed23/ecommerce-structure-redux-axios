import useGetData from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
import {
  CREATE_PRODUCTS,
  GET_ERROR,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETALIS,
} from "../type";

//create Product with pagination
export const createProduct = (formatData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(
      `/api/v1/products`,
      formatData
    );
    dispatch({
      type: CREATE_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: `Error: ${e.message}`,
    });
  }
};

//get all products with pagination
export const getAllProducts = (limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?limit=${limit}`);
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

//get one product with id
export const getOneProduct = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products/${id}`);
    dispatch({
      type: GET_PRODUCT_DETALIS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

//get all products with pagination with pages number
export const getAllProductsPage = (page, limit) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/products?page=${page}&limit=${limit}`
    );
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
