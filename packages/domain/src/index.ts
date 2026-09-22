export type Purpose = "care" | "handoff" | "ai_assistance";
export type SecurityClass = "SHARED" | "HIGH" | "PROFESSIONAL_PRIVATE";
export type AssessmentStatus = "draft" | "signed" | "amended";
export type ConsentCategory = "care" | "handoff" | "ai_context";
export const isAuthoritativeAssessmentStatus = (s:AssessmentStatus) => s==="signed" || s==="amended";