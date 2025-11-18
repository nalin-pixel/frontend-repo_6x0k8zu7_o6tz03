import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-32 -right-32 w-[34rem] h-[34rem] bg-cyan-400/10 blur-3xl rounded-full" />
      </div>
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          UltraLearn: The Learning Intelligence That Teaches, Tracks, Organizes, and gets you towards Mastery
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
          Stop jumping between apps and forgetting what you studied.
          UltraLearn gives you answers, explanations, pictures, and quizzes—all in one place.
          Study simple topics fast or build full courses your way.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#get-started" className="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 font-semibold shadow-[0_10px_30px_-10px_rgba(59,130,246,0.6)] transition">
            Try it now for free
          </a>
          <a href="#how" className="inline-flex items-center justify-center rounded-xl border border-white/10 hover:border-white/20 text-slate-200 px-6 py-3 font-medium backdrop-blur-sm bg-white/5 transition">
            See how it works
          </a>
        </div>
        <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-2 gap-3 text-left max-w-3xl mx-auto">
          {[
            "Active learning AI tutor — Develops conceptual understanding through guided questioning",
            "Personalized course builder — Creates custom study systems with a single prompt",
            "Intelligent progress tracking — Real-time mastery indicators and performance analytics",
            "Automated content generation — Produces flashcards, quizzes, and visual aids instantly",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
              <span className="mt-1 text-green-400">✅</span>
              <span className="text-slate-200">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
