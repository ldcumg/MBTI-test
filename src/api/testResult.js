import axios from "axios";

const api = axios.create({
  baseURL: "https://apple-deserted-adjustment.glitch.me",
});

export const getTestResults = async () => {
  const { data } = await api.get(`/testResults`);
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

export const updateTestResultNickname = async (resultId, nickname) => {
  await api.patch(`/testResults/${resultId}`, { nickname });
};
