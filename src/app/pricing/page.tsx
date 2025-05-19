// src/app/pricing/page.tsx
import Pricing from '../../components/Pricing';

export const metadata = {
  title: 'Pricing & Membership | Ghana BlueFins Swim Club',
  description: 'View our flexible pricing plans and membership options for competitive swim team, learn-to-swim programs, and private lessons.',
}

export default function PricingPage() {
  return (
    <main className="bg-white">
      <div className="pt-24"> {/* Add padding to account for the fixed navbar */}
        <Pricing />
      </div>
    </main>
  );
}