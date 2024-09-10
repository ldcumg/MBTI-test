import axios from "axios";

// moneyfulpublicpolicy instance 생성
const api = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
});

// moneyfulpublicpolicy 회원가입
export const register = async (userData) => {
  return await api.post("/register", userData);
};

// moneyfulpublicpolicy 로그인
export const login = async (userData) => {
  return await api.post("/login", userData);
};

// moneyfulpublicpolicy 회원정보 조회
export const getUserProfile = async (token) => {
  return await api.get("/user", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

// moneyfulpublicpolicy 닉네임 변경 patch 업데이트
export const updateProfile = async (formData, token) => {
  return await api.patch("/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
};
