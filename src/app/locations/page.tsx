
import Location from '../../components/Location';

export const metadata = {
  title: 'Our Locations | Ghana BlueFins Swim Club',
  description: 'Find Ghana BlueFins swim training facilities across Accra, including Splash Social Centre, Regimanuel Gray Estate, and JMJ Sports & Events Centre.',
}

export default function LocationsPage() {
  return (
    <main className="bg-white">
      <div className="pt-24"> {/* Add padding to account for the fixed navbar */}
        <Location />
      </div>
    </main>
  );
}
