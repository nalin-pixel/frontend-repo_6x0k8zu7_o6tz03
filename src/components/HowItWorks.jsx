import React from "react";

const Step = ({ title, body }) => (
  <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10">
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-slate-300">{body}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <section id="how" className="py-16 px-6 bg-slate-950/60">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">How UltraLearn Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Step
            title="Structured Learning"
            body="Upload your notes or syllabus. Instantly get a customized course and guided study plan."
          />
          <Step
            title="Flexible AI Chat"
            body="Just ask a question or paste any material. Get fast, interactive help and instant answers—no setup needed."
          />
          <Step
            title="Master Every Topic for Good"
            body="Review with automated spaced repetition and receive targeted feedback. You can walk into exams with confidence, knowing you have retained every concept."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
