import Navbar from "../components/layout/Navbar";
import Hero from "/src/sections/Hero";
import About from "/src/sections/About";
import Experience from "/src/sections/Experience";
import Projects from "/src/sections/Projects";
import Contact from "/src/sections/Contact";
import Footer from "/src/sections/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
