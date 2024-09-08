import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../zustand/authStore";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const { user, logOut } = useAuthStore((state) => state);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  const handleLogout = () => {
    logOut();
    localStorage.removeItem("accessToken");
  };

  return (
    <div>
      <header>
        <nav className="flex flex-row justify-between px-5">
          <Link to="/">홈</Link>
          <div className="space-x-4">
            {user ? (
              <>
                <Link to="/profile">프로필</Link>
                <Link to="/test">테스트</Link>
                <Link to="/results">결과 보기</Link>
                <button onClick={handleLogout}>로그아웃</button>
              </>
            ) : (
              <Link to="/login">로그인</Link>
            )}
          </div>
        </nav>
      </header>
      <main className="container mx-auto pt-10 main">{children}</main>
    </div>
  );
};

export default Layout;
