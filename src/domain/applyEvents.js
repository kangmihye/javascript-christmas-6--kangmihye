import { MONEY } from "../utils/Constants.js";
const applyEvents = (menuList, discountEvents) => {
	const result = {
		canApplyEvents: true,
	};

	if (menuList.sumTotalPrice() >= MONEY.canApplyEventPrice) {
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
