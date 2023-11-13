const sumTotalBenefit = (appliedEvents) => {
	if (appliedEvents.canApplyEvents) {
		const { xmas, star, week } = appliedEvents;
		return xmas + star + week[1];
	}
	return 0;
};

export default sumTotalBenefit;
