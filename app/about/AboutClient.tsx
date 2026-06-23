"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CountUp from "@/components/ui/CountUp";
import { StaggeredGrid, StaggeredItem } from "@/components/ui/StaggeredCards";
import { aboutContent } from "@/lib/content";

function PhotoWithFallback() {
  return (
    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sapphire to-pink flex items-center justify-center">
        <span className="text-6xl md:text-7xl font-bold text-white/90">CB</span>
      </div>
      <Image
        src="/claire.jpg"
        alt="Claire Bicong"
        fill
        className="object-cover"
        priority
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
    </div>
  );
}

export default function AboutClient() {
  const data = aboutContent;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sapphire via-sapphire to-pink/80 animate-gradient" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <PhotoWithFallback />
            </motion.div>

            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-up">
                {data.headline}
              </h1>
              <p className="text-white/80 leading-relaxed text-lg mb-8 animate-fade-up-delay-1">
                {data.intro}
              </p>
              <div className="animate-fade-up-delay-2">
                <Button href="/contact" variant="cta" className="animate-pulse-glow">
                  Let&apos;s work together
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {data.stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <p className="text-3xl md:text-4xl font-bold gradient-text">
                  <CountUp
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="text-muted text-sm mt-1">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="bg-cream dot-pattern">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
              What I Do
            </h2>
          </AnimatedSection>
          <StaggeredGrid className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.capabilities.map((cap) => (
              <StaggeredItem key={cap.title}>
                <Card className="h-full">
                  <h3 className="text-lg font-semibold mb-2">{cap.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {cap.description}
                  </p>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredGrid>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
              Experience
            </h2>
          </AnimatedSection>
          <div className="space-y-0">
            {data.timeline.map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative pl-8 pb-8 ${
                  i < data.timeline.length - 1 ? "timeline-line" : ""
                }`}
              >
                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-sapphire to-pink border-2 border-white shadow" />
                <h3 className="font-semibold text-base">{item.role}</h3>
                {item.company && (
                  <p className="text-sm text-pink font-medium">{item.company}</p>
                )}
                {item.period && (
                  <p className="text-xs text-muted mb-2">{item.period}</p>
                )}
                <p className="text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="bg-cream dot-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-10 gradient-text">
              Tools & Platforms
            </h2>
          </AnimatedSection>
          <StaggeredGrid className="flex flex-wrap justify-center gap-3">
            {data.tools.map((tool) => (
              <StaggeredItem key={tool}>
                <span className="inline-block bg-white text-charcoal text-sm font-medium px-4 py-2 rounded-full border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-pink/30">
                  {tool}
                </span>
              </StaggeredItem>
            ))}
          </StaggeredGrid>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-8">
          <AnimatedSection>
            <div className="text-center">
              <p className="text-xs uppercase tracking-wider text-muted mb-2 font-semibold">
                Education
              </p>
              <p className="text-sm text-charcoal">{data.education}</p>
            </div>
          </AnimatedSection>
          {data.certifications && data.certifications.length > 0 && (
            <AnimatedSection>
              <div className="text-center">
                <p className="text-xs uppercase tracking-wider text-muted mb-3 font-semibold">
                  Certifications
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {data.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="inline-block bg-cream text-charcoal text-xs font-medium px-3 py-1.5 rounded-full border border-gray-100"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sapphire text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-4">Ready to work together?</h2>
            <p className="text-white/70 mb-8">
              Let&apos;s build something that moves the needle.
            </p>
            <Button href="/contact" variant="cta" className="animate-pulse-glow">
              Get in Touch
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
