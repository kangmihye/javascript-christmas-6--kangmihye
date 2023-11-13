import { Console } from "@woowacourse/mission-utils";
import { NOTHING, OUTPUTVIEW } from "../utils/Constants.js";
import OutputViewService from "./service/OutputViewService.js";
import sumTotalBenefit from "../domain/sumTotalBenefit.js";

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
		let totalBenefit = sumTotalBenefit(appliedEvents);
		if (appliedEvents.freebie) totalBenefit += 25000;
		Console.print(OUTPUTVIEW.totalBenefit);
		Console.print(`-${OutputViewService.separate1000(totalBenefit)}${OUTPUTVIEW.krw}`);
		Console.print("");
	},
	printPayCharge(menuList, appliedEvents) {
		const charge = menuList.sumTotalPrice() - sumTotalBenefit(appliedEvents);
		Console.print(OUTPUTVIEW.charge);
		Console.print(`${OutputViewService.separate1000(charge)}${OUTPUTVIEW.krw}`);
	},
};

export default OutputView;
