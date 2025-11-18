import React from "react";

const QA = ({ q, a }) => (
  <details className="group p-5 rounded-xl bg-slate-900/60 border border-white/10">
    <summary className="cursor-pointer select-none text-white font-medium flex items-center justify-between">
      <span>{q}</span>
      <span className="text-slate-400 group-open:rotate-180 transition">⌄</span>
    </summary>
    <p className="text-slate-300 mt-3 leading-relaxed">{a}</p>
  </details>
);

const FAQ = () => {
  const items = [
    {
      q: "How is UltraLearn different from ChatGPT or Quizlet?",
      a: "UltraLearn asks you questions and helps you track your mastery. It organizes your materials and uses learning science so you actually retain information, not just memorize it.",
    },
    {
      q: "Is it really free?",
      a: "Yes. You get unlimited access to the AI chat tutor, can create up to three courses, and use all basic features with no credit card required.",
    },
    {
      q: "Will this work for STEM, humanities, and pre-med courses?",
      a: "Absolutely. UltraLearn includes advanced explanations, practice exam modules, and essay structuring tools for every major.",
    },
    {
      q: "My notes are everywhere. Can you organize them?",
      a: "Yes. Upload PDFs, slides, or paste your notes. UltraLearn handles the organization for you.",
    },
  ];

  return (
    <section id="faq" className="py-16 px-6 bg-slate-950/60">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {items.map((i) => (
            <QA key={i.q} q={i.q} a={i.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
