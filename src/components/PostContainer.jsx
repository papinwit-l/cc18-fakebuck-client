import React, { useEffect } from "react";
import CreatePost from "./CreatePost";
import PostItem from "./PostItem";
import usePostStore from "../stores/postStore";
import useUserStore from "../stores/userStore";

function PostContainer() {
  const posts = usePostStore((state) => state.posts);
  const getAllPosts = usePostStore((state) => state.getAllPosts);
  const token = useUserStore((state) => state.token);

  useEffect(() => {
    getAllPosts(token);
  }, []);
  return (
    <div className="w-[calc(100%-350px-350px)] mx-auto h-[calc(100%-3.5rem)] my-3 flex flex-col gap-4 rounded-lg p-2">
      {/* <div className="bg-white fixed top-14 ml-[350px] min-w-[100%] mr-[350px] overflow-auto"> */}
      <CreatePost />
      {posts.map((el) => (
        <PostItem key={el.id} posts={el} />
      ))}
    </div>
  );
}

export default PostContainer;
