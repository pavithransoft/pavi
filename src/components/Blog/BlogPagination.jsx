import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const BlogPagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
  getPageNumbers,
}) => {
  return (
    <section className="flex items-center justify-between border-t border-slate-300 w-3/4 m-auto text-slate-900 text-xs sm:text-sm">
      <p className="select-none">
        Page <span className="font-bold">{currentPage}</span> of {totalPages}
      </p>
      <div className="flex items-center justify-center gap-3 select-none py-12">
        {currentPage > 1 && (
          <IoIosArrowBack
            className="w-8 h-8 sm:w-9 sm:h-9 p-1 hover:bg-slate-200 rounded cursor-pointer"
            onClick={() => setCurrentPage(currentPage - 1)}
          />
        )}
        {getPageNumbers().map((pageNum) => (
          <ul key={pageNum}>
            <li
              className={`px-[0.3rem] sm:px-[0.35rem] lg:px-[0.6rem] lg:py-1 rounded-full border cursor-pointer ${
                pageNum === currentPage
                  ? "bg-slate-300 font-bold border-slate-400"
                  : "hover:bg-slate-200"
              }`}
              onClick={() => setCurrentPage(pageNum)}
            >
              {pageNum}
            </li>
          </ul>
        ))}
        {currentPage < totalPages && (
          <IoIosArrowForward
            className="w-8 h-8 sm:w-9 sm:h-9 p-1 hover:bg-slate-200 rounded cursor-pointer"
            onClick={() => setCurrentPage(currentPage + 1)}
          />
        )}
      </div>
    </section>
  );
};

export default BlogPagination;
