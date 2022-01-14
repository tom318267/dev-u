import React from "react";
import Link from "next/link";
import Curriculum from "../../components/Curriculum";
import Layout from "../../components/Layout";

const ResponsiveDesign = () => {
  return (
    <Layout>
      <Link href="/">
        <img
          className="mt-[41px] mb-[35px] ml-[16px] cursor-pointer"
          src="/images/mobileback.svg"
          alt=""
        />
      </Link>

      <Curriculum
        image="/images/responsiveLogo.svg"
        title="Responsive Design"
      />
    </Layout>
  );
};

export default ResponsiveDesign;
