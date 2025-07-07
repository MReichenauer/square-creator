const currentBreakpoint = (currentWidth: number) => {
	const breakPoints = {
		xs: 480,
		sm: 697,
		md: 768,
		lg: 1024,
		xl: 1439,
		xxl: 1440,
	};
	return {
		xs: currentWidth <= breakPoints.xs,
		sm: currentWidth > breakPoints.xs && currentWidth <= breakPoints.sm,
		md: currentWidth > breakPoints.sm && currentWidth <= breakPoints.md,
		lg: currentWidth > breakPoints.md && currentWidth <= breakPoints.lg,
		xl: currentWidth > breakPoints.lg && currentWidth <= breakPoints.xl,
		xxl: currentWidth > breakPoints.xl,
	};
};

export { currentBreakpoint };
