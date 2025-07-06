const currentBreakpoint = (currentWidth: number) => {
	const breakPoints = {
		xs: 480,
		s: 768,
		m: 1024,
		l: 1439,
	};
	return {
		xs: currentWidth <= breakPoints.xs,
		s: currentWidth > breakPoints.xs && currentWidth <= breakPoints.s,
		m: currentWidth > breakPoints.s && currentWidth <= breakPoints.m,
		l: currentWidth > breakPoints.m && currentWidth <= breakPoints.l,
		xl: currentWidth > breakPoints.l,
	};
};

export { currentBreakpoint };
