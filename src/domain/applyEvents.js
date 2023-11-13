const applyEvents = (menuList, discountEvents) => {
	const result = {
		canApplyEvents: true,
	};

	//총주문 금액 10,000원 이상부터 이벤트가 적용
	if (menuList.sumTotalPrice() >= 10000) {
		result.xmas = discountEvents.xmasDiscount();
		result.star = discountEvents.starDiscount();
		result.week = discountEvents.weekDiscount(menuList);
		result.freebie = discountEvents.canGetFreebie(menuList);
		return result;
	}

	result.canApplyEvents = false;
	return result;
};

export default applyEvents;
