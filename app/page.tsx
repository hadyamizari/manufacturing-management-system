import { NavbarSimple } from '@/components/Navbar/Navbar';
import Assets from '@/pages/assets';

export default function HomePage() {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar Navbar */}
      <NavbarSimple />

      {/* Main Content Area */}
      <div style={{ flex: 1 }}>
        <Assets />
      </div>
    </div>
  );
}
