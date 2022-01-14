import React from "react";

const CourseCard = ({ image, title }) => {
  return (
    <div className="flex items-center h-[171px] w-[358px] mb-8 gap-3">
      <div className="w-1/2 h-4/5">
        <img src={image} alt="" />
      </div>

      <div className="w-1/2">
        <h3 className="font-mont font-bold text-[20px]">{title}</h3>
        <p className="font-mohave mb-1 text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare sit ut
          dolor vel aenean eu auctor.
        </p>
        <button className="w-[126px] bg-blue text-white rounded-full drop-shadow-md h-[42px] cursor-pointer font-semibold font-mont">
          More Info
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
