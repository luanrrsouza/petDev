import { About } from "./_components/About";
import { Hero } from "./_components/Hero";
import { Services } from "./_components/Services";
import { Testimonials } from "./_components/Testimonials";

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Testimonials />
    </main>
  );
}

export default Home;
