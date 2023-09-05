import Hero from "@/components/hero";
import Footer from "@/components/footer";
import About from "@/components/about";
import Divider from "@/components/divider";
import Cook from "@/components/cook";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center relative">
      <Hero />
      <About />
      <Divider />
      <Cook />
      <Footer />
    </main>
  );
}
