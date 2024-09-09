import axios from "axios";

const api = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
});

export const register = async (userData) => {
  return await api.post("/register", userData);
};

export const login = async (userData) => {
  return await api.post("/login", userData);
};

export const getUserProfile = async (token) => {
  return await api.get("/user", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateProfile = async (formData, token) => {
  return await api.patch("/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
};
