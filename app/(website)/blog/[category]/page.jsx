import Blogs from "@/components/blog/Blogs";
import Header from "@/components/blog/Header";
import React from "react";

export async function generateStaticParams() {
  return [
    { category: "html" },
    // { category: "css" },
    // { category: "javascript" },
    // Add all other blog categories that should be statically generated
  ];
}
const BlogCategory = ({ params }) => {
  const { category } = params;
  return (
    <div>
      BlogCategory {category}
      <Header />
      <Blogs />
    </div>
  );
};

export default BlogCategory;
