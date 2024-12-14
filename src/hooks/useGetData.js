import baseURL from "../API/baseURL";

const useGetData = async (url, parmas) => {
  const res = await baseURL.get(url, parmas);
  return res.data;
};

const useGetDataToken = async (url, parmas) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };

  const res = await baseURL.get(url, config);
  return res.data;
};

export { useGetData, useGetDataToken };
