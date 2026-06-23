"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { StaggeredGrid, StaggeredItem } from "@/components/ui/StaggeredCards";

type Project = {
  category: string;
  title: string;
  description: string;
  result: string;
};

const filters = ["All", "Marketing", "Operations", "AI", "Community"];

export default function PortfolioClient({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      <section className="bg-cream dot-pattern">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
              Portfolio
            </h1>
            <p className="text-muted text-center max-w-xl mx-auto mb-12">
              Selected projects across marketing, operations, AI, and community.
            </p>
          </AnimatedSection>

          {/* Filter tabs */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    active === f
                      ? "bg-sapphire text-white shadow-md"
                      : "bg-white text-muted hover:bg-gray-100"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Project grid */}
          <StaggeredGrid key={active} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <StaggeredItem key={project.title}>
                <Card>
                  <span className="inline-block text-xs bg-pink/10 text-pink px-3 py-1 rounded-full font-medium mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <p className="text-gold font-semibold text-sm">
                    {project.result}
                  </p>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredGrid>
        </div>
      </section>
    </>
  );
}
