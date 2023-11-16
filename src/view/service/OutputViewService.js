import { Console } from "@woowacourse/mission-utils";
import { OUTPUTVIEW, NOTHING, BADGE } from "../../utils/Constants.js";

const OutputViewService = {
	separate1000(price) {
		return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	},
	distinguishEvents(appliedEvents) {
		const { xmas, star, week, freebie } = appliedEvents;
		if (xmas) Console.print(`${OUTPUTVIEW.xmasDiscount}${OutputViewService.separate1000(xmas)}${OUTPUTVIEW.krw}`);
		if (star) Console.print(`${OUTPUTVIEW.starDiscount}${OutputViewService.separate1000(star)}${OUTPUTVIEW.krw}`);
		if (week[1]) Console.print(`${week[0]}${OUTPUTVIEW.weekDiscount}${OutputViewService.separate1000(week[1])}${OUTPUTVIEW.krw}`);
		if (freebie) Console.print(`${OUTPUTVIEW.freebieDiscount}${OUTPUTVIEW.krw}`);
	},
	getBadge(totalBenefit) {
		if (totalBenefit >= 20000) return BADGE.santa;
		if (totalBenefit >= 10000) return BADGE.tree;
		if (totalBenefit >= 5000) return BADGE.star;
		return NOTHING;
	},
};

export default OutputViewService;
