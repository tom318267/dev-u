import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import TutorialCard from "../components/TutorialCard";
import Question from "../components/Question";

const SignUp = () => {
  return (
    <Layout>
      <div className="w-full md:w-[530px] md:mx-auto flex flex-col justify-center items-center mb-40">
        <div className="flex w-screen relative mt-20 lg:mt-0">
          <div className="w-[309px] flex flex-col justify-center items-center mx-auto lg:mx-0 lg:w-1/2 lg:p-20">
            <h1 className="font-mont w-full font-bold text-center leading-[35px] text-[29px] mb-2">
              Sign up with us and get started on your career!
            </h1>
            <p className="font-mohave w-full mb-6 leading-[28px] text-[20px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              sit ut dolor vel aenean eu auctor.
            </p>
            <button className="border-2 font-mont mb-[15px] font-semibold border-blue text-blue w-[358px] h-[48px] rounded-full flex justify-center text-[18px] items-center gap-1">
              <img src="/images/facebook.svg" alt="" />
              Sign up with Facebook
            </button>
            <button className="border-2 font-mont font-semibold border-green text-green w-[358px] h-[48px] rounded-full flex justify-center text-[18px] items-center gap-1">
              <img src="/images/google.svg" alt="" />
              Sign up with Google
            </button>

            <div className="my-6">
              <img src="/images/or.svg" alt="" />
            </div>

            <button className="font-mont mb-[15px] font-semibold bg-blue text-white w-[358px] h-[48px] rounded-full flex justify-center text-[18px] items-center gap-1">
              <img src="/images/email.svg" alt="" />
              Sign up with your email
            </button>

            <hr className="text-gray-300 my-[43px] w-10/12" />

            <p className="font-mohave text-[20px] text-center mb-[43px]">
              Already have an account? <br />
              <span className="text-blue font-semibold cursor-pointer">
                Log In
              </span>
            </p>
          </div>

          <div className="w-1/2 absolute top-0 right-0 hidden lg:flex">
            <img
              src="/images/codeImg.jpg"
              className="h-[1000px] absolute right-0"
              alt=""
            />
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center lg:hidden">
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
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
