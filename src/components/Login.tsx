import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userDummy } from "../constans/DummyData";

const Login = () => {
  const usenavigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate()) {
      const user = userDummy.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        usenavigate("/");
      } else {
        alert("Wrong email or password");
      }
    }
  };
  const validate = () => {
    let result = true;
    if (email === "" || password === null) {
      result = false;
      alert("Email is required");
    }
    if (password === "" || password === null) {
      result = false;
      alert("Password is required");
    }

    if (password.length < 8) {
      result = false;
      alert("Password must be at least 8 characters long");
    }
    return result;
  };

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="relative py-3 sm:max-w-xs sm:mx-auto">
        <form
          onSubmit={handleLogin}
          className="min-h-96 px-8 py-6 mt-4 text-left bg-white rounded-xl shadow-lg"
        >
          <div className="flex flex-col justify-center items-center h-full select-none">
            <div className="flex flex-col items-center justify-center gap-2 mb-8">
              <a href="https://amethgalarcio.web.app/" target="_blank">
                <img
                  src="https://amethgalarcio.web.app/assets/logo-42fde28c.svg"
                  className="w-8"
                />
              </a>
              <p className="font-semibold text-gray-300">Dashborad Kit</p>
              <p className="m-0 text-[16px] font-semibold text-black">
                Log In to Dashboard Kit
              </p>
              <span className="m-0 text-xs text-center text-[#8B8E98]">
                Enter your email and password below
              </span>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="font-semibold text-xs text-gray-400 ">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500"
                placeholder="Email Address"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="font-semibold text-xs text-gray-400 ">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500"
                placeholder="••••••••"
              />
            </div>
            <div className="mt-5 w-full">
              <button
                type="submit"
                className="py-1 px-8 bg-blue-600 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none"
              >
                Log In
              </button>
            </div>
            <div className="mt-5 justify-center flex">
              <div className="text-xs text-gray-400 ">
                Don't have an account?
                <button className="text-blue-600 font-semibold ml-1 hover: cursor-pointer">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
