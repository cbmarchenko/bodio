import type { Metadata } from "next";
import { pageMeta, contactForm } from "@/lib/content";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: pageMeta.contact.title,
  description: pageMeta.contact.description,
};

export default function ContactPage() {
  return <ContactClient data={contactForm} />;
}
