import Link from "next/link";
import React from "react";
import Curriculum from "../../components/Curriculum";
import Layout from "../../components/Layout";

const Javascript = () => {
  return (
    <Layout>
      <Link href="/" passHref>
        <img
          className="mt-[41px] mb-[35px] ml-[16px] cursor-pointer"
          src="/images/mobileback.svg"
          alt=""
        />
      </Link>

      <Curriculum image="/images/javascriptLogo.svg" title="Javascript" />
    </Layout>
  );
};

export default Javascript;
