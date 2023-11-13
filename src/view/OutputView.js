import { Console } from "@woowacourse/mission-utils";
import { NOTHING, OUTPUTVIEW, BADGE } from "../utils/Constants.js";
import OutputViewService from "./service/OutputViewService.js";
import sumTotal from "../domain/sumTotal.js";

const OutputView = {
	printMenu(menuMap) {
		Console.print(OUTPUTVIEW.orderedMenu);
		menuMap.forEach((cnt, name) => {
			Console.print(`${name} ${cnt}${OUTPUTVIEW.unit}`);
		});
		Console.print("");
	},
	printTotalPrice(menuList) {
		Console.print(OUTPUTVIEW.totalPrice);
		Console.print(`${OutputViewService.separate1000(menuList.sumTotalPrice())}${OUTPUTVIEW.krw}`);
		Console.print("");
	},
	printFreebie(menuList, discountEvents) {
		Console.print(OUTPUTVIEW.freebie);
		discountEvents.canGetFreebie(menuList)
			? Console.print(OUTPUTVIEW.giftedFreebie)
			: Console.print(NOTHING);
		Console.print("");
	},
	printBenefit(appliedEvents) {
		Console.print(OUTPUTVIEW.benefit);
		appliedEvents.canApplyEvents
			? OutputViewService.distinguishEvents(appliedEvents)
			: Console.print(NOTHING);
		Console.print("");
	},
	printTotalBenefit(appliedEvents) {
		Console.print(OUTPUTVIEW.totalBenefit);
		Console.print(
			`-${OutputViewService.separate1000(sumTotal.benefit(appliedEvents))}${OUTPUTVIEW.krw}`
		);
		Console.print("");
	},
	printPayCharge(menuList, appliedEvents) {
		const charge = menuList.sumTotalPrice() - sumTotal.discount(appliedEvents);
		Console.print(OUTPUTVIEW.charge);
		Console.print(`${OutputViewService.separate1000(charge)}${OUTPUTVIEW.krw}`);
		Console.print("");
	},
	printBadge() {
		Console.print(OUTPUTVIEW.badge);
	},
};

export default OutputView;
