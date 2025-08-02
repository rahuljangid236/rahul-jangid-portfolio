import Marq2 from "@/components/common/Marq2";
import Clients from "@/components/common/Clients";
import Header from "@/components/about-page/Header";
import Intro from "@/components/about-page/Intro";
import Numbers from "@/components/about-page/Numbers";
import Services from "@/components/about-page/Services";
import Testimonials from "@/components/home-page/Testimonials";
import Blog from "@/components/about-page/Blog";

const About = () => {
  return (
    <>
      <Header />
      <Intro />

      <Numbers />
      <Services />

      <Testimonials />
      <Clients />
      <Blog />
      <Marq2 />
    </>
  );
};

export default About;
