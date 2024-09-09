import { useState } from "react";
import { updateProfile } from "../api/auth";
import useAuthStore from "../zustand/authStore";

const Profile = () => {
  const { user, updateUserInfo } = useAuthStore((state) => state);

  const [nickname, setNickname] = useState("");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProfile({ nickname }, user.accessToken);
    updateUserInfo(nickname);
    setNickname("");
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
