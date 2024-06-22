import Banner from "./banner";
import AboutMe from "./about-me";

export default function Home() {
  return (
    <main className="flex min-h-[100dvh] flex-col">
      <Banner />
      <AboutMe />
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">
            My Experiences
          </h2>
          <div>TODO</div>
        </div>
      </section>
    </main>
  );
}
