const BlogList = ({ paginatedBlogs, hoveredIndex, setHoveredIndex }) => {
  return (
    <div className="w-3/4 m-auto grid grid-cols-3 gap-10 py-10">
      {paginatedBlogs.map((list, index) => (
        <div
          key={index}
          className="border rounded-md bg-white hover:bg-slate-200 text-center p-3 relative"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="relative">
            <img src={list.image} alt={list.title} />
            <p className="absolute bottom-0 right-0 bg-yellow-500 px-2 py-1 text-sm font-bold">
              {list.tag}
            </p>
          </div>
          <p className="py-5 font-medium text-lg">{list.title}</p>
          <p className="text-xs pb-3">{list.description}</p>
          {hoveredIndex === index && (
            <div className="absolute inset-0 bg-opacity-0 grid place-items-center text-slate-950 font-semibold">
              <span className="bg-white px-2 rounded cursor-pointer z-40">
                View More
              </span>
              <div className="absolute inset-0 bg-opacity-40 bg-slate-200 h-[70%] z-0"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
