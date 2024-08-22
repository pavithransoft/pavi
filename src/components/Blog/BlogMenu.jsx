import PropTypes from "prop-types";

const BlogMenu = ({ blog_menu, selectedCategory, setSelectedCategory }) => {
  return (
    <ul className="flex items-center justify-center gap-1 sm:gap-10 font-light text-slate-900 pb-7 border-b border-slate-300 text-sm sm:text-base">
      {blog_menu.map((menu, index) => (
        <li
          key={index}
          className={`hover:bg-slate-200 text-slate-900 px-2 py-1 rounded-md border-none cursor-pointer ${
            selectedCategory === menu ? "bg-slate-300 font-medium" : ""
          }`}
          onClick={() => setSelectedCategory(menu)}
        >
          {menu}
        </li>
      ))}
    </ul>
  );
};

// Prop validation using PropTypes
BlogMenu.propTypes = {
  blog_menu: PropTypes.arrayOf(PropTypes.string).isRequired, // Array of strings is required
  selectedCategory: PropTypes.string.isRequired, // Selected category should be a string and is required
  setSelectedCategory: PropTypes.func.isRequired, // Function to set the selected category is required
};

export default BlogMenu;
