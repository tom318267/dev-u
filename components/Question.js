import Link from "next/link";
import React from "react";

const Question = () => {
  return (
    <Link href="/questions">
      <div className="my-[45px] flex justify-center items-center gap-2 cursor-pointer">
        <h2 className="font-mont font-semibold text-[20px]">
          Have a question?
        </h2>
        <img src="/images/help.svg" alt="" />
      </div>
    </Link>
  );
};

export default Question;
