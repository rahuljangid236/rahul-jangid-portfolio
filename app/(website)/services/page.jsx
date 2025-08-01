import React from "react";
import Clients from "@/components/common/Clients";
import Services from "@/components/home-digital-agency/Services";
import Intro2 from "@/components/home-digital-agency/Intro2";
import Testimonials from "@/components/home-digital-agency/Testimonials";
import Blog from "@/components/home-digital-agency/Blog";
import Header from "@/components/page-services/Header";
import Numbers from "@/components/page-services/Numbers";
import Marq2 from "@/components/common/Marq2";

const ServicesPage = () => {
  return (
    <>
      <Header />
      <Services />
      <Intro2 />
      <Numbers />
      <Testimonials />
      <Clients />
      <Blog />
      <Marq2 />
    </>
  );
};

export default ServicesPage;
