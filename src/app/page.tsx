import Hero from "@/components/hero";
import Footer from "@/components/footer";
import About from "@/components/about";
import Divider from "@/components/divider";
import Cook from "@/components/cook";
import SpotifyPlayer from "@/components/spotify-player";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center relative">
      <div className="max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-5xl mx-auto">
        <Hero />
        <About />
        <Divider />
        <Cook />
        <Divider />
        <SpotifyPlayer />
      </div>
      <Footer />
    </main>
  );
}
