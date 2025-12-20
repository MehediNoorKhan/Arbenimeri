export const MovingStep = {
  FROM: "from",
  AFTER: "after",
  CLEANING: "cleaning",
  CONTACT: "contact",
} as const;

export type MovingStepType =
  (typeof MovingStep)[keyof typeof MovingStep];
