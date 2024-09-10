import AuthForm from "../components/AuthForm";
import { login } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../zustand/authStore";

const LogIn = () => {
  const navigate = useNavigate();
  const { saveUserInfo } = useAuthStore((state) => state);

  // 로그인이 성공하면 유저정보를 zustand에 저장하고 accessToken을 로컬스토리지에 저장
  const handleLogin = async (formData) => {
    try {
      const { data } = await login(formData);
      if (data.success) {
        saveUserInfo(data);
        localStorage.setItem("accessToken", data.accessToken);
        alert(`${data.nickname}님 환영합니다.`);
        navigate("/");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1>로그인</h1>
      <AuthForm mode="login" onSubmit={handleLogin} />
      <div className="flex gap-16 mt-9">
        <p>계정이 없으신가요?</p> <Link to="/signup">회원가입</Link>
      </div>
    </div>
  );
};

export default LogIn;
