import HeroSection from './HeroSection';
import MainNavigation from './MainNavigation';
import ScheduleTabs from './ScheduleTabs';
import Philosophy from './Philosophy';
import Testimonials from './Testimonials';
import FAQSection from './FAQSection';
import ContactStrip from './ContactStrip';

export default function CompetitiveTeamPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <MainNavigation />
      <div className="container mx-auto px-4 md:px-8 py-8">
        <ScheduleTabs />
        <Philosophy />
        <Testimonials />
        <FAQSection />
        <ContactStrip />
      </div>
    </main>
  );
} 