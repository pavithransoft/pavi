import clipboard from "./clipboard.png";
import navbar from "./navbar.png";
import blog_1 from "./blog_1.png";
import blog_2 from "./blog_2.png";

export const blog_menu = ["All", "Components", "Templates", "Applications"];

export const blog_list = [
  {
    image: clipboard,
    title: "Code Snippet Clipboard",
    description:
      "Develop a code snippet clipboard component using React and Tailwind CSS for efficient and visually appealing text copying functionality.",
    link: "https://github.com/pavithransoft/components/tree/main/clipboard",
    category: "Components",
  },
  {
    image: navbar,
    title: "Navbar",
    description:
      "Build a responsive React navbar using Tailwind CSS for a polished, adaptive design and React Router DOM for smooth page navigation, with routes dynamically rendered based on the application's state.",
    link: "https://github.com/pavithransoft/components/tree/main/navbar",
    category: "Components",
  },
  {
    image: blog_1,
    title: "Button",
    description: "Create different type of forms.",
    category: "Templates",
  },
  {
    image: blog_2,
    title: "Form",
    description: "Create different type of tables.",
    category: "Applications",
  },
];
