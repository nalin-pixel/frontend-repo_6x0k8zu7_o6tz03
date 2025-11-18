import React from "react";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import WhyFallsShort from "./components/WhyFallsShort";
import Solution from "./components/Solution";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/50 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold text-white">UltraLearn</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            <a href="#problems" className="hover:text-white">Struggles</a>
            <a href="#solution" className="hover:text-white">Solution</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#social-proof" className="hover:text-white">Results</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <a id="get-started" href="#" className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 text-sm font-medium">Try Free</a>
        </div>
      </header>

      <main>
        <Hero />
        <Problems />
        <WhyFallsShort />
        <Solution />
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>

      <footer className="border-t border-white/5 py-10 text-center text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} UltraLearn. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
