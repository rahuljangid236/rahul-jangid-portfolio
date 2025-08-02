import Clients from "@/components/common/Clients";
import Marq2 from "@/components/common/Marq2";
import Blog from "@/components/services-page/Blog";
import Header from "@/components/services-page/Header";
import Intro2 from "@/components/services-page/Intro2";
import Numbers from "@/components/services-page/Numbers";
import Services from "@/components/services-page/Services";
import Testimonials from "@/components/services-page/Testimonials";

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
