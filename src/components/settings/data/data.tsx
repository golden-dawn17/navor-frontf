"use client";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

import { Airplay } from "lucide-react";
import { Cloud } from "lucide-react";

export const labels = [
  {
    value: "iam",
    label: "IAM",
  },
  {
    value: "security_and_privacy",
    label: "Security & Privacy",
  },
  {
    value: "compliance",
    label: "Compliance",
  },
];

export const types = [
  {
    value: "binary",
    label: "Binary",
  },
  {
    value: "multi_class",
    label: "Multi Class",
  },
];

export const models = [
  {
    value: "sbert",
    label: "SBERT"
  },
  {
    value: "llm",
    label: "LLM"
  },
];
