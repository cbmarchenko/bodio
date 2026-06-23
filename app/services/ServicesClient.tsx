"use client";

import Link from "next/link";
import Card from "@/components/ui/Card";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { StaggeredGrid, StaggeredItem } from "@/components/ui/StaggeredCards";

type Service = { title: string; description: string };

export default function ServicesClient({ services }: { services: Service[] }) {
  return (
    <>
      <section className="bg-cream dot-pattern">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
              Services
            </h1>
            <p className="text-muted text-center max-w-xl mx-auto mb-16">
              From strategy to execution, I help teams build systems that grow
              with them.
            </p>
          </AnimatedSection>

          <StaggeredGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <StaggeredItem key={service.title}>
                <Card className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="text-pink font-medium text-sm hover:underline"
                  >
                    Get in touch &rarr;
                  </Link>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredGrid>
        </div>
      </section>
    </>
  );
}
