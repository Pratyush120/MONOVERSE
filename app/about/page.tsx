import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Understanding reality through research, literature, philosophy, history, technology, and civilization.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-24 pb-32">
      <header className="mb-16">
        <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
          About Monoverse
        </h1>
        <p className="font-body text-2xl text-text-secondary leading-relaxed">
          Understanding reality through research, literature, philosophy, history, technology, and civilization.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none 
                      prose-p:font-body prose-p:text-lg prose-p:leading-relaxed prose-p:text-text-secondary
                      prose-headings:font-display prose-headings:text-foreground prose-headings:font-semibold
                      prose-li:text-text-secondary prose-li:font-body">
        
        <p>We live in an age of unlimited information and diminishing understanding.</p>
        <p>Every day, thousands of articles explain what happened. Few ask <em>why</em> it happened. Even fewer connect today&apos;s headlines with centuries of history, human psychology, philosophy, economics, science, and the long arc of civilization.</p>
        <p>Monoverse exists to close that gap.</p>
        <p>This is an independent research publication dedicated to exploring the ideas that shape our world—not through ideology or sensationalism, but through careful inquiry, evidence, and first-principles thinking.</p>
        
        <p className="text-xl font-medium text-foreground mt-8">At Monoverse, no subject exists in isolation.</p>
        <ul>
          <li>A technological breakthrough is also a story about economics and human behavior.</li>
          <li>A political conflict is inseparable from history.</li>
          <li>A philosophical question often becomes tomorrow&apos;s scientific discovery.</li>
          <li>A civilization rises—or declines—not because of a single event, but because of countless interconnected forces.</li>
        </ul>
        
        <p>Our goal is to uncover those connections.</p>
        <p>Rather than producing content designed for the next news cycle, Monoverse publishes work designed to remain valuable years from now—essays, research, long-form analysis, visual explainers, reading guides, and intellectual explorations that reward curiosity instead of feeding distraction.</p>
        
        <p className="text-xl font-medium text-foreground mt-8">Every article begins with a question.</p>
        <p>Not: <em>&quot;What should people believe?&quot;</em></p>
        <p>But:</p>
        <ul>
          <li><em>&quot;What is actually true?&quot;</em></li>
          <li><em>&quot;How do we know?&quot;</em></li>
          <li><em>&quot;What are we missing?&quot;</em></li>
          <li><em>&quot;What happens when we connect disciplines instead of separating them?&quot;</em></li>
        </ul>

        <h2 className="mt-16 mb-6">Disciplines</h2>
        <p>This publication draws from diverse fields, including:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <ul className="mt-0 mb-0">
            <li>Philosophy & Critical Thinking</li>
            <li>History & Civilizations</li>
            <li>Science & Emerging Technology</li>
            <li>Pop Culture & Cinema</li>
            <li>Economics & Public Policy</li>
          </ul>
          <ul className="mt-0 mb-0">
            <li>Psychology & Human Behaviour</li>
            <li>Literature & Culture</li>
            <li>Systems Thinking</li>
            <li>Research Methodology</li>
            <li>Future Studies</li>
          </ul>
        </div>

        <p className="text-xl font-medium text-foreground mt-8">Monoverse is built on a simple belief:</p>
        <p>Reality is never one-dimensional. The deeper you look, the more everything connects.</p>
        <p>Whether you are a student, researcher, builder, policymaker, entrepreneur, or simply someone who refuses to stop asking questions, Monoverse is a place to think more deeply about the world—and your place within it.</p>
        <p>Not to provide certainty. But to cultivate understanding.</p>
        <p className="font-semibold text-foreground">Because better questions create better thinking.<br/>And better thinking shapes better civilizations.</p>

        <hr className="my-16 border-border" />

        <h2 className="mb-6">Our Philosophy</h2>
        <p>We believe knowledge should not be consumed—it should be explored.</p>
        <p>We value evidence over opinion, depth over speed, curiosity over certainty, and nuance over outrage.</p>
        <p>Every article aims to leave the reader not merely more informed, but fundamentally changed in how they see the world.</p>
        <p>The objective is not to tell you what to think. It is to help you learn <em>how</em> to think.</p>

        <hr className="my-16 border-border" />

        <h2 className="mb-6">Why &quot;Monoverse&quot;?</h2>
        <p>The name combines two ideas.</p>
        <p><strong>Mono</strong> represents clarity, focus, and the search for fundamental principles.</p>
        <p><strong>Verse</strong> represents an ever-expanding universe of knowledge, ideas, stories, and human experience.</p>
        <p>Together, Monoverse reflects a simple conviction:</p>
        <p className="font-semibold text-foreground text-xl">The universe becomes more coherent when we learn to see the invisible threads connecting everything.</p>
      </div>
    </div>
  );
}
