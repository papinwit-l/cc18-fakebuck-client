import React, { useState } from "react";
import Avatar from "./Avatar";
import useUserStore from "../stores/userStore";
import usePostStore from "../stores/postStore";
import { IconPostPhoto } from "../icons";
import axios from "axios";

function PostForm(props) {
  const user = useUserStore((state) => state.user);
  const token = useUserStore((state) => state.token);
  const createPost = usePostStore((state) => state.createPost);
  const getAllPosts = usePostStore((state) => state.getAllPosts);
  const { message, setMessage } = props;
  const hdlChange = (e) => {
    setMessage(e.target.value);
  };

  const hdlCreatePost = async (e) => {
    try {
      const body = { message: message };
      const res = await createPost(body, token);
      console.log(res);
      setMessage("");
      e.target.closest("#post-form-modal").close();
      getAllPosts(token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl text-center">Create Post</h3>
      <div className="divider mt-1 mb-0"></div>
      <div className="flex gap-2">
        <Avatar className="w-11 h-11 rounded-full" imgSrc={user.profileImage} />
        <div className="flex flex-col">
          <div className="text-sm font-bold opacity-80">{`${user.firstName} ${user.lastName}`}</div>
          <select
            className="select select-xs rounded-lg w-full max-w-xs bg-slate-200 focus:outline-none"
            defaultValue={"Who can see?"}
          >
            <option disabled>Who can see?</option>
            <option>Public</option>
            <option>Friends</option>
          </select>
        </div>
      </div>
      <textarea
        className="textarea textarea-ghost min-h-32 resize-none h-auto focus:outline-none focus:border-none"
        placeholder={`What's on your mind, ${user.firstName}?`}
        onChange={hdlChange}
        value={message}
      ></textarea>
      {/* Add picture Area */}
      <div className="flex border rounded-lg p-2 justify-between items-center">
        <p className="font-semibold">Add to your post</p>
        <div>
          <div className="rounded-full hover:bg-slate-100 p-2 active:scale-95">
            <IconPostPhoto />
          </div>
        </div>
      </div>
      {message ? (
        <button
          className="btn btn-primary h-[2.5rem] min-h-[2.5rem] font-bold text-base-100"
          onClick={hdlCreatePost}
        >
          Post
        </button>
      ) : (
        <button className="bg-[#e4e6eb] rounded-lg h-[2.5rem] min-h-[2.5rem] font-bold text-[#bcc0c4] cursor-not-allowed select-none">
          Post
        </button>
      )}
    </div>
  );
}

export default PostForm;
