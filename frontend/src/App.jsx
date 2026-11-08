import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import ReachUs from "./components/ReachUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-w-0 overflow-x-hidden">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-charcoal"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Projects />
        <ReachUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
