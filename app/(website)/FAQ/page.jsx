import React from "react";
import Blog from "@/components/home-main/Blog";
import Clients from "@/components/common/Clients";
import Testimonials from "@/components/home-creative-agency/Testimonials";
import Header from "@/components/page-FAQ/Header";
import FAQS from "@/components/page-FAQ/FAQS";
import Numbers from "@/components/page-FAQ/Numbers";
import Marq2 from "@/components/common/Marq2";

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
