import Blog from "@/components/blog-details/Blog";
import Header from "@/components/blog-details/Header";
import React from "react";

export async function generateStaticParams() {
  // This should return an array of all possible combinations
  // Example:
  return [
    { category: "tech", slug: "how-to-code" },
    // { category: "life", "blog-slug": "morning-routine" },
  ];
}

const BlogDetail = ({ params }) => {
  const { category, slug } = params;
  console.log("Category:", params);
  return (
    <>
      <Header />
      <Blog />
    </>
  );
};

export default BlogDetail;
