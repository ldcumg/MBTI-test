import { create } from "zustand";

const useAuthStore = create((set) => ({
  // 초기 user 값
  user: null,

  // user 값을 받아온 user 값으로 set
  saveUserInfo: (user) => set({ user }),

  // user 값을 null로 set
  removeUserInfo: () => set({ user: null }),

  // user의 nickname만 변경
  updateUserInfo: (newNickname) =>
    set((state) => {
      return { user: { ...state.user, nickname: newNickname } };
    }),
}));

export default useAuthStore;
