import Hero from "@/components/hero";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-[calc(100lvh-2rem)]">
      <Hero />
      <Footer />
    </main>
  );
}
