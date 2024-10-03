import axios from "axios";
import React, { useState } from "react";

function Register() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    identity: "",
    password: "",
    confirmPassword: "",
  });

  const hdlOnchange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitRegister = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/auth/register",
        input
      );
      console.log(res.data.message);
      setInput({
        firstName: "",
        lastName: "",
        identity: "",
        password: "",
        confirmPassword: "",
      });
      e.target.closest("#register-modal-form").close();
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const hdlSubmit = (e) => {
    e.preventDefault();
    // console.log(input);
    submitRegister();
  };

  return (
    <form className="flex flex-col gap-3 p-4 pt-10" onSubmit={hdlSubmit}>
      <div className="flex gap-2">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="input input-bordered w-full"
          value={input.firstName}
          onChange={hdlOnchange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Surname"
          className="input input-bordered w-full"
          value={input.lastName}
          onChange={hdlOnchange}
        />
      </div>
      <input
        type="text"
        name="identity"
        placeholder="Email or phone number"
        className="input input-bordered w-full"
        value={input.identity}
        onChange={hdlOnchange}
      />
      <input
        type="password"
        name="password"
        placeholder="New password"
        className="input input-bordered w-full"
        value={input.password}
        onChange={hdlOnchange}
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm password"
        className="input input-bordered w-full"
        value={input.confirmPassword}
        onChange={hdlOnchange}
      />
      <button className="btn btn-secondary text-xl text-white">Sign up</button>
    </form>
  );
}

export default Register;
