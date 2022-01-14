import Link from "next/link";
import React from "react";
import Curriculum from "../../components/Curriculum";
import Layout from "../../components/Layout";

const Html = () => {
  return (
    <Layout>
      <Link href="/">
        <img
          className="mt-[41px] mb-[35px] ml-[16px] cursor-pointer"
          src="/images/mobileback.svg"
          alt=""
        />
      </Link>

      <Curriculum image="/images/htmlLogo.svg" title="HTML &amp; CSS" />
    </Layout>
  );
};

export default Html;
