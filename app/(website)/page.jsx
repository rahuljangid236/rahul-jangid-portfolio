import Clients from "@/components/common/Clients";
import Marq2 from "@/components/common/Marq2";
import About from "@/components/home-page/About";
import Blog from "@/components/home-page/Blog";
import Header from "@/components/home-page/Header";
import Marq from "@/components/home-page/Marq";
import Portfolio from "@/components/home-page/Portfolio";
import Services from "@/components/home-page/Services";
import Skills from "@/components/home-page/Skills";
import Testimonials from "@/components/home-page/Testimonials";

export const metadata = {
  title:
    "Rahul Jangid | Senior Frontend Developer | Udaipur | React.js, Next.js, Tailwind CSS Expert",
  description:
    "Experienced Senior Frontend Developer specializing in React.js, Next.js, and Tailwind CSS. Delivering responsive, SEO-friendly, scalable web applications with exceptional UI/UX design.",
  keywords: [
    "Rahul Jangid Udaipur",
    "Frontend Developer",
    "Senior Frontend Developer",
    "React.js Developer",
    "Next.js Expert",
    "Tailwind CSS",
    "SEO-Friendly Web Development",
    "UI/UX Design",
    "Scalable Web Applications",
    "Responsive Design",
    "Modern Web Development",
    "hire a Next.js developer",
    "freelance frontend developer",
  ],
  authors: { name: "Rahul Jangid", url: "https://rahuljangid.com" },
  openGraph: {
    title:
      "Rahul Jangid | Senior Frontend Developer | Udaipur | React.js, Next.js, Tailwind CSS Expert",
    description:
      "Specializing in creating responsive, scalable web applications with React.js, Next.js, and Tailwind CSS. Expert in delivering SEO-friendly, user-focused solutions with stunning designs and seamless performance.",
    url: "https://rahuljangid.com",
    images: [
      {
        url: "https://rahuljangid.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Rahul Jangid Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rahul Jangid | Senior Frontend Developer | Udaipur|  React.js, Next.js, Tailwind CSS Expert",
    description:
      "Delivering modern, responsive, and SEO-optimized web applications with expertise in React.js, Next.js, and Tailwind CSS.",
    images: ["https://rahuljangid.com/og-image.jpg/og-image.jpg"],
  },
  robots: {
    index: true, // Allow indexing of this page
    follow: true, // Allow following links on this page
    nocache: false, // Allow caching
    noarchive: false, // Allow archiving in search engines
    notranslate: false, // Allow translation of this page
  },
  alternates: {
    canonical: "https://rahuljangid.com", // Canonical URL
    languages: {
      "en-US": "https://rahuljangid.com", // Support for multiple languages if needed
    },
  },
};
export default function Home() {
  return (
    <>
      <Header />
      <Marq />
      <About />
      <Services />
      <Portfolio />
      <Skills />
      <Testimonials />
      <Clients />
      <Blog />
      <Marq2 />
    </>
  );
}
