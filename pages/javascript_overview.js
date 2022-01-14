import Link from "next/link";
import React from "react";
import CourseOverview from "../components/CourseOverview";
import Layout from "../components/Layout";

const JavascriptOverview = () => {
  return (
    <Layout>
      <Link href="/">
        <img
          className="mt-[41px] mb-[35px] ml-[16px] cursor-pointer"
          src="/images/mobileback.svg"
          alt=""
        />
      </Link>

      <CourseOverview
        image="/images/javascriptOverview.svg"
        title="Javascript"
      />
    </Layout>
  );
};

export default JavascriptOverview;
