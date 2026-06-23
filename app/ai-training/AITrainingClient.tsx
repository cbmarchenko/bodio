"use client";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { StaggeredGrid, StaggeredItem } from "@/components/ui/StaggeredCards";

type Track = { title: string; description: string; format: string };
type AITrainingData = {
  headline: string;
  subheadline: string;
  intro: string;
  tracks: Track[];
  formats: string[];
};

export default function AITrainingClient({ data }: { data: AITrainingData }) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sapphire to-pink/70 animate-gradient" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white animate-fade-up">
            {data.headline}
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto animate-fade-up-delay-1">
            {data.subheadline}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
          <AnimatedSection>
            <p className="text-muted leading-relaxed text-center">
              {data.intro}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Department Tracks */}
      <section className="bg-cream dot-pattern">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
              Department Tracks
            </h2>
          </AnimatedSection>
          <StaggeredGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.tracks.map((track) => (
              <StaggeredItem key={track.title}>
                <Card className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">{track.title}</h3>
                    <p className="text-muted text-sm leading-relaxed mb-4">
                      {track.description}
                    </p>
                  </div>
                  <span className="inline-block text-xs bg-soft-gold text-charcoal px-3 py-1 rounded-full font-medium w-fit">
                    {track.format}
                  </span>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredGrid>
        </div>
      </section>

      {/* Format pills */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 text-center">
          <AnimatedSection>
            <p className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">
              Available Formats
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {data.formats.map((format) => (
                <span
                  key={format}
                  className="bg-soft-gold text-charcoal text-sm font-medium px-4 py-2 rounded-full"
                >
                  {format}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-sapphire text-white relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-4">
              Ready to upskill your team?
            </h2>
            <Button href="/contact" variant="cta" className="animate-pulse-glow">
              Request a Training Proposal
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
