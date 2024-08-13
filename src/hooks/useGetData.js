import baseURL from "../API/baseURL";

const useGetData = async (url, parmas) => {
  const res = await baseURL.get(url, parmas);
  return res.data;
};

export default useGetData;
