import React from "react";
import Clients from "@/components/common/Clients";
import Header from "@/components/page-FAQ/Header";
import FAQS from "@/components/page-FAQ/FAQS";
import Numbers from "@/components/page-FAQ/Numbers";
import Marq2 from "@/components/common/Marq2";
import Blog from "@/components/page-FAQ/Blog";
import Testimonials from "@/components/page-FAQ/Testimonials";

const FAQPage = () => {
  return (
    <>
      <Header />
      <FAQS />
      <Numbers />
      <Testimonials />
      <Clients />
      <Blog />
      <Marq2 />
    </>
  );
};

export default FAQPage;
