import { Link } from "react-router-dom";
import useAuthStore from "../zustand/authStore";

const Home = () => {
  const { user } = useAuthStore((state) => state);

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
