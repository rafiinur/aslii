import FAQ from "@/components/sections/faq";
import Features from "@/components/sections/features";
import Hero from "@/components/hero";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import About from "@/components/sections/about";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <About />
      <FAQ />
      <Footer />
    </>
  );
}
