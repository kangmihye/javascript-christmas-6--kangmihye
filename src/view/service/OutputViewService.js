import { Console } from "@woowacourse/mission-utils";
import { OUTPUTVIEW } from "../../utils/Constants.js";

const OutputViewService = {
	separate1000(price) {
		return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	},
	distinguishEvents(appliedEvents) {
		const { xmas, star, week, freebie } = appliedEvents;
		if (xmas)
			Console.print(
				`${OUTPUTVIEW.xmasDiscount}${OutputViewService.separate1000(xmas)}${OUTPUTVIEW.krw}`
			);
		if (star)
			Console.print(
				`${OUTPUTVIEW.starDiscount}${OutputViewService.separate1000(star)}${OUTPUTVIEW.krw}`
			);
		Console.print(
			`${week[0]}${OUTPUTVIEW.weekDiscount}${OutputViewService.separate1000(week[1])}${
				OUTPUTVIEW.krw
			}`
		);
		if (freebie) Console.print(`${OUTPUTVIEW.freebieDiscount}${OUTPUTVIEW.krw}`);
	},
};

export default OutputViewService;
