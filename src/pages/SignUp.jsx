import AuthForm from "../components/AuthForm";
import { register } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  // 회원가입 함수
  const handleSignUp = (formData) => {
    try {
      const { data } = register(formData);
      if (data.success) {
        alert(data.message);
        navigate("/login");
        return;
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1>회원가입</h1>
      <AuthForm mode="signup" onSubmit={handleSignUp} />
      <div>
        <p className="flex gap-16 mt-9">
          이미 계정이 있으신가요? <Link to="/login">로그인</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
