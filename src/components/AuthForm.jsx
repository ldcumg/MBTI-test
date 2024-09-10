import { useState } from "react";

const AuthForm = ({ mode, onSubmit }) => {
  // inputs state 객체 생성
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  // inputs 제어 함수
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-[800px]">
      <input
        className="h-[50px] rounded-md"
        type="text"
        name="id"
        value={formData.id}
        onChange={handleChange}
        placeholder="아이디"
        required
      />
      <input
        className="h-[50px] rounded-md"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="비밀번호"
        required
      />
      {mode === "signup" && (
        <input
        className="h-[50px] p-4 border border-gray-300 rounded-md"
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          placeholder="닉네임"
          required
        />
      )}
      <button className="bg-gray-500 rounded-md h-[50px]">
        {mode === "login" ? "로그인" : "회원가입"}
      </button>
    </form>
  );
};

export default AuthForm;
