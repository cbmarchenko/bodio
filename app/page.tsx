"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CountUp from "@/components/ui/CountUp";
import { StaggeredGrid, StaggeredItem } from "@/components/ui/StaggeredCards";
import {
  hero,
  stats,
  servicesTeaser,
  testimonials,
} from "@/lib/content";

const heroWords = ["Strategy.", "Systems.", "Results."];

const communityCards = [
  {
    icon: "🌐",
    title: "Diaspora & Cultural Communities",
    description:
      "Built Filipino diaspora growth channels across EU & UK from zero. Communities rooted in culture convert and retain better than any paid campaign.",
  },
  {
    icon: "🤝",
    title: "Partnership-Led Growth",
    description:
      "Embassy activations, broadcast partnerships (ABS-CBN/TFC), brand ambassador programs with attribution systems. Growth through trust, not just spend.",
  },
  {
    icon: "📊",
    title: "Community That Reports Up",
    description:
      "Every community initiative tied to KPIs: acquisition, engagement, retention. Leadership gets visibility; the community gets investment.",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative overflow-hidden"
        style={{ minHeight: "90vh" }}
      >
        {/* Gradient background with parallax */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 animate-gradient"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e40af] via-[#1a35a0] to-pink/50" style={{ backgroundSize: "200% 200%" }} />
        </motion.div>

        {/* Floating orbs */}
        <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-pink/20 blur-3xl orb-1 pointer-events-none" />
        <div className="absolute bottom-10 right-[15%] w-96 h-96 rounded-full bg-sapphire/30 blur-3xl orb-2 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-white/5 blur-2xl orb-1 pointer-events-none" />

        <div className="absolute inset-0 dot-pattern opacity-20" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 flex items-center" style={{ minHeight: "90vh" }}>
          <div className="w-full grid md:grid-cols-[1fr_auto] gap-12 items-center py-20">
            {/* Text */}
            <div className="text-center md:text-left order-2 md:order-1">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6 flex justify-center md:justify-start"
              >
                <span className="inline-flex items-center gap-2 text-xs font-medium text-white/80 border border-white/25 rounded-full px-4 py-1.5 backdrop-blur-sm bg-white/5">
                  ✦ Marketing · Operations · AI Training
                </span>
              </motion.div>

              <div className="mb-6 flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2">
                {heroWords.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
                    className="text-5xl md:text-7xl font-bold text-white"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-lg md:text-xl text-white/80 max-w-2xl mb-8"
              >
                {hero.subheadline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10"
              >
                <Button href={hero.ctaPrimary.href} variant="cta" className="animate-pulse-glow">
                  {hero.ctaPrimary.label}
                </Button>
                <Button href={hero.ctaSecondary.href} variant="outline">
                  {hero.ctaSecondary.label}
                </Button>
              </motion.div>

              {/* Hero stats row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 text-white/60 text-sm"
              >
                <span>13+ Years Experience</span>
                <span className="text-white/30">·</span>
                <span>£3.5M+ Volume Managed</span>
                <span className="text-white/30">·</span>
                <span>4 Global Markets</span>
              </motion.div>
            </div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="order-1 md:order-2 flex justify-center"
            >
              <div className="animate-float">
                <div className="relative w-52 h-52 md:w-72 md:h-72 rounded-full p-1.5 bg-gradient-to-br from-sapphire to-pink shadow-2xl animate-glow-ring">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-sapphire to-pink flex items-center justify-center">
                    <span className="text-5xl md:text-6xl font-bold text-white/90 select-none">CB</span>
                    <Image
                      src="/claire.jpg"
                      alt="Claire Bicong"
                      fill
                      className="object-cover rounded-full"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <p className="text-2xl md:text-3xl font-bold gradient-text">
                  <CountUp
                    value={parseFloat(stat.value)}
                    suffix={stat.value.includes("+") ? "+" : ""}
                  />
                </p>
                <p className="text-sm text-muted mt-1">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
              Community isn&apos;t a channel. It&apos;s your growth engine.
            </h2>
            <p className="text-muted text-center max-w-2xl mx-auto mb-16">
              The most sustainable growth comes from people who trust you and
              talk about you. I build communities that convert.
            </p>
          </AnimatedSection>

          <StaggeredGrid className="grid md:grid-cols-3 gap-6 mb-16">
            {communityCards.map((card) => (
              <StaggeredItem key={card.title}>
                <Card className="h-full">
                  <span className="text-3xl mb-4 block">{card.icon}</span>
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {card.description}
                  </p>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredGrid>

          <AnimatedSection>
            <blockquote className="text-center max-w-3xl mx-auto mb-10">
              <p className="text-2xl md:text-3xl font-bold gradient-text leading-snug">
                &ldquo;People don&apos;t follow brands. They follow people they
                trust. I&apos;ve spent 13 years showing up in communities,
                Filipino diaspora across EU, UK, and APAC, earning that trust
                and turning it into growth.&rdquo;
              </p>
              <p className="text-muted text-sm mt-4">
                Claire Bicong, Marketing Specialist &amp; Community Builder
              </p>
            </blockquote>
            <div className="text-center">
              <Button href="/contact" variant="cta" className="animate-pulse-glow">
                Let&apos;s Build Yours &rarr;
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="bg-white dot-pattern">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
              What I do
            </h2>
          </AnimatedSection>
          <StaggeredGrid className="grid md:grid-cols-3 gap-6">
            {servicesTeaser.map((service) => (
              <StaggeredItem key={service.title}>
                <Card>
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredGrid>
        </div>
      </section>

      {/* AI Training Band */}
      <section className="bg-sapphire text-white relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-4">
              AI Training for Real Teams
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Practical workshops that turn AI curiosity into daily productivity.
              Built for how your team actually works.
            </p>
            <Button href="/ai-training" variant="cta" className="animate-pulse-glow">
              Explore AI Training
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
              What clients say
            </h2>
          </AnimatedSection>
          <StaggeredGrid className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <StaggeredItem key={i}>
                <Card>
                  <p className="text-muted italic leading-relaxed mb-4 text-sm">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-sm">{t.author}</p>
                    <p className="text-muted text-xs">{t.role}</p>
                  </div>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredGrid>
        </div>
      </section>
    </>
  );
}
