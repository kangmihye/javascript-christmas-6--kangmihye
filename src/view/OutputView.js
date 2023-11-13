import { Console } from "@woowacourse/mission-utils";
import { NOTHING, OUTPUTVIEW } from "../utils/Constants.js";

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
		// 적용된게 없으면 없음
		Console.print(OUTPUTVIEW.benefit);
		console.log("값확인", discountEvents.xmasDiscount());
	},
};

export default OutputView;
