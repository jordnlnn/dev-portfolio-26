import Navbar from "../sections/Navbar";
import Hero from "/src/sections/Hero";
import About from "/src/sections/About";
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
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
