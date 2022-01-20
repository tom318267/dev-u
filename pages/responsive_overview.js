import Link from "next/link";
import React from "react";
import CourseOverview from "../components/CourseOverview";
import Layout from "../components/Layout";

const ResponsiveOverview = () => {
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
        image="/images/responsiveOverview.svg"
        title="Responsive Design"
        params="responsive_design"
        imageTablet="/images/responsive-design-tablet.svg"
      />
    </Layout>
  );
};

export default ResponsiveOverview;
