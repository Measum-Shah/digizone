import Navbar from "./components/navbar/Navbar";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Portfolio from "./components/sections/Portfolio";
import Team from "./components/sections/Team";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      {/* Sections */}
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
