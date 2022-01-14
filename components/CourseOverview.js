import React from "react";
import Question from "./Question";

const CourseOverview = ({ image, title }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img className="w-[232px]" src={image} alt="" />
      <h2 className="text-[24px] font-mont font-semibold mt-4">{title}</h2>
      <p className="font-mohave w-[285px] text-center text-[20px] my-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim ultricies
        facilisi vivamus ut interdum vulputate laoreet vestibulum. Mi magna
        maecenas lacus vel faucibus netus.{" "}
      </p>

      <img src="/images/stars.svg" alt="" />

      <button className="w-[234px] select-course h-[49px] bg-blue text-[18px] text-white font-mont font-semibold mt-6 mb-24 rounded-full">
        Select course
      </button>

      <Question />
    </div>
  );
};

export default CourseOverview;
