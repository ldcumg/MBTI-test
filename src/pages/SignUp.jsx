import AuthForm from "../components/AuthForm";
import { register } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignup = (formData) => {
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
    <div>
      <div>
        <h1>회원가입</h1>
        <AuthForm mode="signup" onSubmit={handleSignup} />
        <div>
          <p>
            이미 계정이 있으신가요? <Link to="/login">로그인</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
