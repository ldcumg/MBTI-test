import axios from "axios";

const api = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
});

export const register = async (userData) => {
  const { data } = await api.post("/register", userData);
  console.log("data", data);
  return data;
};

export const login = async (userData) => {
  const { data } = await api.post("/login", userData);
  localStorage.setItem("accessToken", data.accessToken);
  return data;
};

export const getUserProfile = async (token) => {
  const { data } = await api.get("/user", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const updateProfile = async (formData, token) => {
  const { data } = await api.patch("/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
