import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,

  saveUserInfo: (user) => set({ user }),

  removeUserInfo: () => set({ user: null }),

  updateUserInfo: (newNickname) =>
    set((state) => {
      return { user: { ...state.user, nickname: newNickname } };
    }),
}));

export default useAuthStore;
