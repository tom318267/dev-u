import React from "react";
import Question from "./Question";

const CourseOverview = ({ image, title, imageTablet }) => {
  return (
    <>
      <div className="flex flex-col md:w-[629px] md:mx-auto justify-center items-center">
        <h2 className="text-[24px] md:text-[40px] mb-6 font-mont font-semibold">
          {title}
        </h2>
        <img className="w-[232px] md:hidden md:my-4" src={image} alt="" />
        <img className="hidden md:flex" src={imageTablet} alt="" />

        <p className="font-mohave w-[285px] md:w-full text-center md:text-left text-[20px] my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
          ultricies facilisi vivamus ut interdum vulputate laoreet vestibulum.
          Mi magna maecenas lacus vel faucibus netus.{" "}
        </p>

        <div className="flex flex-col w-full justify-center items-center md:flex-row md:justify-between mb-40">
          <div>
            <img className="mb-8 md:mb-0" src="/images/stars.svg" alt="" />
          </div>

          <div>
            <button className="w-[234px] select-course h-[49px] bg-blue text-[18px] text-white font-mont font-semibold rounded-full">
              Select course
            </button>
          </div>
        </div>
      </div>
      <Question />
    </>
  );
};

export default CourseOverview;
