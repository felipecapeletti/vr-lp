import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0f0f1a] text-white">
      <Hero />
      <About />
      <Features />
      <Projects />
      <Footer />
    </main>
  );
}
