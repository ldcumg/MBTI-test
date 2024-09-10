import { useState } from "react";
import { updateProfile } from "../api/auth";
import useAuthStore from "../zustand/authStore";
import { useGetTestResultsQuery } from "../queries/testResultQueries";
import { updateTestResultNickname } from "../api/testResult";

const Profile = () => {
  const { user, updateUserInfo } = useAuthStore((state) => state);

  const [nickname, setNickname] = useState("");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  // 닉네임을 변경하는 함수
  const handleSubmit = async (e) => {
    e.preventDefault();
    updateProfile({ nickname }, user.accessToken);
    updateUserInfo(nickname);
    preResultsUpdate();
    alert(`닉네임이 ${nickname}(으)로 변경되었습니다.`);
    setNickname("");
  };

  // 유저가 쓴 게시물 다 불러와서 게시물 id를 배열에 담아 그 배열들의 닉네임 변경하기
  const { data: results } = useGetTestResultsQuery();
  const preResultsUpdate = () => {
    let preResults = [];
    results
      .filter((result) => result.userId === user.userId)
      .forEach((result) => preResults.push(result.id));
    preResults.forEach((id) => updateTestResultNickname(id, nickname));
  };

  return (
    <div className="flex flex-col gap-5 items-center">
      <h1>프로필 수정</h1>
      <p>현재 닉네임 : {user.nickname}</p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="flex flex-col gap-1">
          <label className="flex float-start">변경할 닉네임</label>
          <input
            value={nickname}
            onChange={handleNicknameChange}
            className="border-solid border border-gray-500 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-green-400 text-white rounded-md px-3 mt-8 "
        >
          프로필 업데이트
        </button>
      </form>
    </div>
  );
};

export default Profile;
