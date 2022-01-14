import React, { useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

const Questions = () => {
  const [submit, setSubmit] = useState(false);

  const router = useRouter();

  if (submit) {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }

  const submitMessage = () => {
    return (
      submit && (
        <div className="fade-in-top fixed top-0 bg-blue w-full h-[226px] text-white">
          <div className="flex flex-col h-full justify-center items-center font-mont font-semibold gap-1">
            <img src="/images/sent.svg" alt="" />
            <h1>Message Sent!</h1>
          </div>
        </div>
      )
    );
  };

  return (
    <Layout>
      {submitMessage()}
      <div>
        <img className="w-full" src="/images/questions.svg" alt="" />
        <div className="flex flex-col justify-center items-center my-8">
          <h1 className="font-mont font-semibold text-[29px] mb-1">
            Questions?
          </h1>
          <p className="font-mohave text-[20px] w-[350px] text-center mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare sit
            ut dolor vel aenean eu auctor.
          </p>
          <textarea
            className="w-[350px] font-mohave border border-black h-[181px] text-[20px] p-4 placeholder-gray-300"
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Your message"
          ></textarea>
          <button
            onClick={() => setSubmit(true)}
            className="w-[350px] bg-blue rounded-full text-white font-mont h-[59px] font-semibold mt-8"
          >
            Ask Question
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Questions;
