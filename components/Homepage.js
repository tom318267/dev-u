import React from "react";
import Question from "./Question";
import Link from "next/link";

const Homepage = () => {
  return (
    <div>
      <img className="w-full" src="/images/homeImg.svg" alt="" />

      <div className="mt-[35px] flex flex-col justify-center items-center">
        <h1 className="font-mont leading-[35px] font-bold text-[29px] w-[271px] text-center">
          Become a great developer!
        </h1>
        <p className="mx-[18px] text-[18px] text-center font-mohave w-[354px] my-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare sit ut
          dolor vel aenean eu auctor.
        </p>
        <Link href="/sign_up">
          <button className="h-[48px] bg-blue w-[233px] mb-[39px] drop-shadow-md font-semibold rounded-full font-mont text-white">
            Join Us
          </button>
        </Link>
      </div>

      <hr className="text-gray-300" />

      <div className="my-[44px] flex flex-col justify-center items-center">
        <img
          className="w-[132px] mb-[5px]"
          src="/images/noexperience.svg"
          alt=""
        />
        <h1 className="font-mont text-[26px] font-bold leading-[32px] mb-2">
          No experience needed!
        </h1>
        <p className="w-[354px] text-[18px] text-center font-mohave">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare sit ut
          dolor vel aenean eu auctor.
        </p>
      </div>

      <hr className="text-gray-300" />

      <div className="my-[44px] flex flex-col justify-center items-center">
        <img src="/images/free.svg" alt="" />
        <h1 className="font-mont text-[26px] font-bold leading-[32px] mb-2">
          Absolutely free!
        </h1>
        <p className="w-[354px] text-[18px] text-center font-mohave">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare sit ut
          dolor vel aenean eu auctor.
        </p>
      </div>

      <hr className="text-gray-300" />

      <div className="my-[44px] flex flex-col justify-center items-center">
        <img src="/images/coder.svg" alt="" />
        <h1 className="font-mont text-[26px] font-bold leading-[32px] mb-2">
          Job Placement!
        </h1>
        <p className="w-[354px] text-[18px] text-center font-mohave">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare sit ut
          dolor vel aenean eu auctor.
        </p>
      </div>

      <hr className="text-gray-300" />

      <Question />
    </div>
  );
};

export default Homepage;
