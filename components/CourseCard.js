import React from "react";

const CourseCard = ({ image, imageTablet, title }) => {
  return (
    <div>
      <h1 className="font-mont font-bold text-xl">{title}</h1>
      <p className="lg:w-[800px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim ultricies
        facilisi vivamus ut interdum vulputate laoreet vestibulum. Mi magna
        maecenas lacus vel faucibus netus.
      </p>
      <button className="h-[48px] bg-blue w-[166px] mb-[39px] drop-shadow-md font-semibold rounded-full font-mont text-white mt-4">
        More Info
      </button>
    </div>
  );
};

export default CourseCard;
