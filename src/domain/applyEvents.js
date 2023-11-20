const applyEvents = (events, menuList) => {
	const appliedEvents = {
		canApplyEvents: false,
	};
	if (totalPrice >= 10000) {
		appliedEvents.canApplyEvents = true;
		appliedEvents.xmas = events.discountXmas();
		appliedEvents.week = events.discountWeek(menuList);
		appliedEvents.star = events.discountStar();
		appliedEvents.freebie = events.canGetFreebie(menuList.sumTotalPrice());
	}

	return appliedEvents;
};

export default applyEvents;
