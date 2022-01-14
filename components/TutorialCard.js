import React from "react";

const TutorialCard = ({ image, name, from }) => {
  console.log(image);
  return (
    <div className="tutorial-card w-11/12 mb-8 py-[31px] font-mohave text-[20px] bg-gray-100">
      <div className="flex flex-col justify-center items-center">
        <p className="w-[234px]">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare sit
          ut dolor vel aenean eu auctor.”
        </p>
        <div className="flex items-center gap-2">
          - {name}, {from}
          <img className="w-[82px]" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TutorialCard;
