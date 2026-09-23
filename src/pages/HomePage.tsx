import { Navbar } from '../components/organisms/Navbar/Navbar';
import { Hero } from '../components/organisms/Hero/Hero';
import { Features } from '../components/organisms/Features/Features';
import { Categories } from '../components/organisms/Categories/Categories';
import { Templates } from '../components/organisms/Templates/Templates';
import { Stats } from '../components/organisms/Stats/Stats';
import { About } from '../components/organisms/About/About';
import { Footer } from '../components/organisms/Footer/Footer';
import { FloatingParticles } from '../components/organisms/FloatingParticles/FloatingParticles';

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Categories />
        <Templates />
        <Stats />
        <About />
      </main>
      <Footer />
      <FloatingParticles count={25} />
    </>
  );
}
