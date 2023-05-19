import "./App.css";
import Images from "./components/Images";
import Navbar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <>
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Images />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
    </>
  );
}

export default App;
