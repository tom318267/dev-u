import React from "react";

const TutorCard = ({ image, name }) => {
  return (
    <div className="flex flex-col justify-center items-center mb-12">
      <img src={image} alt="" />
      <h2 className="font-mont font-semibold text-[20px] mt-4">{name}</h2>
      <p className="font-mohave text-[16px] w-[234px] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare sit ut
        dolor vel aenean eu auctor.
      </p>
      <img className="mt-2" src="/images/tutorstars.svg" alt="" />
    </div>
  );
};

export default TutorCard;
