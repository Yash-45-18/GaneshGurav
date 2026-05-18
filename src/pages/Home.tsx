import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { PortfolioPreview } from '@/components/sections/PortfolioPreview';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { Testimonials } from '@/components/sections/Testimonials';
import { InstagramPreview } from '@/components/sections/InstagramPreview';
import { CTA } from '@/components/sections/CTA';

export function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <PortfolioPreview />
      <ServicesPreview />
      <Testimonials />
      <InstagramPreview />
      <CTA />
    </main>
  );
}
