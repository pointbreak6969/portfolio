import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
const Home = ({ refs }) => {
  return (
    <>
      <Hero ref={refs.home} refs={refs} />
      <About ref={refs.about} />
      <Projects ref={refs.projects} />
      <Contact ref={refs.contact} />
    </>
  );
};
export default Home;
