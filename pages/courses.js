import Link from "next/link";
import React from "react";
import CourseCard from "../components/CourseCard";
import Layout from "../components/Layout";
import Question from "../components/Question";

const Courses = () => {
  return (
    <Layout>
      <Link href="/" passHref>
        <img
          className="mt-[41px] mb-[35px] ml-[16px] cursor-pointer"
          src="/images/mobileback.svg"
          alt=""
        />
      </Link>
      <div className="flex flex-col justify-center mx-8 items-center">
        <h1 className="font-mont text-[29px] font-bold mb-10">Our Courses</h1>

        <CourseCard
          image="/images/html.svg"
          imageTablet="/images/html-courses-tablet.svg"
          title="HTML &amp; CSS"
          params="html_overview"
        />
        <hr className="text-gray-300 w-full mb-5 md:hidden" />
        <CourseCard
          image="/images/javascript.svg"
          title="Javascript"
          params="javascript_overview"
        />
        <hr className="text-gray-300 w-full mb-5 md:hidden" />
        <CourseCard
          image="/images/python.svg"
          title="Python"
          params="python_overview"
        />
        <hr className="text-gray-300 w-full mb-5 md:hidden" />
        <CourseCard
          image="/images/responsive.svg"
          title="Responsive Design"
          params="responsive_overview"
        />
        <hr className="text-gray-300 w-full mb-5 md:hidden" />
        <CourseCard
          image="/images/databases.svg"
          title="Databases"
          params="databases_overview"
        />
        <hr className="text-gray-300 w-full mb-5 md:hidden" />
      </div>

      <Question />
    </Layout>
  );
};

export default Courses;
