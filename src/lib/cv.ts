import rawCv from "@cv";
import type { CV } from "@/types";

/**
 * Single typed entry point for the résumé data. Components import from here
 * rather than reaching into `cv.json` directly, so the shape is validated in
 * one place and optional sections can be defaulted to empty arrays.
 */
export const cv = rawCv as CV;

export const basics = cv.basics;
export const work = cv.work ?? [];
export const education = cv.education ?? [];
export const certificates = cv.certificates ?? [];
export const skills = cv.skills ?? [];
export const projects = cv.projects ?? [];
export const languages = cv.languages ?? [];
