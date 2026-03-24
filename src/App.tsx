import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Methodology } from "./components/Methodology";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Methodology />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
