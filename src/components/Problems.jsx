import React from "react";

const ProblemCard = ({ title, body }) => (
  <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-white/20 transition">
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-slate-300 leading-relaxed">{body}</p>
  </div>
);

const Problems = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" id="problems">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">Are These Your Study Struggles?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ProblemCard
            title="Anxiety Before Exams?"
            body="Sixty-seven percent of students report that mental health disrupts their study routines. Relying on re-reading notes often leaves you anxious and uncertain, even after hours of preparation."
          />
          <ProblemCard
            title="Overwhelmed by Scattered Tools?"
            body="Many students use multiple apps at once. Flashcards are in one app, explanations in another, and notes are scattered everywhere. Much of your energy goes into searching instead of learning. Forty-seven percent say time management is their top challenge."
          />
          <ProblemCard
            title="Unsure What You Actually Forgot?"
            body="Most students cannot pinpoint what they have truly mastered. Reviewing old material can feel safe, but hidden gaps remain. Research shows retrieval practice leads to retention that is three times better than passive review."
          />
        </div>
      </div>
    </section>
  );
};

export default Problems;
