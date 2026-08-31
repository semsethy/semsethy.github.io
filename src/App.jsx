import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import Recommendation from "./sections/Recommendation";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Testimonials />
        <Recommendation />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
