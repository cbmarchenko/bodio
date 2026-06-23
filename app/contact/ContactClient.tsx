"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/content";

type ContactData = {
  headline: string;
  subheadline: string;
  serviceOptions: string[];
};

export default function ContactClient({ data }: { data: ContactData }) {
  return (
    <>
      <section className="bg-cream dot-pattern">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left column */}
            <div>
              <AnimatedSection>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                  {data.headline}
                </h1>
                <p className="text-muted leading-relaxed mb-8">
                  {data.subheadline}
                </p>
              </AnimatedSection>

              {/* Calendly embed */}
              <AnimatedSection delay={0.2}>
                <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center">
                  <iframe
                    src="https://calendly.com/clairebicong/30min"
                    width="100%"
                    height="630"
                    frameBorder="0"
                    title="Schedule a call with Claire"
                    className="rounded-lg"
                  />
                  <p className="text-xs text-muted/60 mt-3">
                    Or email{" "}
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-gold hover:underline"
                    >
                      {siteConfig.email}
                    </a>
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <AnimatedSection delay={0.15}>
              {/* TODO: wire to Resend or Formspree for production */}
              <form
                action={`mailto:${siteConfig.email}`}
                method="POST"
                encType="text/plain"
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-1"
                  >
                    Company{" "}
                    <span className="text-muted font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium mb-1"
                  >
                    What do you need?
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition"
                  >
                    <option value="">Select a service</option>
                    {data.serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Tell me more
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-pink text-white font-semibold py-3 rounded-lg hover:bg-pink/90 transition-colors text-sm animate-pulse-glow"
                >
                  Submit
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
