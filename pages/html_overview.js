import Link from "next/link";
import React from "react";
import CourseOverview from "../components/CourseOverview";
import Layout from "../components/Layout";

const HtmlOverview = () => {
  return (
    <Layout>
      <Link href="/" passHref>
        <img
          className="mt-[41px] mb-[35px] ml-[16px] cursor-pointer"
          src="/images/mobileback.svg"
          alt=""
        />
      </Link>

      <CourseOverview
        image="/images/htmlOverview.svg"
        imageTablet="/images/html-overview-tablet.svg"
        title="HTML &amp; CSS"
      />
    </Layout>
  );
};

export default HtmlOverview;
