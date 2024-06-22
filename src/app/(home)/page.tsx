import Banner from "./banner";
import AboutMe from "./about-me";

export default function Home() {
  return (
    <main className="flex min-h-[100dvh] flex-col">
      <Banner />
      <AboutMe />
    </main>
  );
}
