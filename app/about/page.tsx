import type { Metadata } from "next";
import { pageMeta } from "@/lib/content";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: pageMeta.about.title,
  description: pageMeta.about.description,
};

export default function AboutPage() {
  return <AboutClient />;
}
