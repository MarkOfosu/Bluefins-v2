// src/app/pricing/page.tsx
import Navbar from '../../components/Navbar';
import Pricing from '../../components/Pricing';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Pricing & Membership | Ghana BlueFins Swim Club',
  description: 'View our flexible pricing plans and membership options for competitive swim team, learn-to-swim programs, and private lessons.',
}

export default function PricingPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <div className="pt-24"> {/* Add padding to account for the fixed navbar */}
        <Pricing />
      </div>
      <Footer />
    </main>
  );
}