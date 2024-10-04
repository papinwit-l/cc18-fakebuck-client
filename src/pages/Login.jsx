import React, { useState } from "react";
import { FacebookTitle } from "../icons";
import axios from "axios";
import Register from "./Register";
import useUserStore from "../stores/userStore";

function Login() {
  const [input, setInput] = useState({
    identity: "",
    password: "",
  });

  const login = useUserStore((state) => state.login);
  // const token = useUserStore((state) => state.token);

  const hdlChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const hdlLogin = async () => {
    try {
      // const res = await axios.post("http://localhost:8000/auth/login", input);
      const res = await login(input);
    } catch (error) {
      console.log(error);
    }
  };

  const hdlSubmit = (e) => {
    e.preventDefault();

    if (!input.identity.trim() || !input.password.trim()) {
      return alert("Please fill all input");
    }
    hdlLogin();
  };

  const showRegisterModal = (e) => {
    e.preventDefault();
    document.getElementById("register-modal-form").showModal();
  };

  return (
    <>
      <div className="h-[700px] pt-20 pb-28 bg-[#f2f4f7]">
        <div className="p-5 mx-auto max-w-screen-lg min-h-[540px] flex justify-between">
          <div className="flex flex-col gap-4 mt-20 basis-3/5">
            <FacebookTitle className="w-80 -ms-8" />
            <h2 className="text-[30px] leading-8 -mt-6 w-[514px]">
              Facebook helps you connect and share with the people in your life.
            </h2>
            <p className="text-sm text-red-500">
              **this is not real facebook website**
            </p>
          </div>
          <div className="flex flex-1">
            <div className="card bg-base-100 flex-1 shadow-xl mt-8 h-fit">
              <form onSubmit={hdlSubmit}>
                <div className="flex-col card-body gap-3 p-4">
                  <input
                    type="text"
                    name="identity"
                    placeholder="Email address or phone number"
                    className="input input-bordered w-full rounded-lg"
                    value={input.identity}
                    onChange={hdlChange}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input input-bordered w-full rounded-lg"
                    value={input.password}
                    onChange={hdlChange}
                  />
                  {/* <button className="btn text-xl bg-[#0866ff] text-white hover:bg-[#3771d0]"> */}
                  <button className="btn btn-primary text-xl text-white">
                    Log in
                  </button>
                  <p className="text-[#0866ff] text-center cursor-pointer flex-grow-0 hover:underline">
                    Forgotten password?
                  </p>
                  <div className="divider my-0"></div>
                  <div className="flex justify-center">
                    <button
                      className="btn btn-secondary text-xl text-white w-fit"
                      onClick={showRegisterModal}
                    >
                      {/* <button className="btn text-xl bg-[#42b72a] text-white hover:bg-[#42b72ae6]"> */}
                      Create new account
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      {/* //dialog modal// */}
      {/*  */}
      <dialog id="register-modal-form" className="modal">
        <div className="modal-box">
          {/* if there is a button in form, it will close the modal */}
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={(e) => e.target.closest("#register-modal-form").close()}
          >
            ✕
          </button>
          <Register />
        </div>
      </dialog>
    </>
  );
}

export default Login;
