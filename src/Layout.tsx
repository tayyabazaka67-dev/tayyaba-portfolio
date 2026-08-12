import { type ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import BackToTop from './BackToTop';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10 flex-1 pt-24">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}
