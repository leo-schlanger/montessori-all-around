import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Educator } from "@/components/Educator";
import { Methodology } from "@/components/Methodology";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WaveDivider } from "@/components/WaveDivider";

export function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WaveDivider from="#E9E1D8" to="#FFFFFF" />
        <About />
        <WaveDivider from="#FFFFFF" to="#E9E1D8" />
        <Educator />
        {/* Educator and Methodology both bege - subtle wave between them */}
        <Methodology />
        <WaveDivider from="#E9E1D8" to="#FFFFFF" />
        <Services />
        <WaveDivider from="#FFFFFF" to="#E9E1D8" />
        <Testimonials />
        <WaveDivider from="#E9E1D8" to="#FFFFFF" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
