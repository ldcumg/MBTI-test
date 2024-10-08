import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../zustand/authStore";
import { getUserProfile } from "../api/auth";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const { user, saveUserInfo, removeUserInfo } = useAuthStore((state) => state);

  // 로컬스토리지에 accessToken이 있으면 유저 정보를 조회해서 zustand의 user에 저장
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const stayLogIn = async () => {
      const { data } = await getUserProfile(accessToken).catch((error) => {
        alert(error.response.data.message);
        navigate("/login");
      });
      if (data?.success) {
        // data의 id 값을 userId에 할당하고 id 키 삭제하기
        delete Object.assign(data, { userId: data.id, accessToken }).id;
        saveUserInfo(data);
      }
    };

    accessToken && stayLogIn();
    if (!user) {
      navigate("/");
    }
  }, []);

  // 로그아웃 시 zustand의 user null로 바꾸고 로컬스토리지의 accessToken 삭제
  const handleLogout = () => {
    removeUserInfo();
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
