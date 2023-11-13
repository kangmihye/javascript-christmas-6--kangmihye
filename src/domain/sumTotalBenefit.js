const sumTotalBenefit = (appliedEvents) => {
	if (appliedEvents.canApplyEvents) {
		const { xmas, star, week, freebie } = appliedEvents;
		return freebie ? xmas + star + week[1] + 25000 : xmas + star + week[1];
	}
	return 0;
};

export default sumTotalBenefit;
