import type { Metadata } from "next";
import { pageMeta, aiTraining } from "@/lib/content";
import AITrainingClient from "./AITrainingClient";

export const metadata: Metadata = {
  title: pageMeta["ai-training"].title,
  description: pageMeta["ai-training"].description,
};

export default function AITrainingPage() {
  return <AITrainingClient data={aiTraining} />;
}
