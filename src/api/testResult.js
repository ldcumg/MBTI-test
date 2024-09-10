import axios from "axios";

// json server instance 생성
const api = axios.create({
  baseURL: "https://apple-deserted-adjustment.glitch.me",
});

// json server 테스트 결과들 불러오기
export const getTestResults = async () => {
  const { data } = await api.get(`/testResults`);
  return data;
};

// json server 테스트 결과 추가하기
export const createTestResult = async (resultData) => {
  await api.post("/testResults", resultData);
};

// json server 테스트 결과 삭제하기
export const deleteTestResult = async (id) => {
  await api.delete(`/testResults/${id}`);
};

// json server 테스트 공개/비공개 토글
export const updateTestResultVisibility = async (result) => {
  const visibility = !result.visibility;
  await api.patch(`/testResults/${result.id}`, { visibility });
};

// json server 테스트 결과 닉네임 변경하기
export const updateTestResultNickname = async (resultId, nickname) => {
  await api.patch(`/testResults/${resultId}`, { nickname });
};
