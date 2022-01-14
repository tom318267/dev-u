import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div className="relative fade-in">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mohave:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      <div>{children}</div>
    </div>
  );
};

Layout.defaultProps = {
  title: "DevU",
  description: "Become a great developer!",
  keywords: "web development, coding, school",
};

export default Layout;
