import React from "react";

const Testimonial = ({ quote, author }) => (
  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
    <p className="text-slate-200 italic">“{quote}”</p>
    <p className="text-slate-400 mt-3">— {author}</p>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-16 px-6" id="social-proof">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">Trusted by Students Nationwide</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Testimonial
            quote="I cut my study time in half, raised my GPA by 0.5 points, and for the first time, actually felt ready for finals. The AI tutor made it easy to understand even the hardest concepts."
            author="Sarah K., UC Berkeley Junior, Molecular & Cell Biology"
          />
          <Testimonial
            quote="UltraLearn’s flashcard quizzes are the reason I finally got an A in Calculus. I no longer have to cram at the last minute."
            author="Marcus T., Georgia Tech Sophomore"
          />
          <Testimonial
            quote="Organizing my psychology notes took seconds. Instant quizzes helped me remember what mattered. My final score improved from 72 percent to 89 percent."
            author="Ralph M., University of Texas Sophomore"
          />
        </div>
        <p className="text-slate-300 text-center max-w-3xl mx-auto mt-10">
          On average, students report saving two hours of study time each week when using UltraLearn, while also improving their grades by twenty-three percent after just one semester (according to a Fall 2024 user survey).
        </p>
        <div className="text-center mt-8">
          <a href="#get-started" className="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 font-semibold shadow-[0_10px_30px_-10px_rgba(59,130,246,0.6)] transition">
            See UltraLearn in Action
          </a>
          <p className="text-slate-400 mt-3">Join students at Stanford, MIT, Georgia Tech, and fifty other campuses who use UltraLearn to master their toughest courses.</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
