import Hero from "@/components/hero";
import Footer from "@/components/footer";
import About from "@/components/about";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center relative">
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
