import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
});

// api.interceptors.request((config)=>{return config},()=>{})// 성공, 실패
// api.interceptors.response((response)=>{return response},(error)=>{return Promise.reject(error)})

export const getTestResults = async () => {
  const { data } = await api.get("/testResults");
  return data;
};

export const createTestResult = async (resultData) => {
  await api.post("/testResults", resultData);
};

export const deleteTestResult = async (id) => {
  await api.delete(`/testResults/${id}`);
};

export const updateTestResultVisibility = async (result) => {
  const visibility = !result.visibility;
  await api.patch(`/testResults/${result.id}`, { visibility });
};
