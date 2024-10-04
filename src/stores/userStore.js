import axios from "axios";
import React from "react";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: "",
      login: async (input) => {
        const res = await axios.post("http://localhost:8000/auth/login", input);
        console.log(res.data);
        set({ token: res.data.accessToken, user: res.data.user });
        return res.data;
      },
      logout: () => {
        set({ token: "", user: null });
      },
    }),
    {
      name: "state",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserStore;
