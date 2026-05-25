import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Hero />
      </main>
    </div>
  );
}
