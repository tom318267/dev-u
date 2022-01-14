import React from "react";
import Question from "./Question";

const Curriculum = ({ image, title }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pb-">
        <div className="flex items-center gap-2 mb-4">
          <img src={image} alt="" />
          <h2 className="font-mont font-semibold text-[29px]">{title}</h2>
        </div>

        <p className="font-mohave text-[20px] mx-8 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          nulla vitae gravida dignissim malesuada dui id mi congue. Rhoncus
          praesent ac nec accumsan vestibulum eu. Etiam dui tortor id viverra
          viverra odio faucibus feugiat faucibus. In sapien pellentesque morbi
          non enim lacinia.
        </p>
      </div>

      <div className="mx-8 mt-6 pb-8">
        <h1 className="text-[26px] font-mont font-semibold">Curriculum</h1>

        <div className="bg-blue w-full text-white font-open py-6 text-[18px]">
          <div>
            <div className="flex justify-between px-8">
              <h3 className="font-semibold">Section 1</h3>
              <img
                className="cursor-pointer"
                src="/images/carrotDown.svg"
                alt=""
              />
            </div>
            <ol className="px-16 font-extralight list-decimal" type="1">
              <li>Introduction</li>
              <li>Getting Started</li>
              <li>What you'll need</li>
            </ol>
          </div>

          <div className="flex justify-between px-8">
            <h3 className="font-semibold">Section 2</h3>
            <img
              lassName="cursor-pointer"
              src="/images/carrotDown.svg"
              alt=""
            />
          </div>
          <ol className="px-16 font-extralight list-decimal" type="1">
            <li>Introduction</li>
            <li>Getting Started</li>
            <li>What you'll need</li>
          </ol>

          <div className="flex justify-between px-8">
            <h3 className="font-semibold">Section 3</h3>
            <img
              lassName="cursor-pointer"
              src="/images/carrotDown.svg"
              alt=""
            />
          </div>
          <ol className="px-16 font-extralight list-decimal" type="1">
            <li>Introduction</li>
            <li>Getting Started</li>
            <li>What you'll need</li>
          </ol>
        </div>
      </div>

      <Question />
    </>
  );
};

export default Curriculum;
