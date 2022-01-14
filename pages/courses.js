import Link from "next/link";
import React from "react";
import CourseCard from "../components/CourseCard";
import Layout from "../components/Layout";
import Question from "../components/Question";

const Courses = () => {
  return (
    <Layout>
      <Link href="/">
        <img
          className="mt-[41px] mb-[35px] ml-[16px] cursor-pointer"
          src="/images/mobileback.svg"
          alt=""
        />
      </Link>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-mont text-[29px] font-bold mb-10">Our Courses</h1>

        <CourseCard image="/images/html.svg" title="HTML &amp; CSS" />
        <hr className="text-gray-300 w-full mb-5" />
        <CourseCard image="/images/javascript.svg" title="Javascript" />
        <hr className="text-gray-300 w-full mb-5" />
        <CourseCard image="/images/python.svg" title="Python" />
        <hr className="text-gray-300 w-full mb-5" />
        <CourseCard image="/images/responsive.svg" title="Responsive Design" />
        <hr className="text-gray-300 w-full mb-5" />
        <CourseCard image="/images/databases.svg" title="Databases" />
        <hr className="text-gray-300 w-full mb-5" />
      </div>

      <Question />
    </Layout>
  );
};

export default Courses;
