import axios from "axios";
import React from "react";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const usePostStore = create(
  persist(
    (set, get) => ({
      posts: [],
      currentPost: null,
      loading: false,
      createPost: async (body, token) => {
        const res = await axios.post("http://localhost:8000/post/", body, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return res.data;
      },
      getAllPosts: async (token) => {
        set({ loading: true });
        const res = await axios.get("http://localhost:8000/post/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log(res.data);
        set({ posts: res.data.posts });
        return res.data;
      },
    }),
    {
      name: "state-post",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default usePostStore;
