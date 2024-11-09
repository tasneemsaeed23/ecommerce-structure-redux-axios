import baseUrl from "../API/baseURL";

const useUpdateDataWithImage = async (url, parmas) => {
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };
  const res = await baseUrl.put(url, parmas, config);
  console.log(res.status);
  return res;
};

const useUpdateData = async (url, parmas) => {
  const res = await baseUrl.put(url, parmas);
  return res;
};

export { useUpdateData, useUpdateDataWithImage };
