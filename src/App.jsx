import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      {/* Ensures the scroll position is reset when navigating to a new route */}
      <ScrollToTop />
      <Routes>
        {/* The parent route with nested routes */}
        <Route path="/" element={<Layout />}>
          {/* The index route (equivalent to "/" path) */}
          <Route index element={<Home />} />
          {/* Other nested routes */}
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
