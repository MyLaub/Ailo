export const testimonialIds = ["emma", "oliver", "anna"] as const;

export type TestimonialId = (typeof testimonialIds)[number];