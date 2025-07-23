import { BREAKPOINTS } from "@assets/breakpoints/BREAKPOINTS";

const currentBreakpoint = (currentWidth: number) => {
	return {
		xs: currentWidth <= BREAKPOINTS.xs,
		sm: currentWidth > BREAKPOINTS.xs && currentWidth <= BREAKPOINTS.sm,
		md: currentWidth > BREAKPOINTS.sm && currentWidth <= BREAKPOINTS.md,
		lg: currentWidth > BREAKPOINTS.md && currentWidth <= BREAKPOINTS.lg,
		xl: currentWidth > BREAKPOINTS.lg && currentWidth <= BREAKPOINTS.xl,
		xxl: currentWidth > BREAKPOINTS.xl,
	};
};

export { currentBreakpoint };
