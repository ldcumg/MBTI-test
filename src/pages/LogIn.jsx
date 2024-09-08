import AuthForm from "../components/AuthForm";
import { login } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../zustand/authStore";

const LogIn = () => {
  const { logIn } = useAuthStore((state) => state);

  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const data = await login(formData);
      if (data.success) {
        logIn(data);
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
      <div className="flex gap-16">
        <p>계정이 없으신가요?</p> <Link to="/signup">회원가입</Link>
      </div>
    </div>
  );
};

export default LogIn;
