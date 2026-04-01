import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Educator } from "@/components/Educator";
import { Methodology } from "@/components/Methodology";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Educator />
        <Methodology />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
