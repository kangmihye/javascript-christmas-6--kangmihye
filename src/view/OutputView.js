import { Console } from "@woowacourse/mission-utils";
import { OUTPUTVIEW } from "../utils/Constants.js";
import MenuList from "../model/MeneList.js";

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
	},
};

export default OutputView;
