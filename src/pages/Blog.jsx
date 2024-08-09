import { useState } from "react";
import { blog_list, blog_menu } from "../assets/blog/blog";
import BlogMenu from "../components/Blog/BlogMenu";
import BlogList from "../components/Blog/BlogList";
import BlogPagination from "../components/Blog/BlogPagination";

const Blog = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const BlogsPerPage = 9;

  const filteredBlogs =
    selectedCategory === "All"
      ? blog_list
      : blog_list.filter((list) => list.category === selectedCategory);

  const totalPages = Math.ceil(filteredBlogs.length / BlogsPerPage);

  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * BlogsPerPage,
    currentPage * BlogsPerPage
  );

  const getPageNumbers = () => {
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, currentPage + 1);

    if (totalPages > 3) {
      if (currentPage <= 2) {
        endPage = Math.min(3, totalPages);
      } else if (currentPage >= totalPages - 1) {
        startPage = Math.max(totalPages - 2, 1);
      }
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  };

  return (
    <section className="bg-slate-100 pt-36">
      <BlogMenu
        blog_menu={blog_menu}
        selectedCategory={selectedCategory}
        setSelectedCategory={(category) => {
          setSelectedCategory(category);
          setCurrentPage(1);
        }}
      />
      <BlogList
        paginatedBlogs={paginatedBlogs}
        hoveredIndex={hoveredIndex}
        setHoveredIndex={setHoveredIndex}
      />
      <BlogPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        getPageNumbers={getPageNumbers}
      />
    </section>
  );
};

export default Blog;
