import React from "react";
import Question from "./Question";
import Link from "next/link";

const Homepage = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <img className="w-full md:p-8" src="/images/homeImg.svg" alt="" />
        </div>

        <div className="w-3/4 md:w-1/2 flex flex-col justify-center items-center mx-auto md:px-8">
          <h1 className="mt-[35px] font-mont leading-[35px] font-bold text-[29px] text-center mb-4">
            Become a great developer!
          </h1>
          <p className="text-center font-mohave text-[18px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
            delectus molestias dolorum, consequatur, ratione, ipsam eos quo
            inventore ab debitis repellat provident quia similique vel libero
            magni cupiditate qui impedit.
          </p>
          <Link href="/sign_up">
            <button className="h-[48px] bg-blue w-11/12 mb-[39px] drop-shadow-md font-semibold rounded-full font-mont text-white mt-4">
              Join Us
            </button>
          </Link>
        </div>
      </div>

      <hr className="text-gray-300 md:hidden" />

      <div className="flex flex-col md:grid md:grid-cols-4 md:mb-40 md:items-center md:justify-center md:mt-8">
        <div className="my-[44px] md:my-0 flex flex-col justify-center items-center md:col-span-4">
          <img className="mb-[5px]" src="/images/noexperience.svg" alt="" />
          <h1 className="font-mont text-[26px] font-bold leading-[32px] mb-2 text-center">
            No experience needed!
          </h1>
          <p className="w-[354px] text-[18px] text-center font-mohave">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare sit
            ut dolor vel aenean eu auctor.
          </p>
        </div>

        <hr className="text-gray-300 md:hidden" />

        <div className="my-[44px] flex flex-col justify-center items-center md:col-span-2">
          <img src="/images/free.svg" alt="" />
          <h1 className="font-mont text-[26px] font-bold leading-[32px] mb-2">
            Absolutely free!
          </h1>
          <p className="w-[354px] text-[18px] text-center font-mohave">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare sit
            ut dolor vel aenean eu auctor.
          </p>
        </div>

        <hr className="text-gray-300 md:hidden" />

        <div className="my-[44px] flex flex-col justify-center items-center md:col-span-2">
          <img src="/images/coder.svg" alt="" />
          <h1 className="font-mont text-[26px] font-bold leading-[32px] my-3">
            Job Placement!
          </h1>
          <p className="w-[354px] text-[18px] text-center font-mohave">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare sit
            ut dolor vel aenean eu auctor.
          </p>
        </div>

        <hr className="text-gray-300 md:hidden" />
      </div>

      <Question />
    </div>
  );
};

export default Homepage;
