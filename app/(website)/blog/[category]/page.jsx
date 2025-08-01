import React from "react";

import Header from "@/components/blog-grid-sidebar/Header";
import Blogs from "@/components/blog-grid-sidebar/Blogs";
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
