import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BlogList = ({ paginatedBlogs, hoveredIndex, setHoveredIndex }) => {
  return (
    <div className="w-5/6 sm:w-3/4 m-auto grid sm:grid-cols-2 xl:grid-cols-3 gap-10 py-10">
      {paginatedBlogs.map((list, index) => (
        <div
          key={index}
          className="border rounded-md bg-white hover:bg-slate-200 p-3 relative"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img src={list.image} alt={list.title} />
          <p className="py-5 font-medium text-lg text-center">{list.title}</p>
          <p className="text-sm pb-3">{list.description}</p>
          {hoveredIndex === index && (
            <div className="absolute inset-0 bg-opacity-0 grid place-items-center text-slate-950 font-medium">
              <span className="bg-purple-900 text-white px-2 py-1 rounded cursor-pointer z-40">
                <Link
                  to={list.link}
                  target="_blank"
                  className="flex items-center gap-5"
                >
                  View More <FaGithub className="h-5 w-5" />
                </Link>
              </span>
              <div className="absolute inset-0 bg-opacity-40 bg-slate-500 z-0 rounded-md"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Prop validation using PropTypes
BlogList.propTypes = {
  paginatedBlogs: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired, // Blog image URL
      title: PropTypes.string.isRequired, // Blog title
      description: PropTypes.string.isRequired, // Blog description
      link: PropTypes.string.isRequired, // Link to the full blog
    })
  ).isRequired, // paginatedBlogs is required
  hoveredIndex: PropTypes.number, // hoveredIndex is optional (can be null)
  setHoveredIndex: PropTypes.func.isRequired, // Function to set the hovered index
};

export default BlogList;
