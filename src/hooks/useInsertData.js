import baseURL from "../API/baseURL";

const useInsertDataWithImage = async (url, parmas) => {
  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };
  const res = await baseURL.post(url, parmas, config);
  console.log(res.status);
  return res;
};

const useInsertData = async (url, parmas) => {
  const res = await baseURL.post(url, parmas);
  return res;
};

export { useInsertData, useInsertDataWithImage };
