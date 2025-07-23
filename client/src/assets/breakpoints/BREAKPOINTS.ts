/**
 * Defined breakpoints.
 *
 /**
 * Each breakpoint value is defined in pixels.
 * - xs: `Less than or equal to 480px.`
 * - sm: `Less than or equal to 697px.`
 * - md: `Less than or equal to 768px.`
 * - lg: `Less than or equal to 1024px.`
 * - xl: `Less than or equal to 1439px.`
 * - xxl: `Greater than or equal to 1440px.`
 */
const BREAKPOINTS = {
	xs: 480,
	sm: 697,
	md: 768,
	lg: 1024,
	xl: 1439,
	xxl: 1440,
} as const;

export { BREAKPOINTS };
