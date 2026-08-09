import { Header } from "@/components/layout";
import { Features, Hero } from "@/views/home";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <Hero />
        <Features />
      </main>
    </>
  );
}
