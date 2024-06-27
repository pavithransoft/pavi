import NavBar from "./components/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import SideMenu from "./components/SideMenu";
import { SideMenuProvider } from "./context/SideMenuContext";

function App() {
  return (
    <SideMenuProvider>
      <div className="bg-slate-300 font-poppins">
        <NavBar />
        <SideMenu />
        <Home />
        <About />
        <Skills />
        <Projects />
      </div>
    </SideMenuProvider>
  );
}

export default App;
