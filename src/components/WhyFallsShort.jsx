import React from "react";

const WhyFallsShort = () => {
  const items = [
    {
      title: "ChatGPT",
      body:
        "Provides fast answers but no progress tracking. It does not support true understanding or retention.",
    },
    {
      title: "Quizlet",
      body:
        "Gives you isolated flashcards with no connection between lessons.",
    },
    {
      title: "Docs & YouTube",
      body:
        "Leave you with disorganized notes and random videos, so there is no plan.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-slate-950/60 border-t border-white/5" id="pitfalls">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">Why Most AI Study Tools Fall Short</h2>
        <p className="text-slate-300 text-center max-w-3xl mx-auto mb-10">
          The result is passive learning that only seems like progress. Eighty-six percent of students use AI, but over half say it does not help them really learn.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.title} className="p-6 rounded-2xl bg-slate-900/60 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-2">{i.title}</h3>
              <p className="text-slate-300">{i.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFallsShort;
