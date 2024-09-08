import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,

  logIn: (user) => set({ user }),

  logOut: () => set({ user: null }),

  userUpdate: (newNickname) =>
    set((state) => {
      return { user: { ...state.user, nickname: newNickname } };
    }),
}));

export default useAuthStore;
