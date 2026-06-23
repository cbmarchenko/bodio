import type { Metadata } from "next";
import { pageMeta, portfolioProjects } from "@/lib/content";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: pageMeta.portfolio.title,
  description: pageMeta.portfolio.description,
};

export default function PortfolioPage() {
  return <PortfolioClient projects={portfolioProjects} />;
}
