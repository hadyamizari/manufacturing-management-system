import { rgba } from '@mantine/core';
import { NavbarSimple } from '@/components/Navbar/Navbar';
import Assets from '@/pages/assets';

export default function HomePage() {
  return (
    <div style={{ display: 'flex', backgroundColor: rgba('#f1f3f5', 1) }}>
      {/* Sidebar Navbar */}
      <NavbarSimple />

      {/* Main Content Area */}
      <div style={{ flex: 1 }}>
        <Assets />
      </div>
    </div>
  );
}
