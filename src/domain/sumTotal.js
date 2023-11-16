import { PRICE, DRINK } from "../utils/Constants.js";
const sumTotal = {
	benefit(appliedEvents) {
		if (appliedEvents.canApplyEvents) {
			const { freebie } = appliedEvents;
			const totalDiscount = sumTotal.discount(appliedEvents);
			return freebie ? totalDiscount + PRICE[DRINK.champagne] : totalDiscount;
		}
		return 0;
	},
	discount(appliedEvents) {
		if (appliedEvents.canApplyEvents) {
			const { xmas, star, week } = appliedEvents;
			return xmas + star + week[1];
		}
		return 0;
	},
};

export default sumTotal;
