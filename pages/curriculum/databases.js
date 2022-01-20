import Link from "next/link";
import React from "react";
import Curriculum from "../../components/Curriculum";
import Layout from "../../components/Layout";

const Databases = () => {
  return (
    <Layout>
      <Link href="/" passHref>
        <img
          className="mt-[41px] mb-[35px] ml-[16px] cursor-pointer"
          src="/images/mobileback.svg"
          alt=""
        />
      </Link>

      <Curriculum image="/images/databaseLogo.svg" title="Databases" />
    </Layout>
  );
};

export default Databases;
