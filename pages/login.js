import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";

const Login = () => {
  return (
    <Layout>
      <Link href="/">
        <img
          className="mt-[41px] mb-[35px] ml-[16px] cursor-pointer"
          src="/images/mobileback.svg"
          alt=""
        />
      </Link>
      <div className="flex flex-col justify-center items-center w-[358px] mx-auto mb-10">
        <h1 className="font-mont font-semibold text-[29px] mb-8">Log In</h1>
        <button className="flex justify-center text-[18px] items-center gap-1 border border-green h-[49px] w-[358px] rounded-full text-green font-mont font-semibold mb-4">
          <img src="/images/google.svg" alt="" />
          Log in with Google
        </button>
        <button className="flex justify-center items-center gap-1 border border-blue h-[49px] text-[18px] w-[358px] rounded-full text-blue font-mont font-semibold mb-4">
          <img src="/images/facebook.svg" alt="" />
          Log in with Facebook
        </button>

        <div className="my-2">
          <img src="/images/or.svg" alt="" />
        </div>

        <div className="flex flex-col w-full">
          <label className="font-mohave text-[20px]" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="border h-[45px] text-[18px] pl-2 font-mohave rounded-sm mb-4"
            type="email"
          />

          <label className="font-mohave text-[20px]" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            className="border h-[45px] text-[18px] pl-2 rounded-sm"
            type="password"
          />

          <div className="mt-4 font-mohave">
            <label className="text-[20px]" htmlFor="remember">
              <input
                id="remember"
                className="w-5 h-5 align-bottom relative top-[-7px]"
                type="checkbox"
              />{" "}
              Remember Me
            </label>
          </div>

          <button className="font-mont mt-8 font-semibold bg-blue text-white w-[358px] h-[48px] rounded-full flex justify-center text-[18px] items-center gap-1">
            Log In
          </button>

          <h3 className="text-center text-[20px] mt-4 cursor-pointer font-mohave text-blue">
            Forgot Password?
          </h3>

          <hr className="my-4" />

          <div className="text-[20px] text-center font-mohave">
            <h3>Don't have an account?</h3>
            <h3 className="text-blue cursor-pointer">Sign Up</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
