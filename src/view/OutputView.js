import { Console } from "@woowacourse/mission-utils";
import { NOTHING, OUTPUTVIEW } from "../utils/Constants.js";
import DiscountEvents from "../domain/DiscountEvents.js";

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
	printFreebie(menuList) {
		Console.print(OUTPUTVIEW.freebie);
		DiscountEvents.canGetFreebie(menuList)
			? Console.print(OUTPUTVIEW.giftedFreebie)
			: Console.print(NOTHING);
	},
};

export default OutputView;
