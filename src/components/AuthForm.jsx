import { useState } from "react";

const AuthForm = ({ mode, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-4/5">
      <input
        type="text"
        name="id"
        value={formData.id}
        onChange={handleChange}
        placeholder="아이디"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="비밀번호"
        required
      />
      {mode === "signup" && (
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          placeholder="닉네임"
          required
          className="w-full p-4 border border-gray-300 rounded-lg"
        />
      )}
      <button className="bg-gray-500 rounded-md">{mode === "login" ? "로그인" : "회원가입"}</button>
    </form>
  );
};

export default AuthForm;
