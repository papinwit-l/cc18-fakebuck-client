import React, { useState } from "react";
import Avatar from "./Avatar";
import { IconPostEmoji, IconPostPhoto, IconPostVideo } from "../icons";
import useUserStore from "../stores/userStore";
import PostForm from "./PostForm";

function CreatePost() {
  const user = useUserStore((state) => state.user);
  const [message, setMessage] = useState("");

  const hdlCloseBtn = (e) => {
    setMessage("");
    document.getElementById("post-form-modal").showModal();
  };

  return (
    <>
      <div className="card bg-white shadow">
        <div className="card-body">
          <div className="flex flex-row gap-2 items-center justify-center">
            <div>
              <Avatar imgSrc={user.profileImage} className="w-11 h-11" />
            </div>
            <button
              className="h-11 rounded-full flex-1 justify-start bg-gray-200 hover:bg-gray-300 border-none active:contrast-75"
              onClick={(e) => hdlCloseBtn(e)}
            >
              {"What's on your mind, " + user.firstName + "?"}
            </button>
          </div>
          <div className="divider my-0"></div>
          <div className="flex flex-row">
            <button className="rounded-xl flex flex-row gap-2 justify-center flex-1 hover:bg-gray-100 py-2">
              <IconPostVideo />
              Live video
            </button>
            <button className="rounded-xl flex flex-row gap-2 justify-center flex-1 hover:bg-gray-100 py-2">
              <IconPostPhoto />
              Photo/video
            </button>
            <button className="rounded-xl flex flex-row gap-2 justify-center flex-1 hover:bg-gray-100 py-2">
              <IconPostEmoji />
              Feeling/activity
            </button>
          </div>
        </div>
      </div>
      {/* modal for create post */}
      <dialog id="post-form-modal" className="modal">
        <div className="modal-box h-fit">
          {/* if there is a button in form, it will close the modal */}
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={(e) => e.target.closest("#post-form-modal").close()}
          >
            ✕
          </button>
          <PostForm message={message} setMessage={setMessage} />
        </div>
      </dialog>
    </>
  );
}

export default CreatePost;
