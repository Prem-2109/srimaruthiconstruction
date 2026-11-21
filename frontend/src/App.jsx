import { lazy, Suspense } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";

// Lazy load below-the-fold sections for maximum initial page performance
const VaastuSection = lazy(() => import("./components/VaastuSection"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const ReachUs = lazy(() => import("./components/ReachUs"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-white text-slate-900 selection:bg-amber-600 selection:text-white">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-amber-700 focus:px-4 focus:py-2.5 focus:text-white focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Projects />
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <VaastuSection />
          <Testimonials />
          <ReachUs />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="min-h-[100px]" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
