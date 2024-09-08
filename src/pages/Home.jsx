import { Link, useNavigate } from "react-router-dom";
import { getUserProfile } from "../api/auth";
import { useEffect } from "react";
import useAuthStore from "../zustand/authStore";

const Home = () => {
  const navigate = useNavigate();
  const { user, logIn } = useAuthStore((state) => state);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const stayLogIn = async () => {
      const data = await getUserProfile(accessToken).catch((error) => {
        alert(error.response.data.message);
        navigate("/login");
      });
      if (data.success) {
        delete Object.assign(data, { userId: data.id, accessToken }).id;
        logIn(data);
      }
    };

    accessToken && stayLogIn();
  }, []);

  return (
    <div className="flex flex-col items-center gap-5">
      <h1>무료 성격 테스트</h1>
      <p>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</p>
      <Link
        to={user ? "/test" : "/login"}
        className="bg-red-600 text-white rounded-md px-3"
      >
        {user ? "시작하기" : "로그인하기"}
      </Link>
    </div>
  );
};

export default Home;
