import React from "react";

const Feature = ({ title, body }) => (
  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-slate-300">{body}</p>
  </div>
);

const Solution = () => {
  return (
    <section className="py-16 px-6" id="solution">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">UltraLearn: Your Solution for Academic Excellence</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Feature
            title="Active Learning Tutor — Build True Understanding"
            body="UltraLearn’s AI guides you using Socratic prompts and retrieval practice. You answer first, then receive step-by-step explanations that make concepts stick. This approach is science-backed. Active learning increases test scores by fifty-four percent compared to passive methods."
          />
          <Feature
            title="Structured Study System — From Basics to Mastery"
            body="Every topic, resource, and note is organized into a personal learning sequence. You move from foundational ideas to advanced material, never getting lost or overwhelmed."
          />
          <Feature
            title="Real-Time Progress Tracking — Target Your Effort"
            body="Track precisely what you have mastered and discover what needs more attention. Instant indicators let you focus on weaknesses and avoid unnecessary repetition."
          />
          <Feature
            title="Gamified, Instant Content — Stay Motivated"
            body="UltraLearn automatically generates flashcards, quizzes, and visual study aids from your materials. You earn badges and build streaks as you practice, which have been shown to boost motivation and engagement."
          />
        </div>
      </div>
    </section>
  );
};

export default Solution;
