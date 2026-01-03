import Hero from "/src/sections/Hero";
import Projects from "/src/sections/Projects";
import About from "/src/sections/About";
import Footer from "/src/sections/Footer";
import Navigation from "../sections/Navigation";

export default function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
}
