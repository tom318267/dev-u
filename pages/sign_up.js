import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import TutorialCard from "../components/TutorialCard";
import Question from "../components/Question";

const SignUp = () => {
  return (
    <Layout>
      <Link href="/">
        <img
          className="mt-[41px] mb-[35px] ml-[16px] cursor-pointer"
          src="/images/mobileback.svg"
          alt=""
        />
      </Link>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-[309px] flex flex-col justify-center items-center">
          <h1 className="font-mont w-full font-bold text-center leading-[35px] text-[29px] mb-2">
            Sign up with us and get started on your career!
          </h1>
          <p className="font-mohave w-full mb-6 leading-[28px] text-[20px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare sit
            ut dolor vel aenean eu auctor.
          </p>
          <button className="border-2 font-mont mb-[15px] font-semibold border-blue text-blue w-[358px] h-[48px] rounded-full flex justify-center text-[18px] items-center gap-1">
            <img src="/images/facebook.svg" alt="" />
            Sign up with Facebook
          </button>
          <button className="border-2 font-mont font-semibold border-green text-green w-[358px] h-[48px] rounded-full flex justify-center text-[18px] items-center gap-1">
            <img src="/images/google.svg" alt="" />
            Sign up with Google
          </button>
        </div>

        <div className="my-6">
          <img src="/images/or.svg" alt="" />
        </div>

        <button className="font-mont mb-[15px] font-semibold bg-blue text-white w-[358px] h-[48px] rounded-full flex justify-center text-[18px] items-center gap-1">
          <img src="/images/email.svg" alt="" />
          Sign up with your email
        </button>

        <hr className="text-gray-300 my-[43px] w-10/12" />

        <p className="font-mohave text-[20px] text-center">
          Already have an account? <br />
          <span className="text-blue font-semibold cursor-pointer">Log In</span>
        </p>

        <TutorialCard
          image="/images/user1.svg"
          name="John"
          from="Victoria, TX"
        />
        <TutorialCard
          image="/images/user2.svg"
          name="Sandy"
          from="Boston, MA"
        />
        <TutorialCard
          image="/images/user3.svg"
          name="Dan"
          from="Pittsburgh, PA"
        />

        <Question />
      </div>
    </Layout>
  );
};

export default SignUp;
