import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Curriculum from "@/components/Curriculum";
import Effects from "@/components/Effects";
import Teacher from "@/components/Teacher";
import Apply from "@/components/Apply";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <main>
        <Hero />
        <About />
        <Curriculum />
        <Effects />
        <Teacher />
        <Apply />
      </main>
      <Footer />
    </>
  );
}
