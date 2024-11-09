import HeroSection from "@/components/hero";
import Cards from "@/components/cards";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <section className="h-screen snap-start">
        <HeroSection />
      </section>
      <section className="h-screen snap-start">
        <Cards />
      </section>
    </div>
  );
}
