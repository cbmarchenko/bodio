import type { Metadata } from "next";
import { pageMeta, services } from "@/lib/content";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: pageMeta.services.title,
  description: pageMeta.services.description,
};

export default function ServicesPage() {
  return <ServicesClient services={services} />;
}
