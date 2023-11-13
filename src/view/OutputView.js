import { Console } from "@woowacourse/mission-utils";
import { NOTHING, OUTPUTVIEW } from "../utils/Constants.js";
import applyEvents from "../domain/applyEvents.js";
import OutputViewService from "./service/OutputViewService.js";

const OutputView = {
	printMenu(menuMap) {
		Console.print(OUTPUTVIEW.orderedMenu);
		menuMap.forEach((cnt, name) => {
			Console.print(`${name} ${cnt}${OUTPUTVIEW.unit}`);
		});
		Console.print("");
	},
	printTotalPrice(menuList) {
		const price = menuList.sumTotalPrice();
		Console.print(OUTPUTVIEW.totalPrice);
		Console.print(`${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${OUTPUTVIEW.krw}`);
		Console.print("");
	},
	printFreebie(menuList, discountEvents) {
		Console.print(OUTPUTVIEW.freebie);
		discountEvents.canGetFreebie(menuList)
			? Console.print(OUTPUTVIEW.giftedFreebie)
			: Console.print(NOTHING);
		Console.print("");
	},
	printBenefit(menuList, discountEvents) {
		const appliedEvents = applyEvents(menuList, discountEvents);
		Console.print(OUTPUTVIEW.benefit);
		if (appliedEvents.canApplyEvents) {
			console.log("객체확인", appliedEvents); //삭제
			OutputViewService.distinguishEvents(appliedEvents);
		} else Console.print(NOTHING);
	},
};

export default OutputView;
