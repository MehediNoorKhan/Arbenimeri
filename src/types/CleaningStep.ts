export const CleaningStep = {
  CLEANING: "cleaning",
  NUMBER: "number",
  CONTACT: "contact",
} as const;

export type CleaningStepType =
  (typeof CleaningStep)[keyof typeof CleaningStep];
