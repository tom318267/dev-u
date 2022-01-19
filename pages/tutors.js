import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import Question from "../components/Question";
import TutorCard from "../components/TutorCard";

const Tutors = () => {
  return (
    <Layout>
      <Link href="/">
        <img
          className="mt-[41px] mb-[35px] ml-[16px] cursor-pointer"
          src="/images/mobileback.svg"
          alt=""
        />
      </Link>
      <h1 className="font-mont font-semibold text-[29px] mb-10 text-center">
        Tutor List
      </h1>
      <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-4">
        <TutorCard image="/images/tutor1.svg" name="John Smith" />
        <TutorCard image="/images/tutor2.svg" name="Sarah Jones" />
        <TutorCard image="/images/tutor3.svg" name="Josh Williams" />
        <TutorCard image="/images/tutor4.svg" name="Stacy Sanders" />
      </div>

      <Question />
    </Layout>
  );
};

export default Tutors;
